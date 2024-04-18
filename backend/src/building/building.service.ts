import { BadRequestException, Injectable } from '@nestjs/common';
import { ErrorService } from 'src/exceptions/error.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ICreateQRCodeDto, QrCodeService } from 'src/qr-code/qr-code.service';
import { IResponseData } from 'src/response';
import * as xlsx from 'xlsx';
import {
  AddApartmentUnitDto,
  AddParkingSpotDto,
  CreateCommunityMemberDto,
  GetApartmentUnitsDto,
  GetBuildingQueryDto,
  GetBuildingsDto,
  GetCommunityMembersDto,
  GetParkingsDto,
  GetSubscriptionsDto,
  UpdateCommunityMemberDto,
  UpdateParkingSpotDto,
} from './dto';
import { CommunityMembers, QRCode_Type } from '../../../shared/prisma-client';
import { v4 as uuidv4 } from 'uuid';
import { objectToCamel } from 'ts-case-convert';
import { retryAsyncFunction } from 'src/utils/helper';
import { StripeService } from 'src/stripe/stripe.service';
import Stripe from 'stripe';

interface IBulkUploadData {
  name: string;
  phone: string;
  email: string;
  unit_numbers: string;
  user_role: 'owner' | 'tenant';
  parking_level: number;
  parking_spot_number: string;
  parking_spot_type: 'regular' | 'electric';
  vehicle_plate: string;
  vehicle_type: 'regular' | 'electric' | 'hybrid';
}

@Injectable()
export class BuildingService {
  constructor(
    private prisma: PrismaService,
    private errorService: ErrorService,
    private qrCodeService: QrCodeService,
    private stripeService: StripeService
  ) {}

  async getBuildings(dto: GetBuildingsDto) {
    try {
      if (dto.managementId) {
        const buildings = await this.prisma.building.findMany({
          where: {
            management_id: dto.managementId,
          },
        });
        return new IResponseData(`buildings retrieved successfully`, buildings).json;
      } else {
        const members = await this.prisma.communityMembers.findMany({
          where: {
            OR: [
              {
                phone: dto.phone,
              },
              {
                email: dto.email.toLowerCase().toLowerCase(),
              },
              {
                user_id: dto.userId,
              },
            ],
          },
          include: {
            building: true,
            apartment_units: true,
          },
        });
        return new IResponseData(
          `buildings retrieved successfully`,
          members.map((member) => member.building),
        ).json;
      }
    } catch (error) {
      console.error(error);
      throw this.errorService.handleException(error);
    }
  }
  async getBuilding(queryDto: GetBuildingQueryDto) {
    try {
      const building = await this.prisma.building.findUnique({
        where: {
          id: queryDto.buildingId,
        },
        include: {
          community_members: queryDto.includeMembers && {
            include: {
              qr_code: true,
            },
          },
          parking_spots: true,
        },
      });
      return new IResponseData(`building retrieved successfully`, building).json;
    } catch (error) {
      console.error(error);
      throw this.errorService.handleException(error);
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
          qr_code: true,
          apartment_units: true,
          parking_spots: {
            select: {
              id: true,
              parking_spot_number: true,
            },
          },
        },
      });
      return new IResponseData(`community member retrieved successfully`, member).json;
    } catch (error) {
      console.error(error);
      throw this.errorService.handleException(error);
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
            qr_code: true,
            apartment_units: true,
          },
          skip: (dto.page - 1) * dto.pageSize, // Calculate the offset
          take: dto.pageSize, // Limit the number of items returned
        }),
        this.prisma.communityMembers.count({
          // Get the total count for pagination
          where: {
            building_id: buildingId,
          },
        }),
      ]);
      return new IResponseData(`community members retrieved successfully`, members).json;
    } catch (error) {
      console.error(error);
      throw this.errorService.handleException(error);
    }
  }

  // add comunity member
  async addCommunityMember(buildingId: string, dto: CreateCommunityMemberDto) {
    try {
      const memberId = uuidv4();
      const sanitizedPhone = dto.phone.toString().startsWith('+') ? dto.phone : `+${dto.phone}`;
      const user = await this.prisma.user.findFirst({
        where: {
          phone_number: sanitizedPhone,
        },
      });

      const occupiedUnits = await this.prisma.apartmentUnit.findMany({
        where: {
          AND: [
            {
              id: {
                in: dto.unitNumbers.map((unitNumber: any) => unitNumber),
              },
            },
            {
              AND: [ // Ensure both conditions are met for community_member_id
                {
                  community_member_id: {
                    not: null,
                  },
                },
                {
                  community_member_id: {
                    not: memberId,
                  },
                },
              ],
            }
          ],
        },
      });

      const occupiedParkingSpots = await this.prisma.parkingSpot.findMany({
        where: {
          AND: [
            {
              id: {
                in: dto.parkingSpots.map((parkingSpot: any) => parkingSpot),
              },
            },
            {
              AND: [ // Ensure both conditions are met for community_member_id
                {
                  owner_id: {
                    not: null,
                  },
                },
                {
                  owner_id: {
                    not: memberId,
                  },
                },
              ],
            }
          ],
        },
      });

      if (occupiedUnits.length > 0) {
        throw new BadRequestException(
          'One or more units are already occupied. Please select another unit.',
        );
      }

      if (occupiedParkingSpots.length > 0) {
        throw new BadRequestException(
          'One or more parking spots are already occupied. Please select another parking spot.',
        );
      }

      let transaction: any = [
        this.prisma.communityMembers.create({
          data: {
            id: memberId,
            user_id: user ? user.id : null,
            building_id: buildingId,
            email: dto.email.toLowerCase().toLowerCase(),
            name: dto.name,
            phone: sanitizedPhone,
            user_role: dto.userRole,
          },
        }),
        this.prisma.apartmentUnit.updateMany({
          where: {
            id: {
              in: dto.unitNumbers.map((unitNumber: any) => unitNumber),
            },
          },
          data: {
            community_member_id: memberId,
          },
        }),
        this.prisma.parkingSpot.updateMany({
          where: {
            id: {
              in: dto.parkingSpots.map((parkingSpot: any) => parkingSpot),
            },
          },
          data: {
            owner_id: memberId,
          },
        }),
      ];

      // prisma transaction
      const prismaWriteResults = await this.prisma.$transaction(transaction);

      return await retryAsyncFunction(
        () =>
          this.qrCodeService.create({
            buildingId: buildingId,
            id_for: memberId,
            qr_type: 'static',
            qr_for: 'community_member',
            name: `${dto.name} Community QR`,
          }),
        3, // Number of retries
        1000, // Interval between retries in milliseconds
      )
        .then(async (createQRRes) => {
          const { urls } = await this.qrCodeService.downloadQRCode(createQRRes.id);
          const { id: qrCodeId } = await this.prisma.qRCode.create({
            data: {
              id: `${createQRRes.id}`, // should be the same as memberQr.id,
              qr_for: 'community_member',
              url: createQRRes.url,
              qr_type: 'static',
              image_url: urls.png,
            },
          });
          const communityMember = await this.prisma.communityMembers.update({
            where: {
              id: memberId,
            },
            data: {
              qr_code_id: qrCodeId,
            },
          });

          return new IResponseData(`community member added successfully`, communityMember).json;
        })
        .catch(async (error) => {
          console.error(error);
          await this.prisma.communityMembers.delete({
            where: {
              id: memberId,
            },
          });
          throw this.errorService.handleException(error);
        });
    } catch (error) {
      console.error(error);
      throw this.errorService.handleException(error);
    }
  }

  // update a community member
  async updateCommunityMember(
    buildingId: string,
    memberId: string,
    updateData: UpdateCommunityMemberDto,
  ) {
    try {
      const occupiedUnits = await this.prisma.apartmentUnit.findMany({
        where: {
          AND: [
            {
              id: {
                in: updateData.unitNumbers.map((unitNumber: any) => unitNumber),
              },
            },
            {
              AND: [ // Ensure both conditions are met for community_member_id
                {
                  community_member_id: {
                    not: null,
                  },
                },
                {
                  community_member_id: {
                    not: memberId,
                  },
                },
              ],
            }
          ],
        },
      });

      const occupiedParkingSpots = await this.prisma.parkingSpot.findMany({
        where: {
          AND: [
            {
              id: {
                in: updateData.parkingSpots.map((parkingSpot: any) => parkingSpot),
              },
            },
            {
              AND: [ // Ensure both conditions are met for community_member_id
                {
                  owner_id: {
                    not: null,
                  },
                },
                {
                  owner_id: {
                    not: memberId,
                  },
                },
              ],
            }
          ],
        },
      });

      if (occupiedUnits.length > 0) {
        throw new BadRequestException(
          'One or more units are already occupied. Please select another unit.',
        );
      }

      if (occupiedParkingSpots.length > 0) {
        throw new BadRequestException(
          'One or more parking spots are already occupied. Please select another parking spot.',
        );
      }
      const [member] = await this.prisma.$transaction([
        this.prisma.communityMembers.update({
          where: {
            id: memberId,
            building_id: buildingId,
          },
          data: {
            name: updateData.name,
            email: updateData.email.toLowerCase(),
            phone: updateData.phone,
            user_role: updateData.userRole,
          },
        }),
        this.prisma.apartmentUnit.updateMany({
          where: {
            AND: [
              {
                id: {
                  notIn: updateData.unitNumbers.map((unitId: any) => unitId),
                },
              },
              {
                community_member_id: memberId,
              },
            ],
          },
          data: {
            community_member_id: null,
          },
        }),
        this.prisma.parkingSpot.updateMany({
          where: {
            AND: [
              {
                id: {
                  notIn: updateData.parkingSpots.map((spotId: any) => spotId),
                },
              },
              {
                owner_id: memberId,
              },
            ],
          },
          data: {
            owner_id: null,
          },
        }),
      ]);

      const trans2 = await this.prisma.$transaction([
        this.prisma.apartmentUnit.updateMany({
          where: {
            id: {
              in: updateData.unitNumbers.map((unitId: any) => unitId),
            },
          },
          data: {
            community_member_id: memberId,
          },
        }),
        this.prisma.parkingSpot.updateMany({
          where: {
            id: {
              in: updateData.parkingSpots.map((spotId: any) => spotId),
            },
          },
          data: {
            owner_id: memberId,
          },
        }),
      ]);

      return new IResponseData(`community member updated successfully`, member).json;
    } catch (error) {
      console.error(error);
      throw this.errorService.handleException(error);
    }
  }

  async deleteCommunityMember(buildingId: string, memberId: string) {
    try {
      const transaction = await this.prisma.$transaction([
        this.prisma.communityMembers.delete({
          where: {
            id: memberId,
          },
        }),
        this.prisma.apartmentUnit.updateMany({
          where: {
            community_member_id: memberId,
          },
          data: {
            community_member_id: null,
          },
        }),
        this.prisma.parkingSpot.updateMany({
          where: {
            owner_id: memberId,
          },
          data: {
            owner_id: null,
          },
        }),
      ]);
      return new IResponseData(`community member deleted successfully`, null).json;
    } catch (error) {
      console.error(error);
      throw this.errorService.handleException(error);
    }
  }

  private async createQrCodeTransaction(buildingId: string, entry: any, qrTransactions: any[]) {
    const memberEntry = entry[0];
    const parkingEntry = entry.length > 2 ? entry[2] : entry[1];
    const newMemberEntry: ICreateQRCodeDto = {
      name: `${memberEntry.name} Community QR`,
      qr_type: QRCode_Type.static,
      qr_for: 'community_member',
      id_for: memberEntry.id as string,
      buildingId: buildingId,
    };

    const newParkingEntry: ICreateQRCodeDto | undefined = parkingEntry
      ? {
          name: `${memberEntry.name} Parking QR`,
          qr_type: QRCode_Type.static,
          qr_for: 'parking_spot',
          id_for: parkingEntry.id as string,
          buildingId: buildingId,
        }
      : undefined;

    try {
      // create qr codes
      const qrCreateResults = await Promise.allSettled([
        this.qrCodeService.create(newMemberEntry),
        this.qrCodeService.create(newParkingEntry),
      ]);
      const downloadPromises = [];
      let usefulValues: {
        id: string;
        url: string;
      }[] = [];
      qrCreateResults.forEach((result, index) => {
        if (result.status === 'rejected') {
          console.error(result.reason);
        } else {
          // prepare for downloading image url
          const { id, url } = result.value;
          usefulValues[index] = {
            id,
            url,
          };
          downloadPromises.push(this.qrCodeService.downloadQRCode(id));
        }
      });

      // download images url
      const downloadResults = await Promise.allSettled(downloadPromises);
      downloadResults.forEach((result, index) => {
        if (result.status === 'rejected') {
          console.error(result.reason);
        } else {
          // prepare to save qr code to db
          const { urls } = result.value;
          qrTransactions.push(
            this.prisma.qRCode.create({
              data: {
                id: `${usefulValues[index].id}`, // should be the same as memberQr.id,
                qr_for: index === 0 ? 'community_member' : 'parking_spot',
                url: usefulValues[index].url,
                qr_type: 'static',
                image_url: urls.png,
              },
            }),
          );
          if (index === 0) {
            // also save qr code id to member
            qrTransactions.push(
              this.prisma.communityMembers.update({
                where: {
                  id: memberEntry.id,
                },
                data: {
                  qr_code_id: `${usefulValues[index].id}`,
                },
              }),
            );
          } else {
            // also save qr code id to parking spot
            qrTransactions.push(
              this.prisma.parkingSpot.update({
                where: {
                  id: parkingEntry.id,
                },
                data: {
                  qr_code_id: `${usefulValues[index].id}`,
                },
              }),
            );
          }
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
  async bulkUpload(buildingId: string, file: Express.Multer.File) {
    try {
      // const workbook       = xlsx.read(file.buffer);
      // const sheetName      = workbook.SheetNames[0];
      // const sheet          = workbook.Sheets[sheetName];
      // const data: CreateCommunityMemberDto[] = objectToCamel(xlsx.utils.sheet_to_json(sheet)) as CreateCommunityMemberDto[]
      // // prisma queries
      // const writePromises = []
      // for (const entry of data) {
      //     const unitNumbers = JSON.parse(entry.unitNumbers).map((unitNumber:any) => unitNumber.toString())
      //     const memberId = uuidv4()
      //     const vehicleId = uuidv4()
      //     const user = await this.prisma.user.findFirstOrThrow({
      //         where: {
      //             phone_number: `${entry.phone.toString().startsWith('+') ? entry.phone : `+${entry.phone}`}`,
      //         }
      //     })
      //     const prismaWritePromises = this.prisma.$transaction([
      //         this.prisma.communityMembers.create({
      //             data: {
      //                 id: memberId,
      //                 user_id: user ? user.id : null,
      //                 building_id: buildingId,
      //                 email: entry.email.toLowerCase(),
      //                 name: entry.name,
      //                 phone: `${entry.phone.toString().startsWith('+') ? entry.phone : `+${entry.phone}`}`,
      //                 unit_numbers: unitNumbers,
      //                 user_role: entry.userRole
      //             }
      //         }),
      //         this.prisma.vehicle.create({
      //             data: {
      //                 id: vehicleId,
      //                 vehicle_plate: entry.vehiclePlate,
      //                 vehicle_type: entry.vehicleType
      //             }
      //         }),
      //         this.prisma.parkingSpot.create({
      //             data: {
      //                 building_id: buildingId,
      //                 owner_id: memberId,
      //                 vehicle_id: vehicleId,
      //                 parking_level: entry.parkingLevel,
      //                 parking_spot_number: `${entry.parkingSpotNumber}`,
      //                 parking_spot_type: entry.parkingSpotType,
      //             }
      //         }),
      //     ])
      //     writePromises.push(prismaWritePromises)
      // }
      // const writeResults = await Promise.all(writePromises)
      // const qrTransactions = []
      // for (const entry of writeResults) {
      //     await this.createQrCodeTransaction(buildingId, entry, qrTransactions)
      // }
      // const qrResults = await this.prisma.$transaction(qrTransactions)
      // return new IResponseData(
      //     `community members uploaded successfully`,
      //     qrResults
      // ).json
    } catch (error) {
      console.error(error);
      throw this.errorService.handleException(error);
    }
  }

  async activateInactiveMembers(buildingId: string) {
    try {
      const members = await this.prisma.communityMembers.updateMany({
        where: {
          building_id: buildingId,
        },
        data: {
          status: 'active',
        },
      });
      return new IResponseData(`community members activated successfully`, members).json;
    } catch (error) {
      console.error(error);
      throw this.errorService.handleException(error);
    }
  }

  async toggleMemberStatus(buildingId: string, memberId: string) {
    try {
      let member = await this.prisma.communityMembers.findUnique({
        where: {
          id: memberId,
        },
      });
      member = await this.prisma.communityMembers.update({
        where: {
          id: memberId,
        },
        data: {
          status: member.status === 'active' ? 'inactive' : 'active',
        },
      });
      return new IResponseData(`community member status ${member.status}`, member).json;
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
            mode: 'insensitive',
          },
        },
        include: {
          qr_code: true,
          apartment_units: true,
        },
      });
      return new IResponseData(`Community members found successfully`, members).json;
    } catch (error) {
      console.error(error);
      throw this.errorService.handleException(error);
    }
  }

  // get parking spots
  async getParkingSpots(buildingId: string, dto: GetParkingsDto) {
    try {
      let parkingSpots;
      if (!dto.state) {
        parkingSpots = await this.prisma.parkingSpot.findMany({
          where: {
            building_id: buildingId,
          },
          include: {
            qr_code: true,
            current_subscription: true,
            owner: {
              select: {
                name: true,
                id: true,
              },
            },
          },
          skip: (dto.page - 1) * dto.pageSize, // Calculate the offset
          take: dto.pageSize, // Limit the number of items returned
        });
      } else {
        switch (dto.state) {
          case 'empty':
            parkingSpots = await this.prisma.parkingSpot.findMany({
              where: {
                building_id: buildingId,
                // owner_id: null
              },
              include: {
                qr_code: true,
                owner: {
                  select: {
                    name: true,
                    id: true,
                  },
                },
              },
            });
            break;
          case 'occupied':
            parkingSpots = await this.prisma.parkingSpot.findMany({
              where: {
                building_id: buildingId,
                // owner_id: {not: null}
              },
              include: {
                qr_code: true,
                owner: {
                  select: {
                    name: true,
                    id: true,
                  },
                },
              },
            });
            break;
          default:
            break;
        }
      }
      return new IResponseData(`Parking spots found successfully`, parkingSpots).json;
    } catch (error) {
      console.error(error);
      throw this.errorService.handleException(error);
    }
  }

  async getSubscriptions(buildingId: string, dto: GetSubscriptionsDto) {
    try {
      // const parkingSpots = await this.prisma.parkingSpot.findMany({
      //   where: {
      //     building_id: buildingId,
      //     current_subscription_id: { not: null },
      //   },
      //   include: {
      //     current_subscription: {
      //       include: {
      //         parking_spot: true,
      //       }
      //     },
      //     owner: {
      //       select: {
      //         name: true,
      //         id: true,
      //       },
      //     },
      //   },
      //   // skip: (dto.page - 1) * dto.pageSize, // Calculate the offset
      //   // take: dto.pageSize, // Limit the number of items returned
      // });
      // const subscriptions = parkingSpots.map((spot) => spot.current_subscription);
      const subscriptions = await this.prisma.subscription.findMany({
        where: {
          host_user_id: dto.userId,
        },
        include: {
          parking_spot: true,
        },
        orderBy: {
          created_at: 'desc',
        },
      })
      return new IResponseData(`Parking spots with subscriptions found successfully`, subscriptions).json;
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
            mode: 'insensitive',
          },
        },
        include: {
          qr_code: true,
          owner: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      });
      return new IResponseData(`Parking spot found successfully`, parkingSpot).json;
    } catch (error) {
      console.error(error);
      throw this.errorService.handleException(error);
    }
  }

  //add parking spot
  async addParkingSpot(buildingId: string, dto: AddParkingSpotDto) {
    try {
      const newParkingEntry: ICreateQRCodeDto = {
        name: `${dto.spotNumber} Parking QR`,
        qr_type: QRCode_Type.static,
        qr_for: 'parking_spot',
        id_for: dto.spotNumber,
        buildingId: buildingId,
      };

      const exisitingSpots = await this.prisma.parkingSpot.findMany({
        where: {
          building_id: buildingId,
          parking_spot_number: dto.spotNumber.trim(),
        }
      })

      if(exisitingSpots.length > 0) {
        throw new BadRequestException(
          `Parking spot number ${dto.spotNumber} already exists in this building`,
        );
      }
      // const { id: qrCodeId, url } = await this.qrCodeService.create(newParkingEntry);
      // const { urls } = await this.qrCodeService.downloadQRCode(qrCodeId);

      let communityMember: CommunityMembers | null;
      if(dto.communityMemberId) {
        communityMember = await this.prisma.communityMembers.findUnique({
          where: {
            id: dto.communityMemberId,
          },
        });
      }

      const {prod: product, hourlyPrice} = await this.stripeService.createProduct(dto.spotNumber, dto.price, dto.hourlyPrice, 'aed')

      const [spot] = await this.prisma.$transaction([
        // this.prisma.qRCode.create({
        //   data: {
        //     id: `${qrCodeId}`,
        //     qr_for: 'parking_spot',
        //     url: url,
        //     qr_type: 'static',
        //     image_url: urls.png,
        //   },
        // }),
        this.prisma.parkingSpot.create({
          data: {
            owner_id: communityMember ? communityMember.id : null,
            parking_level: dto.spotLevel,
            parking_spot_number: dto.spotNumber,
            parking_spot_type: dto.spotType,
            building_id: buildingId,
            parking_instructions: dto.parkingInstructions,
            price: dto.price,
            hourly_price: dto.hourlyPrice,
            hourly_stripe_price_id: hourlyPrice.id,
            stripe_product: product as any
            // qr_code_id: `${qrCodeId}`,
          },
          include: {
            qr_code: true,
          },
        }),
      ]);

      if(dto.depositPrice){
        const depositProd = await this.stripeService.createDepositProduct(dto.spotNumber, dto.depositPrice, 'aed')
        const updatedSpot = await this.prisma.parkingSpot.update({
          where: {
            id: spot.id
          },
          data: {
            deposit_price: dto.depositPrice,
            deposit_stripe_price_id: depositProd.default_price as string,
            stripe_deposit_product: depositProd as any
          }
        })
        return new IResponseData(`Parking spot added successfully`, updatedSpot).json;
      }

      return new IResponseData(`Parking spot added successfully`, spot).json;
    } catch (error) {
      console.error(error);
      throw this.errorService.handleException(error);
    }
  }

  async toggleDeposit(buildingId: string, spotId: string) {
    const {deposit_enabled} = await this.prisma.parkingSpot.findUnique({
      where: {
        id: spotId
      },
      select: {
        deposit_enabled: true
      }
    })
    const spot = await this.prisma.parkingSpot.update({
      where: {
        id: spotId,
      },
      data: {
        deposit_enabled: !deposit_enabled
      }
    })
    return new IResponseData(`Parking spot updated successfully`, spot).json;
  }

  async updateParkingSpot(buildingId: string, dto: UpdateParkingSpotDto) {
    try {
      let spot = await this.prisma.parkingSpot.findUniqueOrThrow({
        where: {
          id: dto.spotId,
        },
        include: {
          current_subscription: true
        }
      })
      if(!spot.stripe_product) {
        const {prod: product, hourlyPrice} = await this.stripeService.createProduct(dto.spotNumber, dto.price, dto.hourlyPrice, 'aed')
        spot = await this.prisma.parkingSpot.update({
          where: {
            id: dto.spotId,
          },
          data: {
            stripe_product: product as any,
            hourly_price: dto.hourlyPrice,
            hourly_stripe_price_id: hourlyPrice.id
          },
          include: {
            current_subscription: true
          }
        })
      }

      let priceObj = await this.stripeService.getPrice(spot.stripe_product['default_price'])
      
      let prodParams = {}
      if(priceObj.unit_amount !== dto.price) {
        prodParams['currency'] = priceObj.currency
        const price = await this.stripeService.createPrice(dto.price, 'aed', spot.stripe_product['id'], 'month')
        prodParams['price'] = {
          price_id: price.id,
          price_in_cents: dto.price
        }
        if(spot.current_subscription) {
          this.stripeService.stripe.subscriptions.update(spot.current_subscription.stripe_subscription['id'], {
            items: [
              {
                id: spot.current_subscription.stripe_subscription['items']['data'][0]['id'],
                price: price.id
              }
            ]
          })
        }
      }

      let hourlyPriceObj = spot.hourly_stripe_price_id && await this.stripeService.getPrice(spot.hourly_stripe_price_id)
      if(!hourlyPriceObj || hourlyPriceObj.unit_amount !== dto.hourlyPrice) {
        // prodParams['currency'] = hourlyPriceObj.currency
        spot.hourly_stripe_price_id && await this.stripeService.stripe.prices.update(spot.hourly_stripe_price_id, {
          active: false
        })
        const price = await this.stripeService.createPrice(dto.hourlyPrice, 'aed', spot.stripe_product['id'], 'hour')
        await this.prisma.parkingSpot.update({
          where: {
            id: dto.spotId
          },
          data: {
            hourly_price: dto.hourlyPrice,
            hourly_stripe_price_id: price.id
          }
        })
      }


      //FOR DEPOSIT
      if(!spot.deposit_stripe_price_id || !spot.stripe_deposit_product) {
        const depositProd = await this.stripeService.createDepositProduct(dto.spotNumber, dto.depositPrice, 'aed')
        const updatedSpot = await this.prisma.parkingSpot.update({
          where: {
            id: spot.id
          },
          data: {
            deposit_price: dto.depositPrice,
            deposit_stripe_price_id: depositProd.default_price as string,
            stripe_deposit_product: depositProd as any
          }
        })
      } else {
        let depositPriceObj = spot.deposit_stripe_price_id && await this.stripeService.getPrice(spot.deposit_stripe_price_id)
        if(!depositPriceObj || depositPriceObj.unit_amount !== dto.depositPrice) {
          // spot.deposit_stripe_price_id && await this.stripeService.stripe.prices.update(spot.deposit_stripe_price_id, {
          //   active: false
          // })
          const price = await this.stripeService.stripe.prices.create({
            unit_amount: dto.depositPrice,
            currency: 'aed',
            product: spot.stripe_deposit_product['id']
          })
          await this.stripeService.updateProduct(spot.stripe_deposit_product['id'], {
            price:{
              price_id: price.id,
              price_in_cents: dto.depositPrice
            },
            currency: 'aed',
            name: `${dto.spotNumber}Dep`
          })
          await this.prisma.parkingSpot.update({
            where: {
              id: dto.spotId
            },
            data: {
              deposit_price: dto.depositPrice,
              deposit_stripe_price_id: price.id
            }
          })
        }
      }

      if(spot.parking_spot_number !== dto.spotNumber) {
        prodParams['name'] = dto.spotNumber
      }

      let stripeProduct: Stripe.Product | null = null
      if(Object.keys(prodParams).length > 0) {
        stripeProduct = await this.stripeService.updateProduct(spot.stripe_product['id'], prodParams)
      }
      spot = await this.prisma.parkingSpot.update({
        where: {
          id: dto.spotId,
        },
        data: {
          parking_level: dto.spotLevel,
          parking_spot_number: dto.spotNumber,
          parking_spot_type: dto.spotType,
          parking_instructions: dto.parkingInstructions,
          price: dto.price,
          stripe_product: stripeProduct ? stripeProduct as any : spot.stripe_product,
          deposit_enabled: dto.depositEnabled
        },
        include: {
          qr_code: true,
          current_subscription: true
        },
      })
      return new IResponseData(`Parking spot updated successfully`, spot).json;


    } catch (error) {
      console.error(error);
      throw this.errorService.handleException(error);
    }
  }

  async getParkingSpot(buildingId: string, spotId: string) {
    try {
      const spot = await this.prisma.parkingSpot.findUnique({
        where: {
          id: spotId,
        },
        include: {
          qr_code: true,
          current_subscription: true,
          owner: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      });
      return new IResponseData(`Parking spot found successfully`, spot).json;
    } catch (error) {
      console.error(error);
      throw this.errorService.handleException(error);
    }
  }

  async addApartmentUnit(buildingId: string, dto: AddApartmentUnitDto) {
    try {
      const existingUnits = await this.prisma.apartmentUnit.findMany({
        where: {
          building_id: buildingId,
          unit_number: dto.unitNumber.trim(),
        }
      })

      if(existingUnits.length > 0) {
        throw new BadRequestException(
          `Apartment unit number ${dto.unitNumber} already exists in this building`,
        );
      }

      const newApartmentUnit = await this.prisma.apartmentUnit.create({
        data: {
          unit_number: dto.unitNumber.trim(),
          no_of_bedrooms: dto.noOfRooms,
          no_of_baths: dto.noOfBaths,
          building_id: buildingId,
        },
      });
      return new IResponseData(`Apartment unit added successfully`, newApartmentUnit).json;
    } catch (error) {
      console.error(error);
      throw this.errorService.handleException(error);
    }
  }

  async getApartmentUnits(buildingId: string, dto: GetApartmentUnitsDto) {
    try {
      let units;
      switch (dto.state) {
        case 'empty':
          units = await this.prisma.apartmentUnit.findMany({
            where: {
              building_id: buildingId,
              // community_member_id: null
            },
            include: {
                community_member: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
          });
          break;
        case 'occupied':
          units = await this.prisma.apartmentUnit.findMany({
            where: {
              building_id: buildingId,
              // community_member_id: {not: null}
            },
            include: {
                community_member: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
          });
          break;
        default:
          units = await this.prisma.apartmentUnit.findMany({
            where: {
              building_id: buildingId,
            },
            include: {
                community_member: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
          });
          break;
      }
      return new IResponseData(`Apartment units found successfully`, units).json;
    } catch (error) {
      console.error(error);
      throw this.errorService.handleException(error);
    }
  }
}
