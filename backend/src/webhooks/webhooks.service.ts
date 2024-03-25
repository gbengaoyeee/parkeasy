import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { ErrorService } from 'src/exceptions/error.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { InjectReservationQueue, ReservationQueueType } from 'src/queues/reservation.processor';
import { StripeService } from 'src/stripe/stripe.service';
import Stripe from 'stripe';

@Injectable()
export class WebhooksService {
  constructor(
    private prisma: PrismaService,
    private errorService: ErrorService,
    private stripeService: StripeService,
    @InjectReservationQueue() readonly reservationQueue: Queue,
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
          console.log('account.updated', user);

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
      include: {
        visitor: {
          select: {
            first_name: true,
          }
        },
        host: {
          select: {
            notification_token: true
          }
        },
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
      let finishQueueType: ReservationQueueType = 'finish';
      const delay = new Date(reservation.end_date).getTime() - new Date().getTime(); // delay until end_date
      await this.reservationQueue.add(finishQueueType,{id: reservation.id}, {delay});
      await this.prisma.listing.update({
        where: {
          id: reservation.listing_id,
        },
        data: {
          no_of_bookings: {
            increment: 1,
          },
        },
      });
      const hostMessage = {
        to: reservation.host.notification_token,
        sound: "default",
        title: "New Reservation!",
        body: `${reservation.visitor.first_name} has made a reservation! Go check out the details.`,
      };
      await fetch("https://exp.host/--/api/v2/push/send", {
        method: "POST",
        headers: {
          host: "exp.host",
          accept: "application/json",
          "accept-encoding": "gzip, deflate",
          "content-type": "application/json",
        },
        body: JSON.stringify(hostMessage),
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
