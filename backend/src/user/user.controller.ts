import {  Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { CreateUserDto, GetUserByPhone, GetUserDto } from "./dto/user.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{
    constructor(private userService: UserService){}

    @Get('/email/:email')
    async getUser(@Param() dto: GetUserDto) {
        return await this.userService.getUser(dto)
    }

    @Get('/phone')
    async getUserByPhone(@Query() dto: GetUserByPhone) {
        return await this.userService.getUserByPhone(dto)
    }

    //create user
    @Post('/')
    async createUser(@Body() dto: CreateUserDto) {
        return await this.userService.createUser(dto)
    }
}