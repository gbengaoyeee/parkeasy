import { Module } from '@nestjs/common';
import { BuildingService } from './building.service';
import { BuildingController } from './building.controller';
import { StripeService } from 'src/stripe/stripe.service';

@Module({
  providers: [BuildingService, StripeService],
  controllers: [BuildingController],
})
export class BuildingModule {}
