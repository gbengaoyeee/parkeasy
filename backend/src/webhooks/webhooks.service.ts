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
      console.log("handling charges for event: ", event.type, event.id);
      // Handle the event
      switch (event.type) {
        case 'charge.succeeded':
          const chargeSucceeded = event.data.object;
          // Then define and call a function to handle the event charge.succeeded
          await this.handleStripeChargesEvents(chargeSucceeded);
          break;
        // ... handle other event types
        case 'charge.updated':
          const chargeUpdated = event.data.object;
          // Then define and call a function to handle the event charge.updated
          await this.handleStripeChargesEvents(chargeUpdated);
          break;
        
        case 'payment_intent.succeeded':
          const paymentIntentSucceeded = event.data.object;
          // Then define and call a function to handle the event payment_intent.succeeded
          if(paymentIntentSucceeded.metadata['appId'] !== 'easyparkway') {
            return;
          }
          const existing = await this.prisma.subscription.findFirst({
            where: {
              stripe_payment_intent: {
                not: null,
                path: ['id'],
                equals: paymentIntentSucceeded.id,
              },
            }
          })
          if(existing) {
            return;
          }
          if(paymentIntentSucceeded.metadata['paymentType'] === 'payment') {
            const payment = await this.prisma.subscription.create({
              data: {
                subscriber_user_id: paymentIntentSucceeded.metadata['subscriberUserId'],
                subscriber_name: paymentIntentSucceeded.metadata['subscriberName'],
                host_user_id: paymentIntentSucceeded.metadata['hostUserId'],
                subscriber_email: paymentIntentSucceeded.metadata['subscriberEmail'],
                subscriber_phone: paymentIntentSucceeded.metadata['subscriberPhone'],
                subscriber_car_model: paymentIntentSucceeded.metadata['subscriberCarModel'],
                subscriber_office_number: paymentIntentSucceeded.metadata['subscriberOfficeNumber'],
                subscriber_licence_plate: paymentIntentSucceeded.metadata['subscriberLicencePlate'],
                parking_spot_id: paymentIntentSucceeded.metadata['parkingSpotId'],
                stripe_payment_intent: paymentIntentSucceeded as any,
                subscriber_driver_licence_number: paymentIntentSucceeded.metadata['subscriberDriverLicenceNumber'],
                subscriber_id_card_number: paymentIntentSucceeded.metadata['subscriberEmiratesId'],
                no_of_hours: parseFloat(paymentIntentSucceeded.metadata['noOfHours']),
              }
            })
          }
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

  async handleStripeSubscriptions(sig: any, body: Buffer) {
    let event: Stripe.Event;
    try {
      event = this.stripeService.stripe.webhooks.constructEvent(
        body,
        sig,
        process.env.STRIPE_SUBSCRIPTIONS_WEBHOOK_SECRET,
      );
      console.log("handling subscriptions for event: ", event.type, event.id);
      // Handle the event
      switch (event.type) {
        case 'customer.subscription.created':{
          const customerSubscriptionCreated = event.data.object;
          if(customerSubscriptionCreated.metadata['appId'] !== 'easyparkway') {
            return;
          }
          // Then define and call a function to handle the event customer.subscription.created
          const sub = await this.prisma.subscription.create({
            data: {
              subscriber_user_id: customerSubscriptionCreated.metadata['subscriberUserId'],
              host_user_id: customerSubscriptionCreated.metadata['hostUserId'],
              subscriber_name: customerSubscriptionCreated.metadata['subscriberName'],
              subscriber_email: customerSubscriptionCreated.metadata['subscriberEmail'],
              subscriber_phone: customerSubscriptionCreated.metadata['subscriberPhone'],
              subscriber_car_model: customerSubscriptionCreated.metadata['subscriberCarModel'],
              subscriber_office_number: customerSubscriptionCreated.metadata['subscriberOfficeNumber'],
              subscriber_licence_plate: customerSubscriptionCreated.metadata['subscriberLicencePlate'],
              parking_spot_id: customerSubscriptionCreated.metadata['parkingSpotId'],
              stripe_subscription: customerSubscriptionCreated as any,
              subscriber_driver_licence_number: customerSubscriptionCreated.metadata['subscriberDriverLicenceNumber'],
              subscriber_id_card_number: customerSubscriptionCreated.metadata['subscriberEmiratesId'],
            }
          })
          customerSubscriptionCreated.status === 'active' && await this.prisma.parkingSpot.update({
            where: {
              id: customerSubscriptionCreated.metadata['parkingSpotId'],
            },
            data: {
              current_subscription_id: sub.id,
            },
          })
          await this.stripeService.stripe.subscriptions.update(customerSubscriptionCreated.id, {
            metadata: {
              subscriptionId: sub.id
            }
          })
          break;
        }
        case 'customer.subscription.deleted': {
          const customerSubscriptionDeleted = event.data.object;
          // Then define and call a function to handle the event customer.subscription.deleted
          if(customerSubscriptionDeleted.metadata['appId'] !== 'easyparkway') {
            return;
          }
          await this.prisma.subscription.update({
            where: {
              id: customerSubscriptionDeleted.metadata['subscriptionId'],
            },
            data: {
              stripe_subscription: customerSubscriptionDeleted as any,
            },
          })
          customerSubscriptionDeleted.status
          await this.prisma.parkingSpot.update({
            where: {
              id: customerSubscriptionDeleted.metadata['parkingSpotId'],
            },
            data: {
              current_subscription_id: null,
            },
          })
          break;
        }
        case 'customer.subscription.updated': {
          const customerSubscriptionUpdated = event.data.object;
          // Then define and call a function to handle the event customer.subscription.updated
          if(customerSubscriptionUpdated.metadata['appId'] !== 'easyparkway') {
            return;
          }
          await this.prisma.subscription.update({
            where: {
              id: customerSubscriptionUpdated.metadata['subscriptionId'],
            },
            data: {
              stripe_subscription: customerSubscriptionUpdated as any,
            },
          })
          await this.prisma.parkingSpot.update({
            where: {
              id: customerSubscriptionUpdated.metadata['parkingSpotId'],
            },
            data: {
              current_subscription_id: customerSubscriptionUpdated.metadata['subscriptionId'],
            },
          })
          break;
        }
        // ... handle other event types
        default:
          console.log(`SEND A NOTIFICATION TO SUPPORT`);
          console.log(`Unhandled event type ${event.type}`);
      }
    } catch (error) {
      
    }
  }
}
