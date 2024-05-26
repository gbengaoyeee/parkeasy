import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CompletePhoneVerificationDto, CreateUserDto, GetUserByPhone, GetUserDto, VerifyPhoneDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/email/:email')
  async getUser(
    @Param()
    dto: GetUserDto,
  ) {
    return await this.userService.getUser(dto);
  }

  @Get('/phone')
  async getUserByPhone(
    @Query()
    dto: GetUserByPhone,
  ) {
    return await this.userService.getUserByPhone(dto);
  }

  //create user
  @Post('/')
  async createUser(
    @Body()
    dto: CreateUserDto,
  ) {
    return await this.userService.createUser(dto);
  }

  // update user
  @Put('/:id')
  async updateUser(
    @Param('id')
    id: string,
    @Body()
    dto: CreateUserDto,
  ) {
    return await this.userService.updateUser(id, dto);
  }

  @Post('/verify-phone')
  async verifyPhone(@Body() dto: VerifyPhoneDto) {
    return await this.userService.verifyPhone(dto);
  }

  @Post('/complete-phone-verification')
  async completePhoneVerification(@Body() dto: CompletePhoneVerificationDto) {
    return await this.userService.completePhoneVerification(dto);
  }
}
