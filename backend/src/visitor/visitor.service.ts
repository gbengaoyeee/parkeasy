import { Injectable } from '@nestjs/common';
import { ErrorService } from 'src/exceptions/error.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReservationDto, GetListingsDto } from './dto';
import { IResponseData } from 'src/response';

@Injectable()
export class VisitorService {
    constructor(
        private prisma: PrismaService, 
        private errorService: ErrorService
    ) {}

    async makeReservation(dto: CreateReservationDto) {
        try {
            const reservation = await this.prisma.reservation.create({
                data: {
                    visitor_id: dto.visitorId,
                    listing_id: dto.listingId,
                    host_id: dto.hostId,
                    building_id: dto.buildingId,
                    price: dto.price,
                    parking_spot_id: dto.parkingSpotId,
                    start_date: dto.startDate,
                    end_date: dto.endDate,
                    status: dto.status
                }
            })
            console.log("MAKE PAYMENT ASYNCHRONOUSLY")
            console.log("NOTIFY HOST ASYNCHRONOUSLY")
            return new IResponseData(
                `reservation created successfully`,
                reservation
            ).json
        } catch (error) {
            throw this.errorService.handleException(error)
        }
    }

    async getReservations(visitorId: string,) {
        try {
            const reservations = await this.prisma.reservation.findMany({
                where: {
                    visitor_id: visitorId
                }
            })
            return new IResponseData(
                `reservations retrieved successfully`,
                reservations
            ).json
        } catch (error) {
            throw this.errorService.handleException(error)
        }
    }

    async getListings(dto: GetListingsDto) {
        try {
            const listings = await this.prisma.listing.findMany({

                where:{
                    parking_spot: {
                        building: {
                            lat: {
                                gte: dto.lat - 0.15,
                                lte: dto.lat + 0.15
                            },
                            lng: {
                                gte: dto.lng - 0.15,
                                lte: dto.lng + 0.15
                            }
                        }
                    }
                }
                
            })
            return new IResponseData(
                `listings retrieved successfully`,
                listings
            ).json
        } catch (error) {
            throw this.errorService.handleException(error)
        }
    }
}
