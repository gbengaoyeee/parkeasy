import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ErrorService } from 'src/exceptions/error.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetUserByPhone, GetUserDto } from './dto/user.dto';
import { IResponseData } from 'src/response';

@Injectable()
export class UserService {

    constructor(
        private prisma: PrismaService, 
        private errorService: ErrorService
    ) {}

    async getUser(dto: GetUserDto) {
        try {
            const user = await this.prisma.user.findFirst({
                where: {
                    OR: [
                        {email: dto.email},
                    ]
                },
                include: {
                    management: true
                }
            })
            if(!user) {
                throw this.errorService.handleException(new NotFoundException('User with that email is not found'))
            }

            return new IResponseData(
                `user retrieved successfully`,
                user
            ).json
        } catch (error) {
            throw this.errorService.handleException(error)
        }
    }

    async getUserByPhone(dto: GetUserByPhone) {
        try {
            let user = await this.prisma.user.findFirst({
                where: {
                    phone_number: dto.phone
                },
                include: {
                    management: true
                }
            })
            if(!user) {
                const user = await this.prisma.user.create({
                    data: {
                        phone_number: dto.phone,
                        user_roles: [dto.role]
                    }
                })
                return new IResponseData(
                    `user retrieved successfully`,
                    user
                ).json
            }
            
            return new IResponseData(
                `user retrieved successfully`,
                user
            ).json
        } catch (error) {
            throw this.errorService.handleException(error)
        }
    }
}
