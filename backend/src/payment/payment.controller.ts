import { Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
    constructor(private paymentService: PaymentService) {}

    @Post('/intent')
    async createPaymentIntent() {
        return await this.paymentService.createPaymentIntent()
    }
}
