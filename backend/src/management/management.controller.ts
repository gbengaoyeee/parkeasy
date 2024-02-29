import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ManagementService } from './management.service';
import {
  GetManagementQueryDto,
  OnboardBuildingDto,
  OnboardManagementDto,
  PreSignUpDto,
  RegisterManagementDto,
} from './dto';

@Controller('management')
export class ManagementController {
  constructor(private managementService: ManagementService) {}

  @Post('pre-signup')
  async preSignUp(
    @Body()
    dto: PreSignUpDto,
  ) {
    return await this.managementService.preSignUpManagement(dto);
  }

  @Post('register-management')
  async registerManagment(
    @Body()
    dto: RegisterManagementDto,
  ) {
    return await this.managementService.registerManagment(dto);
  }

  @Post('onboard-management')
  async onboardManagement(
    @Body()
    dto: OnboardManagementDto,
  ) {
    return await this.managementService.onboardManagement(dto);
  }
  @Post('onboard-building')
  async onboardBuilding(
    @Body()
    dto: OnboardBuildingDto,
  ) {
    return await this.managementService.onboardBuilding(dto);
  }

  @Get('/:managementId')
  async getManagement(
    @Param('managementId')
    managementId: string,
    @Query()
    queryDto: GetManagementQueryDto,
  ) {
    return await this.managementService.getManagement(managementId, queryDto);
  }
}
