import { Injectable } from '@nestjs/common';
import { ErrorService } from 'src/exceptions/error.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { StripeService } from 'src/stripe/stripe.service';
import Stripe from 'stripe';

@Injectable()
export class WebhooksService {
  constructor(
    private prisma: PrismaService,
    private errorService: ErrorService,
    private stripeService: StripeService,
  ) {}

  async handleStripeAccountUpdated(sig: any, body: Buffer) {
    let event: Stripe.Event;

    try {
      event = this.stripeService.stripe.webhooks.constructEvent(
        body,
        sig,
        process.env.STRIPE_ACCOUNT_WEBHOOK_SECRET,
      );
      // Handle the event
      switch (event.type) {
        case 'account.updated':
          const accountUpdated = event.data.object;
          let user = await this.prisma.user.findFirst({
            where: {
              stripe_account: {
                path: ['id'],
                equals: accountUpdated.id,
              },
            },
          });

          await this.prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              stripe_account: accountUpdated as any,
            },
          });
          // Then define and call a function to handle the event account.updated
          break;
        // ... handle other event types
        default:
          console.log(`Unhandled event type ${event.type}`);
      }
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      throw this.errorService.handleException(err);
    }
  }


  private async handleStripeChargesEvents(charge: Stripe.Charge) {
    console.log('chargeSucceeded', charge.payment_intent);
    const reservation = await this.prisma.reservation.findFirst({
      where: {
        stripe_payment_intent_id: charge.payment_intent as string,
      },
    })

    if (reservation) {
      await this.prisma.reservation.update({
        where: {
          id: reservation.id,
        },
        data: {
          charge: charge as any,
        },
      });
    } else {
      throw new Error('Reservation not found for payment intent ' + charge.payment_intent);
    }
  }
  async handleStripeCharges(sig: any, body: Buffer) {
    let event: Stripe.Event;
    try {
      event = this.stripeService.stripe.webhooks.constructEvent(
        body,
        sig,
        process.env.STRIPE_CHARGES_WEBHOOK_SECRET,
      );
      console.log('event', event);
      // Handle the event
      switch (event.type) {
        case 'charge.succeeded':
          const chargeSucceeded = event.data.object;
          // Then define and call a function to handle the event charge.succeeded
          this.handleStripeChargesEvents(chargeSucceeded);
          break;
        // ... handle other event types
        case 'charge.updated':
          const chargeUpdated = event.data.object;
          // Then define and call a function to handle the event charge.updated
          this.handleStripeChargesEvents(chargeUpdated);
          break;
        default:
          console.log(`SEND A NOTIFICATION TO SUPPORT`);
          console.log(`Unhandled event type ${event.type}`);
      }
    } catch (err) {
      console.log(`SEND A NOTIFICATION TO SUPPORT ON ERROR`);
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      throw this.errorService.handleException(err);
    }
  }
}
