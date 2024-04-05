import {
  BadRequestException,
  Controller,
  Headers,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { WebhooksService } from './webhooks.service';
import { Request } from 'express';
import { RequestWithRawBody } from 'src/middleware/stripe-webhook.middleware';

@Controller('webhooks')
export class WebhooksController {
  constructor(private webhooksService: WebhooksService) {}

  @Post('/stripe/account-updated')
  async handleStripeAccountUpdated(
    @Headers('stripe-signature')
    signature: string,
    @Req()
    request: RequestWithRawBody,
  ) {
    if (!signature) {
      throw new BadRequestException('Missing stripe-signature header');
    }
    return this.webhooksService.handleStripeAccountUpdated(signature, request.rawBody);
  }
  @Post('/stripe/charges')
  async handleStripeCharges(
    @Headers('stripe-signature')
    signature: string,
    @Req()
    request: RequestWithRawBody,
  ) {
    if (!signature) {
      throw new BadRequestException('Missing stripe-signature header');
    }
    return this.webhooksService.handleStripeCharges(signature, request.rawBody);
  }

  @Post('/stripe/subscriptions')
  async handleStripeSubscriptions(
    @Headers('stripe-signature')
    signature: string,
    @Req()
    request: RequestWithRawBody,
  ) {
    if (!signature) {
      throw new BadRequestException('Missing stripe-signature header');
    }
    return this.webhooksService.handleStripeSubscriptions(signature, request.rawBody);
  }
}
