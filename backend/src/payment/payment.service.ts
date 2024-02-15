import { Injectable } from '@nestjs/common';
import { ErrorService } from 'src/exceptions/error.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { IResponseData } from 'src/response';
import { Stripe } from 'stripe'

@Injectable()
export class PaymentService {
    stripe =  new Stripe(process.env.STRIPE_SECRET_KEY)
    constructor(
        private prisma: PrismaService, 
        private errorService: ErrorService,
    ) {}

    async createPaymentIntent() {
        try {
            const paymentIntent = await this.stripe.paymentIntents.create({
                amount: 1000,
                currency: 'usd',
                // automatic_payment_methods: {
                //     enabled: true
                // },
                payment_method_options: {
                    
                }
            })
            console.log(paymentIntent)
            return new IResponseData(
                `Intent created successfully`,
                paymentIntent
            ).json
        } catch (error) {
            
        }
    }
}
