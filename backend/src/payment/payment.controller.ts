import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { GetCheckoutDetailsDto, PaymentIntentDto } from './dto';

@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}

  @Post('/intent')
  async createPaymentIntent(
    @Body()
    dto: PaymentIntentDto,
  ) {
    return await this.paymentService.createPaymentIntent(dto);
  }

  @Get('/checkout-details')
  async getCheckoutDetails(
    @Query()
    dto: GetCheckoutDetailsDto,
  ) {
    return await this.paymentService.getCheckoutDetails(dto);
  }
}
