import { Injectable } from '@nestjs/common';
import { ErrorService } from 'src/exceptions/error.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReservationDto, GetListingsDto, UpdateReservationDto } from './dto';
import { IResponseData } from 'src/response';
import { StripeService } from 'src/stripe/stripe.service';
import { Queue } from 'bull';
import { InjectReservationQueue, ReservationQueueType } from 'src/queues/reservation.processor';
import { InjectTestQueue } from 'src/queues/test.processor';
import { GetParkingsDto } from 'src/building/dto';

@Injectable()
export class VisitorService {
  constructor(
    @InjectReservationQueue() readonly reservationQueue: Queue,
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
        include: {
          host: {
            select: {
              notification_token: true,
            },
          },
          visitor: {
            select: {
              first_name: true,
            },
          },
        }
      });
      // add job to queue to send notification once reservation is over
      // let finishQueueType: ReservationQueueType = 'finish';
      // let reminderQueueType: ReservationQueueType = '24-hour-reminder';

      // const delay = new Date(dto.endDate).getTime() - new Date().getTime(); // delay until end_date
      // await this.reservationQueue.add(finishQueueType,{id: reservation.id}, {delay});
      // const updateListing = await this.prisma.listing.update({
      //   where: {
      //     id: dto.listingId,
      //   },
      //   data: {
      //     no_of_bookings: {
      //       increment: 1,
      //     },
      //   },
      // });
      
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
      const currentTime = new Date().getTime();

      const allReservations = await this.prisma.reservation.findMany({
        where: {
          visitor_id: visitorId,
        },
        include: {
          listing: {
            select: {
              id: true,
              title: true,
              description: true,
              parking_spot:{
                select: {
                  building: {
                    select: {
                      building_name: true,
                      lat: true,
                      lng: true,
                    }
                  }
                }
              }
            }
          },
          host: {
            select: {
              id: true,
              first_name: true,
              phone_number: true,
            }
          }
        }
      });
      const currentReservations = [];
      const upcomingReservations = [];
      const pastReservations= [];

      allReservations.forEach((reservation) => {
        const startTime = reservation.start_date.getTime();
        const endTime = reservation.end_date.getTime();
  
        if (startTime <= currentTime && endTime >= currentTime) {
          currentReservations.push(reservation);
        } else if (startTime > currentTime) {
          upcomingReservations.push(reservation);
        } else if (endTime < currentTime) {
          pastReservations.push(reservation);
        }
      });

      return new IResponseData(`reservations retrieved successfully`, {
        currentReservations,
        upcomingReservations,
        pastReservations,
      }).json;
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

  async discover(dto: GetParkingsDto) {
    try {
      const numOfSpots = await this.prisma.parkingSpot.count({
        where: {
          // current_subscription_id: {
          //   equals: null,
          // },
          stripe_product: {
            not: null
          }
        }
      });
      const parkingSpots = await this.prisma.parkingSpot.findMany({
        where: {
          // current_subscription_id: {
          //   equals: null,
          // },
          stripe_product: {
            not: null
          }
        },
        skip: (dto.page - 1) * dto.pageSize, // Calculate the offset
        take: dto.pageSize, // Limit the number of items returned
      })
      return new IResponseData(`reservations retrieved successfully`, {parkingSpots, numOfSpots}).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }

  async getParkingSpot(parkingSpotId: string) {
    try {
      const parkingSpot = await this.prisma.parkingSpot.findUnique({
        where: {
          id: parkingSpotId,
        },
        include: {
          current_subscription: true,
        }
      });
      return new IResponseData(`parking spot retrieved successfully`, parkingSpot).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }

  async getSubscriptions(userId: string) {
    try {
      const subscriptions = await this.prisma.subscription.findMany({
        where: {
          subscriber_user_id: userId,
          stripe_subscription: {
            path: ["status"],
            equals: "active",
          },
        },
        include: {
          parking_spot: true,
        },
      });
      return new IResponseData(`subscriptions retrieved successfully`, subscriptions).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }

  async getSubscription(subscriptionId: string) {
    try {
      const subscription = await this.prisma.subscription.findUnique({
        where: {
          id: subscriptionId,
        },
        include: {
          parking_spot: true,
        },
      });
      return new IResponseData(`subscription retrieved successfully`, subscription).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }
}
