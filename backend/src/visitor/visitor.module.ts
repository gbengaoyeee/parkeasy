import { Module } from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { VisitorController } from './visitor.controller';
import { StripeService } from 'src/stripe/stripe.service';

@Module({
  providers: [VisitorService, StripeService],
  controllers: [VisitorController],
})
export class VisitorModule {}
