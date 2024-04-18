import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { BuildingService } from './building.service';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  AddApartmentUnitDto,
  AddParkingSpotDto,
  CreateCommunityMemberDto,
  GetApartmentUnitsDto,
  GetBuildingQueryDto,
  GetBuildingsDto,
  GetCommunityMembersDto,
  GetParkingsDto,
  GetSubscriptionsDto,
  UpdateCommunityMemberDto,
  UpdateParkingSpotDto,
} from './dto';

@Controller('building')
export class BuildingController {
  constructor(private buildingService: BuildingService) {}

  @Get('/')
  async getBuilding(
    @Query()
    queryDto: GetBuildingQueryDto,
  ) {
    return await this.buildingService.getBuilding(queryDto);
  }

  @Get('buildings')
  async getBuildings(
    @Query()
    dto: GetBuildingsDto,
  ) {
    return await this.buildingService.getBuildings(dto);
  }

  @Post('/bulk-upload/:buildingId')
  @UseInterceptors(FileInterceptor('file'))
  async bulkUpload(
    @Param('buildingId')
    buildingId: string,
    @UploadedFile()
    file: Express.Multer.File,
  ) {
    return this.buildingService.bulkUpload(buildingId, file);
  }

  @Post('community-member/:buildingId')
  async addCommunityMember(
    @Param('buildingId')
    buildingId: string,
    @Body()
    dto: CreateCommunityMemberDto,
  ) {
    return await this.buildingService.addCommunityMember(buildingId, dto);
  }

  /** COMMUNITY MEMBERS */
  @Get('community-members/:buildingId')
  async getCommunityMembers(
    @Param('buildingId')
    buildingId: string,
    @Query()
    dto: GetCommunityMembersDto,
  ) {
    return await this.buildingService.getCommunityMembers(buildingId, dto);
  }
  @Get('community-member/:buildingId/:memberId')
  async getCommunityMember(
    @Param('buildingId')
    buildingId: string,
    @Param('memberId')
    memberId: string,
  ) {
    return await this.buildingService.getCommunityMember(buildingId, memberId);
  }

  @Post('activate-inactive-members/:buildingId')
  async activateInactiveMembers(
    @Param('buildingId')
    buildingId: string,
  ) {
    return await this.buildingService.activateInactiveMembers(buildingId);
  }
  @Put('toggle-member-status/:buildingId/:memberId')
  async activateInactiveMember(
    @Param('buildingId')
    buildingId: string,
    @Param('memberId')
    memberId: string,
  ) {
    return await this.buildingService.toggleMemberStatus(buildingId, memberId);
  }
  @Delete('delete-community-member/:buildingId/:memberId')
  async deleteCommunityMember(
    @Param('buildingId')
    buildingId: string,
    @Param('memberId')
    memberId: string,
  ) {
    return await this.buildingService.deleteCommunityMember(buildingId, memberId);
  }

  @Put('community-member/:buildingId/:memberId')
  async updateCommunityMember(
    @Param('buildingId')
    buildingId: string,
    @Param('memberId')
    memberId: string,
    @Body()
    updateData: UpdateCommunityMemberDto,
  ) {
    return await this.buildingService.updateCommunityMember(buildingId, memberId, updateData);
  }

  // search community members by name
  @Get('search-community-members/:buildingId')
  async searchCommunityMembersByName(
    @Param('buildingId')
    buildingId: string,
    @Query('name')
    name: string,
  ) {
    return await this.buildingService.searchCommunityMembersByName(buildingId, name);
  }

  /**PARKING SPOTS */
  // get parking spots
  @Get('parking-spots/:buildingId')
  async getParkingSpots(
    @Param('buildingId')
    buildingId: string,
    @Query()
    dto: GetParkingsDto,
  ) {
    return await this.buildingService.getParkingSpots(buildingId, dto);
  }

  // search parking spots by spot number
  @Get('search-parking-spots/:buildingId')
  async searchParkingSpotsBySpotNumber(
    @Param('buildingId')
    buildingId: string,
    @Query('spotNumber')
    spotNumber: string,
  ) {
    return await this.buildingService.searchParkingSpotsBySpotNumber(buildingId, spotNumber);
  }

  //Add parking spot
  @Post('parking-spot/:buildingId/')
  async addParkingSpot(
    @Param('buildingId')
    buildingId: string,
    @Body()
    dto: AddParkingSpotDto,
  ) {
    return await this.buildingService.addParkingSpot(buildingId, dto);
  }

  @Put('parking-spot/:buildingId')
  async updateParkingSpot(
    @Param('buildingId')
    buildingId: string,
    @Body()
    dto: UpdateParkingSpotDto,
  ) {
    return await this.buildingService.updateParkingSpot(buildingId, dto);
  }
  @Put('toggle-deposit/:buildingId/:spotId')
  async toggleDeposit(
    @Param('buildingId')
    buildingId: string,
    @Param('spotId')
    spotId: string,
  ) {
    return await this.buildingService.toggleDeposit(buildingId, spotId);
  }

  @Get('parking-spot/:buildingId/:parkingSpotId')
  async getParkingSpot(
    @Param('buildingId')
    buildingId: string,
    @Param('parkingSpotId')
    parkingSpotId: string,
  ) {
    return await this.buildingService.getParkingSpot(buildingId, parkingSpotId);
  }

  @Post('apartment-unit/:buildingId')
  async addApartmentUnit(
    @Param('buildingId')
    buildingId: string,
    @Body()
    dto: AddApartmentUnitDto,
  ) {
    return await this.buildingService.addApartmentUnit(buildingId, dto);
  }

  @Get('apartment-units/:buildingId')
  async getApartmentUnits(
    @Param('buildingId')
    buildingId: string,
    @Query()
    dto: GetApartmentUnitsDto,
  ) {
    return await this.buildingService.getApartmentUnits(buildingId, dto);
  }

  @Get('subscriptions/:buildingId')
  async getSubscriptions(
    @Param('buildingId')
    buildingId: string,
    @Query()
    dto: GetSubscriptionsDto,
  ) {
    return await this.buildingService.getSubscriptions(buildingId, dto);
  }
}
