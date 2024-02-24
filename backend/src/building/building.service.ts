import { Injectable } from '@nestjs/common';
import { ErrorService } from 'src/exceptions/error.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ICreateQRCodeDto, QrCodeService } from 'src/qr-code/qr-code.service';
import { IResponseData } from 'src/response';
import * as xlsx from 'xlsx'
import { AddApartmentUnitDto, AddParkingSpotDto, CreateCommunityMemberDto, GetBuildingQueryDto, GetBuildingsDto, GetCommunityMembersDto, GetParkingsDto, UpdateCommunityMemberDto } from './dto';
import { QRCode_Type } from '../../../shared/prisma-client';
import { v4 as uuidv4 } from 'uuid'
import { objectToCamel} from 'ts-case-convert'

interface IBulkUploadData {
    name: string,
    phone: string,
    email: string,
    unit_numbers: string,
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
            if(dto.managementId) {
                const buildings = await this.prisma.building.findMany(
                    {
                        where: {management_id: dto.managementId}
                    }
                )
                return new IResponseData(
                    `buildings retrieved successfully`,
                    buildings
                ).json
            } else {
                const members = await this.prisma.communityMembers.findMany(
                    {
                        where: {
                            OR: [
                                {phone: dto.phone},
                                {email: dto.email},
                                {user_id: dto.userId}
                            ],
                        },
                        include: {
                            building: true
                        },
                    }
                )
                return new IResponseData(
                    `buildings retrieved successfully`,
                    members.map((member) => member.building)
                ).json
            }
        } catch (error) {
            console.error(error)
            throw this.errorService.handleException(error)
        }
    }
    async getBuilding(queryDto: GetBuildingQueryDto) {
        try {
            const building = await this.prisma.building.findUnique({
                where: {id: queryDto.buildingId}, 
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
    async getCommunityMembers(buildingId: string, dto: GetCommunityMembersDto) {
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

    // add comunity member
    async addCommunityMember(buildingId: string, dto: CreateCommunityMemberDto) {

        try {
            const unitNumbers = JSON.parse(dto.unitNumbers).map((unitNumber:any) => unitNumber.toString())
            const memberId = uuidv4()
            const vehicleId = uuidv4()
            const sanitizedPhone = dto.phone.toString().startsWith('+') ? dto.phone : `+${dto.phone}`
            const user = await this.prisma.user.findFirstOrThrow({
                where: {
                    phone_number: sanitizedPhone,
                }
            })
            let transaction: any = [
                this.prisma.communityMembers.create({
                    data: {
                        id: memberId,
                        user_id: user ? user.id : null,
                        building_id: buildingId,
                        email: dto.email,
                        name: dto.name,
                        phone: sanitizedPhone,
                        unit_numbers: unitNumbers,
                        user_role: dto.userRole
                    }
                }),
            ]

            if(dto.vehiclePlate) {
                transaction.push(
                    this.prisma.vehicle.create({
                        data: {
                            id: vehicleId,
                            vehicle_plate: dto.vehiclePlate,
                            vehicle_type: dto.vehicleType
                        }
                    })
                )
            }

            if(dto.parkingSpotNumber) {
                transaction.push(
                    this.prisma.parkingSpot.create({
                        data: {
                            building_id: buildingId,
                            owner_id: memberId,
                            vehicle_id: dto.vehiclePlate ? vehicleId : null,
                            parking_level: dto.parkingLevel,
                            parking_spot_number: `${dto.parkingSpotNumber}`,
                            parking_spot_type: dto.parkingSpotType,
                        }
                    })
                )
            }
    
            // prisma transaction
            const prismaWriteResults = await this.prisma.$transaction(transaction)
            console.log(prismaWriteResults)
    
            const qrTransactions = []
            await this.createQrCodeTransaction(buildingId, prismaWriteResults, qrTransactions)
            const qrResults = await this.prisma.$transaction(qrTransactions)

            return new IResponseData(
                `community member added successfully`,
                qrResults
            ).json
        } catch (error) {
            console.error(error)
            throw this.errorService.handleException(error)
        }
    }

    private async createQrCodeTransaction(buildingId: string, entry: any, qrTransactions: any[]) {
        const memberEntry = entry[0]
        const parkingEntry = entry.length > 2 ? entry[2] : entry[1]
        const newMemberEntry: ICreateQRCodeDto = {
            name: `${memberEntry.name} Community QR`,
            qr_type: QRCode_Type.static,
            qr_for: 'community_member',
            id_for: memberEntry.id as string,
            buildingId: buildingId
        }
        
        const newParkingEntry:ICreateQRCodeDto | undefined = parkingEntry ?  {
            name: `${memberEntry.name} Parking QR`,
            qr_type: QRCode_Type.static,
            qr_for: 'parking_spot',
            id_for: parkingEntry.id as string,
            buildingId: buildingId
        } : undefined

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
    async bulkUpload(buildingId: string, file: Express.Multer.File){
        try {
            const workbook       = xlsx.read(file.buffer);
            const sheetName      = workbook.SheetNames[0];
            const sheet          = workbook.Sheets[sheetName];
            const data: CreateCommunityMemberDto[] = objectToCamel(xlsx.utils.sheet_to_json(sheet)) as CreateCommunityMemberDto[]

            // prisma queries
            const writePromises = []
            for (const entry of data) {
                const unitNumbers = JSON.parse(entry.unitNumbers).map((unitNumber:any) => unitNumber.toString())
                const memberId = uuidv4()
                const vehicleId = uuidv4()
                const user = await this.prisma.user.findFirstOrThrow({
                    where: {
                        phone_number: `${entry.phone.toString().startsWith('+') ? entry.phone : `+${entry.phone}`}`,
                    }
                })
                const prismaWritePromises = this.prisma.$transaction([
                    this.prisma.communityMembers.create({
                        data: {
                            id: memberId,
                            user_id: user ? user.id : null,
                            building_id: buildingId,
                            email: entry.email,
                            name: entry.name,
                            phone: `${entry.phone.toString().startsWith('+') ? entry.phone : `+${entry.phone}`}`,
                            unit_numbers: unitNumbers,
                            user_role: entry.userRole
                        }
                    }),
                    this.prisma.vehicle.create({
                        data: {
                            id: vehicleId,
                            vehicle_plate: entry.vehiclePlate,
                            vehicle_type: entry.vehicleType
                        }
                    }),
                    this.prisma.parkingSpot.create({
                        data: {
                            building_id: buildingId,
                            owner_id: memberId,
                            vehicle_id: vehicleId,
                            parking_level: entry.parkingLevel,
                            parking_spot_number: `${entry.parkingSpotNumber}`,
                            parking_spot_type: entry.parkingSpotType,
                        }
                    }),
                ])
                writePromises.push(prismaWritePromises)
            }
            const writeResults = await Promise.all(writePromises)
            
            const qrTransactions = []
            for (const entry of writeResults) {
                await this.createQrCodeTransaction(buildingId, entry, qrTransactions)
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
    async getParkingSpots(buildingId: string, dto: GetParkingsDto) {
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

    //add parking spot
    async addParkingSpot(buildingId: string, dto: AddParkingSpotDto) {
        try {
            const communityMember = await this.prisma.communityMembers.findFirst({
                where: {
                    id: dto.communityMemberId
                }
            })
            const newParkingSpot = await this.prisma.parkingSpot.create({
                data: {
                    owner_id: communityMember ? communityMember.id : null,
                    parking_level: dto.spotLevel,
                    parking_spot_number: dto.spotNumber,
                    parking_spot_type: dto.spotType,
                    building_id: buildingId,
                    parking_instructions: dto.parkingInstructions
                },
                include: {
                    qr_code: true
                }
            });
            const newParkingEntry: ICreateQRCodeDto = {
                name: `${dto.spotNumber} Parking QR`,
                qr_type: QRCode_Type.static,
                qr_for: 'parking_spot',
                id_for: newParkingSpot.id as string,
                buildingId: buildingId
            }
            const {id, url} = await this.qrCodeService.create(newParkingEntry);
            const {urls} = await this.qrCodeService.downloadQRCode(id)

            const [_, spot] = await this.prisma.$transaction([
                this.prisma.qRCode.create({
                    data: {
                        id: `${id}`,
                        qr_for: 'parking_spot',
                        url: url,
                        qr_type: 'static',
                        image_url: urls.png,
                    }
                }),
                this.prisma.parkingSpot.update({
                    where: {
                        id: newParkingSpot.id
                    },
                    data: {
                        qr_code_id: `${id}`
                    }
                }),
            ]);
            
            return new IResponseData(
                `Parking spot added successfully`,
                spot
            ).json;
        } catch (error) {
            console.error(error);
            throw this.errorService.handleException(error);
        }
    }

    async getParkingSpot(buildingId: string, spotId: string) {
        try {
            const spot = await this.prisma.parkingSpot.findUnique({
                where: {
                    id: spotId
                },
                include: {
                    qr_code: true
                }
            });
            return new IResponseData(
                `Parking spot found successfully`,
                spot
            ).json;
        } catch (error) {
            console.error(error);
            throw this.errorService.handleException(error);
        }
    }

    async addApartmentUnit(buildingId: string, dto: AddApartmentUnitDto) {
        try {
            const unit = await this.prisma.apartmentUnit.findFirst({
                where: {
                    unit_number: dto.unitNumber
                }
            })
            const newApartmentUnit = await this.prisma.apartmentUnit.create({
                data: {
                    unit_number: dto.unitNumber.trim(),
                    no_of_bedrooms: dto.noOfRooms,
                    no_of_baths: dto.noOfBaths,
                    building_id: buildingId,
                }
            });
            return new IResponseData(
                `Apartment unit added successfully`,
                newApartmentUnit
            ).json;
        } catch (error) {
            console.error(error);
            throw this.errorService.handleException(error);
        }
    }

    async getApartmentUnits(buildingId: string) {
        try {
            const units = await this.prisma.apartmentUnit.findMany({
                where: {
                    building_id: buildingId
                }
            });
            return new IResponseData(
                `Apartment units found successfully`,
                units
            ).json;
        } catch (error) {
            console.error(error);
            throw this.errorService.handleException(error);
        }
    }
}
