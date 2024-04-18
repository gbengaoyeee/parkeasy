import { BadRequestException, Injectable } from '@nestjs/common';
import { ErrorService } from 'src/exceptions/error.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { IResponseData } from 'src/response';
import { Stripe } from 'stripe';
import { GetCheckoutDetailsDto, PaymentIntentDto, SubscribeToParkingDto } from './dto';
import { APP_BOOKING_FEE_PERCENTAGE } from 'src/utils/constants';

@Injectable()
export class PaymentService {
  stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  constructor(
    private prisma: PrismaService,
    private errorService: ErrorService,
  ) {}

  async createPaymentIntent(dto: PaymentIntentDto) {
    try {
      const { host } = await this.prisma.listing.findUniqueOrThrow({
        where: {
          id: dto.listingId,
        },
        include: {
          host: true,
        },
      });
      if (!host) {
        throw new BadRequestException(
          `Invalid listing found. Contact support at ${process.env.SUPPORT_EMAIL}`,
        );
      }
      const {email: receipt_email} = await this.prisma.user.findFirst({
        where: {
          stripe_customer_id: dto.customerId,
        },
        select: {
          email: true,
        }
      });
      if (!host.stripe_account)
        throw new BadRequestException(
          `Host is required to complete extra steps. Contact support at ${process.env.SUPPORT_EMAIL}`,
        );
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: dto.amount,
        currency: 'usd',
        // automatic_payment_methods: {
        //   enabled: true,
        // },
        payment_method_types: ['card'],
        on_behalf_of: host.stripe_account['id'],
        customer: dto.customerId,
        setup_future_usage: 'on_session',
        application_fee_amount: Math.round(dto.amount * APP_BOOKING_FEE_PERCENTAGE),
        transfer_data: {
          destination: host.stripe_account['id'],
        },
        receipt_email
      });
      return new IResponseData(`Intent created successfully`, paymentIntent).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }

  async getCheckoutDetails(dto: GetCheckoutDetailsDto) {
    try {
      const { listingId, startDate, endDate } = dto;
      const listing = await this.prisma.listing.findUniqueOrThrow({
        where: {
          id: listingId,
        },
      });

      const { totalPrice, differenceInDays } = this.calculatePriceByDates(
        listing.price,
        new Date(startDate),
        new Date(endDate),
      );

      const totalFees = totalPrice * APP_BOOKING_FEE_PERCENTAGE;
      const totalAmount = totalPrice + totalFees;
      return new IResponseData(`Checkout details retrieved successfully`, {
        totalPrice: Math.round(totalPrice),
        differenceInDays: Number(differenceInDays.toFixed(2)),
        totalFees: Math.round(totalFees),
        totalAmount: Math.round(totalAmount),
      }).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }

  private calculatePriceByDates(monthlyPrice: number, startDate: Date, endDate: Date) {
    // Constants
    const DAYS_IN_MONTH = 30;

    // Calculate the difference in time, then convert from milliseconds to days
    const differenceInTime = endDate.getTime() - startDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    // Calculate the daily price
    const dailyPrice = monthlyPrice / DAYS_IN_MONTH;

    // Calculate the total price based on the number of days
    const totalPrice = differenceInDays * dailyPrice;

    return {
      totalPrice,
      differenceInDays,
    };
  }

  async subscribeToParking(dto: SubscribeToParkingDto) {
    try {
      const user = await this.prisma.user.findUniqueOrThrow({
        where: {
          id: dto.userId,
        },
      })

      const spot = await this.prisma.parkingSpot.findUniqueOrThrow({
        where: {
          id: dto.parkingSpotId
        },
        include: {
          owner: true,
          building: {
            include: {
              management: {
                include: {
                  user: {
                    select: {
                      id: true,
                      stripe_account: true
                    }
                  }
                }
              }
            }
          }
        }
      })

      if(dto.paymentType === 'subscription') {
        if(spot.deposit_enabled && !spot.deposit_stripe_price_id) {
          throw new BadRequestException(`Deposit price is not set. Please contact the host.`)
        }
        const deposit = spot.deposit_enabled ? {
          price: spot.deposit_stripe_price_id,
          quantity: 1,
        } : {}
        const session = await this.stripe.checkout.sessions.create({
          mode: 'subscription',
          customer: user.stripe_customer_id,
          line_items: [
            {
              price: spot.stripe_product['default_price'],
              quantity: 1,
            },
            ...[deposit]
            // {
            //   price: process.env.PARKING_DEPOSIT_PRICE,
            //   quantity: 1,
            // },
          ],
          automatic_tax: {
            enabled: true,
          },
          subscription_data: {
            metadata: {
              parkingSpotId: dto.parkingSpotId,
              subscriberUserId: dto.userId,
              hostUserId: spot.building.management.user.id,
              paymentType: 'subscription',
              appId: 'easyparkway',
              subscriberName: dto.name,
              subscriberEmail: dto.email,
              subscriberPhone: dto.phone,
              subscriberCarModel: dto.carModel,
              subscriberOfficeNumber: dto.officeNumber,
              subscriberLicencePlate: dto.licencePlate,
              subscriberDriverLicenceNumber: dto.driverLicenceNumber,
              subscriberEmiratesId: dto.emiratesId,
            },
            application_fee_percent: Math.round(100 * APP_BOOKING_FEE_PERCENTAGE),
            transfer_data: {
              destination: spot.building.management.user.stripe_account['id'],
            },
          },
          customer_update: {
            address: 'auto',
            shipping: 'auto',
            name: 'auto',
          },
          payment_method_types: ['card'],
          metadata: {
            parkingSpotId: dto.parkingSpotId,
            subscriberUserId: dto.userId,
            hostUserId: spot.building.management.user.id,
            paymentType: 'subscription',
            appId: 'easyparkway',
            subscriberName: dto.name,
            subscriberEmail: dto.email,
            subscriberPhone: dto.phone,
            subscriberCarModel: dto.carModel,
            subscriberOfficeNumber: dto.officeNumber,
            subscriberLicencePlate: dto.licencePlate,
            subscriberDriverLicenceNumber: dto.driverLicenceNumber,
            subscriberEmiratesId: dto.emiratesId,
          },
          success_url: `${process.env.VISITOR_URL}/subscriptions`,
          cancel_url: `${process.env.VISITOR_URL}/discover/spot/${dto.parkingSpotId}`,
        })
        return new IResponseData(`Checkout session created successfully`, session).json;
      } else {
        const session = await this.stripe.checkout.sessions.create({
          mode: 'payment',
          customer: user.stripe_customer_id,
          automatic_tax: {
            enabled: true,
          },
          line_items: [
            {
              price: spot.hourly_stripe_price_id,
              quantity: dto.noOfHours,
            },
          ],
          metadata: {
            parkingSpotId: dto.parkingSpotId,
            subscriberUserId: dto.userId,
            hostUserId: spot.building.management.user.id,
            paymentType: 'payment',
            appId: 'easyparkway',
            noOfHours: dto.noOfHours,
            subscriberName: dto.name,
            subscriberEmail: dto.email,
            subscriberPhone: dto.phone,
            subscriberCarModel: dto.carModel,
            subscriberOfficeNumber: dto.officeNumber,
            subscriberLicencePlate: dto.licencePlate,
            subscriberDriverLicenceNumber: dto.driverLicenceNumber,
            subscriberEmiratesId: dto.emiratesId,
          },
          payment_intent_data: {
            metadata: {
              parkingSpotId: dto.parkingSpotId,
              subscriberUserId: dto.userId,
              noOfHours: dto.noOfHours,
              paymentType: 'payment',
              appId: 'easyparkway',
              hostUserId: spot.building.management.user.id,
              subscriberName: dto.name,
              subscriberEmail: dto.email,
              subscriberPhone: dto.phone,
              subscriberCarModel: dto.carModel,
              subscriberOfficeNumber: dto.officeNumber,
              subscriberLicencePlate: dto.licencePlate,
              subscriberDriverLicenceNumber: dto.driverLicenceNumber,
              subscriberEmiratesId: dto.emiratesId,
            },
            application_fee_amount: Math.round(100 * APP_BOOKING_FEE_PERCENTAGE),
            transfer_data: {
              destination: spot.building.management.user.stripe_account['id'],
            },
          },
          customer_update: {
            address: 'auto',
            shipping: 'auto',
            name: 'auto',
          },
          payment_method_types: ['card'],
          success_url: `${process.env.VISITOR_URL}/discover/spot/${dto.parkingSpotId}`,
          cancel_url: `${process.env.VISITOR_URL}/discover/spot/${dto.parkingSpotId}`,
        })
        return new IResponseData(`Checkout session created successfully`, session).json;
      }
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }

  async cancelSubscription(parkingSpotId: string) {
    try {
      const {current_subscription} = await this.prisma.parkingSpot.findUniqueOrThrow({
        where: {
          id: parkingSpotId
        },
        include: {
          current_subscription: true
        }
      })
      if(!current_subscription) {
        throw new BadRequestException(`No subscription found for parking spot ${parkingSpotId}`);
      }
      await this.stripe.subscriptions.update(current_subscription.stripe_subscription['id'], {
        cancel_at_period_end: true
      });
      // const session = await this.stripe.subscriptions.cancel(current_subscription.stripe_subscription['id']);

      await this.prisma.parkingSpot.update({
        where: {
          id: parkingSpotId
        },
        data: {
          current_subscription_id: null
        }
      })
      return new IResponseData(`Subscription will be cancelled at end of current billing period`, null).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }
}
