import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HostService } from './host.service';
import { EnableHostingDto, GetAccountLink, UpdateListingDto } from './dto';

@Controller('host')
export class HostController {
  constructor(private hostService: HostService) {}

  @Put('enable-hosting')
  async enableListing(
    @Body()
    dto: EnableHostingDto,
  ) {
    return await this.hostService.enableHosting(dto);
  }

  @Get('account-link/:userId')
  async createAccountLink(
    @Param()
    dto: GetAccountLink,
  ) {
    return await this.hostService.createAccountLink(dto);
  }

  // create listing
  @Post('listing')
  async createListing(
    @Body()
    updateData: UpdateListingDto,
  ) {
    return await this.hostService.createListing(updateData);
  }

  // update listing
  @Put('listing/:listingId')
  async updateListing(
    @Param('listingId')
    listingId: string,
    @Body()
    updateData: UpdateListingDto,
  ) {
    return await this.hostService.updateListing(listingId, updateData);
  }

  // get listing
  @Get('listing/:listingId')
  async getListing(
    @Param('listingId')
    listingId: string,
  ) {
    return await this.hostService.getListing(listingId);
  }

  // delete listing
  @Delete('listing/:listingId')
  async deleteListing(
    @Param('listingId')
    listingId: string,
  ) {
    return await this.hostService.deleteListing(listingId);
  }

  //get all listings
  @Get('listings/:hostId')
  async getListings(
    @Param('hostId')
    hostId: string,
  ) {
    return await this.hostService.getListings(hostId);
  }

  // get reservations
  @Get('reservations/:hostId')
  async getReservations(
    @Param('hostId')
    hostId: string,
  ) {
    return await this.hostService.getReservations(hostId);
  }
}
