import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ErrorService } from 'src/exceptions/error.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, GetUserByPhone, GetUserDto } from './dto/user.dto';
import { IResponseData } from 'src/response';
import Stripe from 'stripe';
import { StripeService } from 'src/stripe/stripe.service';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  constructor(
    private prisma: PrismaService,
    private errorService: ErrorService,
    private stripeService: StripeService,
  ) {}

  async getUser(dto: GetUserDto) {
    try {
      const user = await this.prisma.user.findFirstOrThrow({
        where: {
          OR: [
            {
              email: dto.email.toLowerCase(),
            },
          ],
        },
        include: {
          management: true,
        },
      });
      if (!user) {
        throw this.errorService.handleException(
          new NotFoundException('User with that email is not found'),
        );
      }

      return new IResponseData(`user retrieved successfully`, user).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }

  async getUserByPhone(dto: GetUserByPhone) {
    try {
      let user = await this.prisma.user.findFirstOrThrow({
        where: {
          phone_number: dto.phone,
        },
        include: {
          management: true,
          community_members: {
            include: {
              building: true,
              parking_spots: {
                include: {
                  qr_code: true,
                },
              },
              apartment_units: true
            },
          },
        },
      });

      return new IResponseData(`user retrieved successfully`, user).json;
    } catch (error) {
      this.logger.error(error);
      throw this.errorService.handleException(error);
    }
  }

  async createUser(dto: CreateUserDto) {
    try {
      console.log('creating user at', new Date().toISOString());
      const user = await this.prisma.user.create({
        data: {
          email: dto.email ? dto.email.toLowerCase() : null,
          phone_number: dto.phone ? dto.phone : null,
          first_name: dto.firstName ? dto.firstName : null,
          last_name: dto.lastName ? dto.lastName : null,
          user_roles: dto.userRoles ? dto.userRoles : [],
        },
      });

      let whereClause = {
        
      }
      if(dto.email){
        whereClause = {
          email: dto.email.toLowerCase(),
        }
      }
      if(dto.phone){
        whereClause = {
          phone: dto.phone
        }
      }
      //update all community members with phone
      await this.prisma.communityMembers.updateMany({
        where: whereClause,
        data: {
          user_id: user.id,
        },
      });

      return new IResponseData(`user created successfully`, user).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }

  //update user
  async updateUser(id: string, dto: CreateUserDto) {
    try {
      let user = await this.prisma.user.findUniqueOrThrow({
        where: {
          id,
        },
      });
      let customer: Stripe.Response<Stripe.Customer>;
      if (dto.createStripeCustomer && !user.stripe_customer_id) {
        customer = await this.stripeService.createCustomer(
          dto.email.toLowerCase(),
          dto.firstName + ' ' + dto.lastName,
        );
      }
      
      user = await this.prisma.user.update({
        where: {
          id,
        },
        data: {
          email: dto.email ? dto.email.toLowerCase().toLowerCase() : user.email,
          phone_number: dto.phone ? dto.phone : user.phone_number,
          first_name: dto.firstName ? dto.firstName : user.first_name,
          last_name: dto.lastName ? dto.lastName : user.last_name,
          user_roles: dto.userRoles ? dto.userRoles : user.user_roles,
          mobile_onboard_status: dto.mobileOnboardStatus ? dto.mobileOnboardStatus : user.mobile_onboard_status,
          stripe_customer_id: customer ? customer.id : user.stripe_customer_id,
          notification_token: dto.notificationToken ? dto.notificationToken : user.notification_token
        },
      });
      return new IResponseData(`user updated successfully`, user).json;
    } catch (error) {
      console.log(error);
      throw this.errorService.handleException(error);
    }
  }
}
