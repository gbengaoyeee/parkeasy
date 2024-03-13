import { Module } from '@nestjs/common';
import { WebhooksController } from './webhooks.controller';
import { WebhooksService } from './webhooks.service';
import { StripeService } from 'src/stripe/stripe.service';
import { QueuesModule } from 'src/queues/queues.module';

@Module({
  imports: [
    QueuesModule.register(),
  ],
  controllers: [WebhooksController],
  providers: [WebhooksService, StripeService],
})
export class WebhooksModule {}
