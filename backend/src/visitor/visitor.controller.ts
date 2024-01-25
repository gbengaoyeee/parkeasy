import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { CreateReservationDto, GetListingsDto } from './dto';

@Controller('visitor')
export class VisitorController {
    constructor(private visitorService: VisitorService) {}

    // make reservation
    @Post('reservation')
    async makeReservation(@Body() dto: CreateReservationDto) {
        return await this.visitorService.makeReservation(dto)
    }
    // get reservations
    @Get('reservations/:visitorId')
    async getReservations(@Param('visitorId') visitorId: string) {
        return await this.visitorService.getReservations(visitorId)
    }
    // get listings
    @Get('listings')
    async getListings(@Query() dto: GetListingsDto) {
        return await this.visitorService.getListings(dto);
    }

}
