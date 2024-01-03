import { Body, Controller, Get, Param, Post, Put, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { BuildingService } from './building.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { GetBuildingQueryDto, GetBuildingsDto, GetPaginatedQueryDto, UpdateCommunityMemberDto } from './dto';

@Controller('building')
export class BuildingController {
    constructor(private buildingService: BuildingService){}
    
    @Get('/:buildingId')
    async getBuilding(@Param('buildingId') buildingId: string, @Query() queryDto: GetBuildingQueryDto) {
        return await this.buildingService.getBuilding(buildingId, queryDto)
    }

    @Get('buildings/:managementId')
    async getBuildings(@Param() dto: GetBuildingsDto) {
        return await this.buildingService.getBuildings(dto)
    }
    
    @Post('/bulk-upload/:buildingId')
    @UseInterceptors(FileInterceptor('file'))
    async bulkUpload(@Param('buildingId') buildingId: string, @UploadedFile() file: Express.Multer.File) {
        return this.buildingService.bulkUpload(buildingId, file)
    }

    @Get('community-members/:buildingId')
    async getCommunityMembers(@Param('buildingId') buildingId: string, @Query() dto: GetPaginatedQueryDto) {
        return await this.buildingService.getCommunityMembers(buildingId, dto)
    }
    @Get('community-member/:buildingId/:memberId')
    async getCommunityMember(@Param('buildingId') buildingId: string, @Param('memberId') memberId: string) {
        return await this.buildingService.getCommunityMember(buildingId, memberId)
    }

    @Post('activate-inactive-members/:buildingId')
    async activateInactiveMembers(@Param('buildingId') buildingId: string) {
        return await this.buildingService.activateInactiveMembers(buildingId)
    }

    
    @Put('community-member/:buildingId/:memberId')
    async updateCommunityMember(
      @Param('buildingId') buildingId: string,
      @Param('memberId') memberId: string,
      @Body() updateData: UpdateCommunityMemberDto,
    ) {
      return await this.buildingService.updateCommunityMember(buildingId, memberId, updateData);
    }



    // search community members by name
    @Get('search-community-members/:buildingId')
    async searchCommunityMembersByName(@Param('buildingId') buildingId: string, @Query('name') name: string) {
        return await this.buildingService.searchCommunityMembersByName(buildingId, name);
    }

    // get parking spots
    @Get('parking-spots/:buildingId')
    async getParkingSpots(@Param('buildingId') buildingId: string, @Query() dto: GetPaginatedQueryDto) {
        return await this.buildingService.getParkingSpots(buildingId, dto);
    }

    // search parking spots by spot number
    @Get('search-parking-spots/:buildingId')
    async searchParkingSpotsBySpotNumber(@Param('buildingId') buildingId: string, @Query('spotNumber') spotNumber: string) {
        return await this.buildingService.searchParkingSpotsBySpotNumber(buildingId, spotNumber);
    }

    @Post('test-webhook')
    async testWebhook(@Body() body: any) {
        console.log(body)
    }
}
