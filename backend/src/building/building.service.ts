import { Injectable } from '@nestjs/common';
import { ErrorService } from 'src/exceptions/error.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ICreateQRCodeDto, QrCodeService } from 'src/qr-code/qr-code.service';
import { IResponseData } from 'src/response';
import * as xlsx from 'xlsx'
import { GetBuildingQueryDto, GetBuildingsDto, GetPaginatedQueryDto, UpdateCommunityMemberDto } from './dto';
import { QRCode_Type } from '../../../shared/prisma-client';
import { v4 as uuidv4 } from 'uuid'


interface IBulkUploadData {
    name: string,
    phone: string,
    email: string,
    unit_number: string,
    user_role: 'owner' | 'tenant',
    parking_level: number
    parking_spot_number: string
    parking_spot_type: 'regular' | 'electric'
    vehicle_plate: string
    vehicle_type: 'regular' | 'electric' | 'hybrid'
}

@Injectable()
export class BuildingService {

    constructor(
        private prisma: PrismaService, 
        private errorService: ErrorService,
        private qrCodeService: QrCodeService
    ) {}

    async getBuildings(dto: GetBuildingsDto) {
        try {
            const buildings = await this.prisma.building.findMany({where: {management_id: dto.managementId}})
            return new IResponseData(
                `buildings retrieved successfully`,
                buildings
            ).json
        } catch (error) {
            console.error(error)
            throw this.errorService.handleException(error)
        }
    }
    async getBuilding(buildingId: string, queryDto: GetBuildingQueryDto) {
        try {
            const building = await this.prisma.building.findUnique({
                where: {id: buildingId}, 
                include:{
                    community_members: queryDto.includeMembers && {
                        include: {
                            qr_code: true
                        }
                    },
                    parking_spots: true
                }
            })
            return new IResponseData(
                `building retrieved successfully`,
                building
            ).json
        } catch (error) {
            console.error(error)
            throw this.errorService.handleException(error)
        }
    }

    async getCommunityMember(buildingId: string, memberId: string) {
        try {
            const member = await this.prisma.communityMembers.findUnique({
                where: {
                    id: memberId,
                    building_id: buildingId,
                },
                include: {
                    qr_code: true
                }
            })
            return new IResponseData(
                `community member retrieved successfully`,
                member
            ).json
        } catch (error) {
            console.error(error)
            throw this.errorService.handleException(error)
        }
    }
    async getCommunityMembers(buildingId: string, dto: GetPaginatedQueryDto) {
        try {
            const [members, total] = await this.prisma.$transaction([
                this.prisma.communityMembers.findMany({
                    where: {
                        building_id: buildingId,
                    },
                    include: {
                        qr_code: true
                    },
                    skip: (dto.page - 1) * dto.pageSize, // Calculate the offset
                    take: dto.pageSize, // Limit the number of items returned
                }),
                this.prisma.communityMembers.count({ // Get the total count for pagination
                    where: {
                        building_id: buildingId,
                    },
                }),
            ]);
            return new IResponseData(
                `community members retrieved successfully`,
                members
            ).json
        } catch (error) {
            console.error(error)
            throw this.errorService.handleException(error)
        }
    }

    async bulkUpload(buildingId: string, file: Express.Multer.File){
        try {
            const workbook       = xlsx.read(file.buffer);
            const sheetName      = workbook.SheetNames[0];
            const sheet          = workbook.Sheets[sheetName];
            const data           = xlsx.utils.sheet_to_json(sheet);

            // prisma queries
            const writePromises = []
            data.forEach((entry: IBulkUploadData) => {
                const memberId = uuidv4()
                const vehicleId = uuidv4()
                const prismaWritePromises = this.prisma.$transaction([
                    this.prisma.communityMembers.create({
                        data: {
                            id: memberId,
                            building_id: buildingId,
                            email: entry.email,
                            name: entry.name,
                            phone: `${entry.phone}`,
                            unit_number: `${entry.unit_number}`,
                            user_role: entry.user_role
                        }
                    }),
                    this.prisma.vehicle.create({
                        data: {
                            id: vehicleId,
                            vehicle_plate: entry.vehicle_plate,
                            vehicle_type: entry.vehicle_type
                        }
                    }),
                    this.prisma.parkingSpot.create({
                        data: {
                            building_id: buildingId,
                            owner_id: memberId,
                            vehicle_id: vehicleId,
                            parking_level: entry.parking_level,
                            parking_spot_number: `${entry.parking_spot_number}`,
                            parking_spot_type: entry.parking_spot_type,
                        }
                    }),
                ])
                writePromises.push(prismaWritePromises)
            })
            const writeResults = await Promise.all(writePromises)
            
            const qrTransactions = []
            for (const entry of writeResults) {
                const [memberEntry, vehicleEntry, parkingEntry,] = entry
                const newMemberEntry = {
                    name: `${memberEntry.name} Community QR`,
                    qr_type: QRCode_Type.static,
                    redirectUrl: `${process.env.ENDPOINT_URL}/building/community-member/${buildingId}/?memberId=${memberEntry.id}`,
                }
                const newParkingEntry = {
                    name: `${memberEntry.name} Parking QR`,
                    qr_type: QRCode_Type.static,
                    redirectUrl: `${process.env.ENDPOINT_URL}/parking/${buildingId}/?parkingId=${parkingEntry.id}`,
                }

                try {
                    // create qr codes
                    const qrCreateResults = await Promise.allSettled([this.qrCodeService.create(newMemberEntry), this.qrCodeService.create(newParkingEntry)]);
                    const downloadPromises = []
                    let usefulValues: {id: string, url: string}[] = []
                    qrCreateResults.forEach((result, index) => {
                        if (result.status === 'rejected') {
                            console.error(result.reason)
                        } else {
                            // prepare for downloading image url
                            const {id, url} = result.value
                            usefulValues[index] = {id, url}
                            downloadPromises.push(this.qrCodeService.downloadQRCode(id))
                        }
                    })

                    // download images url
                    const downloadResults = await Promise.allSettled(downloadPromises)
                    downloadResults.forEach((result, index) => {
                        if (result.status === 'rejected') {
                            console.error(result.reason)
                        } else {
                            // prepare to save qr code to db
                            const {urls} = result.value
                            qrTransactions.push(
                                this.prisma.qRCode.create({
                                    data: {
                                        id: `${usefulValues[index].id}`, // should be the same as memberQr.id,
                                        qr_for: index === 0 ? 'community_member' : 'parking_spot',
                                        url: usefulValues[index].url,
                                        qr_type: 'static',
                                        image_url: urls.png,
                                    }
                                })
                            )
                            if(index === 0) {
                                // also save qr code id to member
                                qrTransactions.push(
                                    this.prisma.communityMembers.update({
                                        where: {
                                            id: memberEntry.id
                                        },
                                        data: {
                                            qr_code_id: `${usefulValues[index].id}`
                                        }
                                    })
                                )
                            } else {
                                // also save qr code id to parking spot
                                qrTransactions.push(
                                    this.prisma.parkingSpot.update({
                                        where: {
                                            id: parkingEntry.id
                                        },
                                        data: {
                                            qr_code_id: `${usefulValues[index].id}`
                                        }
                                    })
                                )
                            }
                        }
                    })
                } catch (error) {
                    console.error(error)
                }
            }
            const qrResults = await this.prisma.$transaction(qrTransactions)
            
            return new IResponseData(
                `community members uploaded successfully`,
                qrResults
            ).json

        } catch (error) {
            console.error(error)
            throw this.errorService.handleException(error)
        }
    }

    async activateInactiveMembers(buildingId: string) {
        try {
            const members = await this.prisma.communityMembers.updateMany({
                where: {
                    building_id: buildingId,
                },
                data: {
                    status: 'active'
                }
            })
            return new IResponseData(
                `community members activated successfully`,
                members
            ).json
        } catch (error) {
            console.error(error)
            throw this.errorService.handleException(error)
        }
    }

    
    // update a community member
    async updateCommunityMember(buildingId: string, memberId: string, updateData: UpdateCommunityMemberDto) {
      try {
        const member = await this.prisma.communityMembers.update({
          where: {
            id: memberId,
            building_id: buildingId,
          },
          data: updateData,
        });
        return new IResponseData(
          `community member updated successfully`,
          member
        ).json;
      } catch (error) {
        console.error(error);
        throw this.errorService.handleException(error);
      }
    }


    // search community members by name
    async searchCommunityMembersByName(buildingId: string, name: string) {
        try {
            const members = await this.prisma.communityMembers.findMany({
                where: {
                    building_id: buildingId,
                    name: {
                        contains: name,
                        mode: 'insensitive'
                    }
                },
                include: {
                    qr_code: true
                }
            });
            return new IResponseData(
                `Community members found successfully`,
                members
            ).json;
        } catch (error) {
            console.error(error);
            throw this.errorService.handleException(error);
        }
    }

    // get parking spots
    async getParkingSpots(buildingId: string, dto: GetPaginatedQueryDto) {
        try {
            const parkingSpots = await this.prisma.parkingSpot.findMany({
                where: {
                    building_id: buildingId,
                },
                include: {
                    qr_code: true
                },
                skip: (dto.page - 1) * dto.pageSize, // Calculate the offset
                take: dto.pageSize, // Limit the number of items returned
            });
            return new IResponseData(
                `Parking spots found successfully`,
                parkingSpots
            ).json;
        } catch (error) {
            console.error(error);
            throw this.errorService.handleException(error);
        }
    }

    // search parking spots by spot number
    async searchParkingSpotsBySpotNumber(buildingId: string, spotNumber: string) {
        try {
            const parkingSpot = await this.prisma.parkingSpot.findMany({
                where: {
                    building_id: buildingId,
                    parking_spot_number: {
                        contains: spotNumber,
                        mode: 'insensitive'
                    }
                },
                include: {
                    qr_code: true
                }
            });
            return new IResponseData(
                `Parking spot found successfully`,
                parkingSpot
            ).json;
        } catch (error) {
            console.error(error);
            throw this.errorService.handleException(error);
        }
    }
}
