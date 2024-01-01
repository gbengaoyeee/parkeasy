import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ErrorService } from 'src/exceptions/error.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetUserDto } from './dto/user.dto';

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
                        {email: dto.idOrEmail},
                        {id: dto.idOrEmail}
                    ]
                },
                include: {
                    management: true
                }
            })
            if(!user) {
                throw this.errorService.handleException(new NotFoundException('User with that email is not found'))
            }

            return user
        } catch (error) {
            throw this.errorService.handleException(error)
        }
    }
}
