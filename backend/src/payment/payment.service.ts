import { BadRequestException, Injectable } from '@nestjs/common';
import { ErrorService } from 'src/exceptions/error.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { IResponseData } from 'src/response';
import { Stripe } from 'stripe';
import { GetCheckoutDetailsDto, PaymentIntentDto } from './dto';
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
      if (!host)
        throw new BadRequestException(
          `Invalid listing found. Contact support at ${process.env.SUPPORT_EMAIL}`,
        );
      if (!host.stripe_account)
        throw new BadRequestException(
          `Host is required to complete extra steps. Contact support at ${process.env.SUPPORT_EMAIL}`,
        );
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: dto.amount,
        currency: 'usd',
        automatic_payment_methods: {
          enabled: true,
        },
        customer: dto.customerId,
        setup_future_usage: 'on_session',
        application_fee_amount: Math.round(dto.amount * APP_BOOKING_FEE_PERCENTAGE),
        transfer_data: {
          destination: host.stripe_account['id'],
        },
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
}
