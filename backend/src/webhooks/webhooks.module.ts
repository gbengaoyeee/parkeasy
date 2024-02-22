import { Module } from '@nestjs/common';
import { WebhooksController } from './webhooks.controller';
import { WebhooksService } from './webhooks.service';
import { StripeService } from 'src/stripe/stripe.service';

@Module({
  controllers: [WebhooksController],
  providers: [WebhooksService, StripeService]
})
export class WebhooksModule {}
