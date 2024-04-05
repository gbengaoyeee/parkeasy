import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { GetCheckoutDetailsDto, PaymentIntentDto, SubscribeToParkingDto } from './dto';

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

  @Post('/subscribe-to-parking')
  async subscribeToParking(
    @Body()
    dto: SubscribeToParkingDto
  ) {
    return await this.paymentService.subscribeToParking(dto);
  }

  @Put('/cancel-subscription/:parkingSpotId')
  async cancelSubscription(
    @Param('parkingSpotId')
    parkingSpotId: string
  ) {
    return await this.paymentService.cancelSubscription(parkingSpotId);
  }
}
