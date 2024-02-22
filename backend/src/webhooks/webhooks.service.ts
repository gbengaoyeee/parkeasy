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
        private stripeService: StripeService
    ) {}

    async handleStripeAccountUpdated(sig: any, body: Buffer) {

        let event: Stripe.Event;

        try {
            event = this.stripeService.stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
            // Handle the event
            switch (event.type) {
                case 'account.updated':
                    const accountUpdated = event.data.object;
                    let user = await this.prisma.user.findFirst({
    
                        where: {
                            stripe_account: {
                                path: ['id'],
                                equals: accountUpdated.id
                            }
                        },
                    })
                    
                    await this.prisma.user.update({

                        where: {
                            id: user.id
                        },
                        data: {
                            stripe_account: accountUpdated as any
                        }
                    })
                    // Then define and call a function to handle the event account.updated
                    break;
                // ... handle other event types
                default:
                    console.log(`Unhandled event type ${event.type}`);
            }
        } catch (err) {
            console.log(`⚠️  Webhook signature verification failed.`, err.message);
            throw this.errorService.handleException(err)
        }

    }
}
