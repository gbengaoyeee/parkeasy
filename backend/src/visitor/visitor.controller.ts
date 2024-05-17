import { Body, Controller, Delete, Get, Param, Post, Put, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { CreateReservationDto, GetListingsDto, UpdateReservationDto, UpdateSubscriptionDto } from './dto';
import { GetParkingsDto } from 'src/building/dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('visitor')
export class VisitorController {
  constructor(private visitorService: VisitorService) {}

  // make reservation
  @Post('reservation')
  async makeReservation(
    @Body()
    dto: CreateReservationDto,
  ) {
    return await this.visitorService.makeReservation(dto);
  }

  //update reservation
  @Put('reservation/:reservationId')
  async updateReservation(@Param('reservationId') reservationId: string, @Body()dto: UpdateReservationDto){
    return await this.visitorService.updateReservation(reservationId, dto);
  }

  // delete reservation
  @Delete('reservation/:reservationId')
  async deleteReservation(@Param('reservationId') reservationId: string) {
    return await this.visitorService.deleteReservation(reservationId);
  }

  // get reservations
  @Get('reservations/:visitorId')
  async getReservations(
    @Param('visitorId')
    visitorId: string,
  ) {
    return await this.visitorService.getReservations(visitorId);
  }
  // get listings
  @Get('listings')
  async getListings(
    @Query()
    dto: GetListingsDto,
  ) {
    return await this.visitorService.getListings(dto);
  }

  // get all free parking spots
  @Get('discover')
  async discover(
    @Query()
    dto: GetParkingsDto,
  ) {
    return await this.visitorService.discover(dto);
  }

  //get a parking spot
  @Get('discover/spot/:parkingSpotId')
  async getParkingSpot(@Param('parkingSpotId') parkingSpotId: string) {
    return await this.visitorService.getParkingSpot(parkingSpotId);
  }

  @Get('subscriptions/:userId')
  async getSubscriptions(
    @Param('userId')
    userId: string,
  ) {
    return await this.visitorService.getSubscriptions(userId);
  }

  // get a subscription
  @Get('subscription/:subscriptionId')
  async getSubscription(
    @Param('subscriptionId')
    subscriptionId: string,
  ) {
    return await this.visitorService.getSubscription(subscriptionId);
  }

  @Put('subscription/:subscriptionId')
  async updateSubscription(
    @Param('subscriptionId')
    subscriptionId: string,
    @Body()
    dto: UpdateSubscriptionDto,
  ) {
    return await this.visitorService.updateSubscription(subscriptionId, dto);
  }

  @Post('upload-image')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    return await this.visitorService.uploadImage(file);
  }
}
