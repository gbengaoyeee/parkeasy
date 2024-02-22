import { Module } from '@nestjs/common';
import { HostService } from './host.service';
import { HostController } from './host.controller';
import { StripeService } from 'src/stripe/stripe.service';

@Module({
  providers: [HostService, StripeService],
  controllers: [HostController,]
})
export class HostModule {}
