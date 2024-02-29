import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { CreateReservationDto, GetListingsDto, UpdateReservationDto } from './dto';

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
}
