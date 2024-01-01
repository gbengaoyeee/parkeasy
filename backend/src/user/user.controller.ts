import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { GetUserDto } from "./dto/user.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{
    constructor(private userService: UserService){}

    @Get('/:idOrEmail')
    async getUser(@Param() dto: GetUserDto) {
        return await this.userService.getUser(dto)
    }
}