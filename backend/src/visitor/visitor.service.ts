import { Injectable } from '@nestjs/common';
import { ErrorService } from 'src/exceptions/error.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReservationDto, GetListingsDto, UpdateReservationDto } from './dto';
import { IResponseData } from 'src/response';
import { StripeService } from 'src/stripe/stripe.service';

@Injectable()
export class VisitorService {
  constructor(
    private prisma: PrismaService,
    private errorService: ErrorService,
    private stripeService: StripeService,
  ) {}

  async makeReservation(dto: CreateReservationDto) {
    try {
      const { parking_spot } = await this.prisma.listing.findUnique({
        where: {
          id: dto.listingId,
        },
        include: {
          parking_spot: {
            include: {
              building: {
                select: {
                  id: true,
                },
              },
            },
          },
        },
      });
      const reservation = await this.prisma.reservation.create({
        data: {
          visitor_id: dto.visitorId,
          listing_id: dto.listingId,
          host_id: dto.hostId,
          price: dto.totalPrice,
          app_fees: dto.totalFees,
          stripe_payment_intent_id: dto.paymentIntentId,
          building_id: parking_spot.building.id,
          parking_spot_id: dto.parkingSpotId,
          start_date: new Date(dto.startDate),
          end_date: new Date(dto.endDate),
          status: dto.status,
        },
      });
      const updateListing = await this.prisma.listing.update({
        where: {
          id: dto.listingId,
        },
        data: {
          no_of_bookings: {
            increment: 1,
          },
        },
      });
      console.log('MAKE PAYMENT ASYNCHRONOUSLY');
      console.log('NOTIFY HOST ASYNCHRONOUSLY');
      return new IResponseData(`reservation created successfully`, reservation).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }

  async updateReservation(reservationId: string, dto: UpdateReservationDto) {
    try {
      const reservation = await this.prisma.reservation.update({
        where: {
          id: reservationId,
        },
        data: {
          status: dto.status,
        },
      });
      return new IResponseData(`reservation updated successfully`, reservation).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }

  async deleteReservation(reservationId: string) {
    try {
      const reservation = await this.prisma.reservation.delete({
        where: {
          id: reservationId,
        },
      });
      return new IResponseData(`reservation deleted successfully`, reservation).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }

  async getReservations(visitorId: string) {
    try {
      const reservations = await this.prisma.reservation.findMany({
        where: {
          visitor_id: visitorId,
        },
      });
      return new IResponseData(`reservations retrieved successfully`, reservations).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }

  async getListings(dto: GetListingsDto) {
    try {
      const reservations = await this.prisma.reservation.findMany({});
      let listings = await this.prisma.listing.findMany({
        where: {
          status: 'active',
          reservations: {
            every: {
              OR: [
                {
                  start_date: {
                    gte: new Date(dto.endDate), // Reservation starts after or on the end date of the new period
                  },
                },
                {
                  end_date: {
                    lte: new Date(dto.startDate), // Reservation ends on or before the start date of the new period
                  },
                },
              ],
            },
          },
          parking_spot: {
            building: {
              lat: {
                gte: dto.lat - 0.15,
                lte: dto.lat + 0.15,
              },
              lng: {
                gte: dto.lng - 0.15,
                lte: dto.lng + 0.15,
              },
            },
          },
        },
        include: {
          reservations: {
            select: {
              start_date: true,
              end_date: true,
            },
          },
          parking_spot: {
            select: {
              building: {
                select: {
                  lat: true,
                  lng: true,
                },
              },
            },
          },
        },
      });

      // listings = listings.filter(listing => {
      //     for (let reservation of listing.reservations) {
      //         // console.log(reservation.start_date, new Date(dto.startDate), )
      //         // console.log("Is Start date between the range:", (reservation.start_date <= new Date(dto.startDate) && new Date(dto.startDate) <= reservation.end_date))

      //         const isInt = ((new Date(dto.startDate) <= reservation.end_date && new Date(dto.startDate) >= reservation.start_date) ||
      //         (new Date(dto.endDate) <= reservation.end_date && new Date(dto.endDate) >= reservation.start_date) ||
      //         (reservation.start_date >= new Date(dto.startDate) && reservation.start_date <= new Date(dto.endDate)) ||
      //         (reservation.end_date >= new Date(dto.startDate) && reservation.end_date <= new Date(dto.endDate)))
      //         console.log("INTERSECT:",isInt)
      //         if (isInt) {
      //             return false
      //         }
      //     }
      //     return true
      // })

      listings.forEach((listing) => {
        listing['lat'] = listing.parking_spot.building.lat;
        listing['lng'] = listing.parking_spot.building.lng;
        delete listing.parking_spot;
      });
      return new IResponseData(`listings retrieved successfully`, listings).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }
}
