import { Injectable, NotFoundException } from '@nestjs/common';
import { ErrorService } from 'src/exceptions/error.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, GetUserByPhone, GetUserDto } from './dto/user.dto';
import { IResponseData } from 'src/response';

@Injectable()
export class UserService {

    constructor(
        private prisma: PrismaService, 
        private errorService: ErrorService
    ) {}

    async getUser(dto: GetUserDto) {
        try {
            const user = await this.prisma.user.findFirstOrThrow({
                where: {
                    OR: [
                        {email: dto.email},
                    ]
                },
                include: {
                    management: true,
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
            let user = await this.prisma.user.findFirstOrThrow({
                where: {
                    phone_number: dto.phone
                },
                include: {
                    management: true,
                    community_members: {
                        include: {
                            building: true,
                            parking_spots: {
                                include: {
                                    qr_code: true
                                }
                            }
                        }
                    }
                }
            })
            
            return new IResponseData(
                `user retrieved successfully`,
                user
            ).json
        } catch (error) {
            throw this.errorService.handleException(error)
        }
    }

    async createUser(dto: CreateUserDto) {
        try {
            console.log('creating user at', new Date().toISOString())
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    phone_number: dto.phone,
                    first_name: dto.firstName,
                    last_name: dto.lastName,
                    user_roles: dto.userRoles
                }
            })

            //update all community members with phone
            await this.prisma.communityMembers.updateMany({
                where: {
                    OR: [
                        {phone: dto.phone},
                        {email: dto.email},
                    ]
                },
                data: {
                    user_id: user.id
                }
            })

            return new IResponseData(
                `user created successfully`,
                user
            ).json
        } catch (error) {
            throw this.errorService.handleException(error)
        }
    }

    //update user
    async updateUser(id: string, dto: CreateUserDto) {
        try {
            const user = await this.prisma.user.update({
                where: {
                    id
                },
                data: {
                    email: dto.email,
                    phone_number: dto.phone,
                    first_name: dto.firstName,
                    last_name: dto.lastName,
                    user_roles: dto.userRoles,
                    mobile_onboard_status: dto.mobileOnboardStatus
                }
            })
            return new IResponseData(
                `user updated successfully`,
                user
            ).json
        } catch (error) {
            throw this.errorService.handleException(error)
        }
    }
}
