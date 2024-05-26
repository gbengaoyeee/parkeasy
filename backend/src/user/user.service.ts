import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ErrorService } from 'src/exceptions/error.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CompletePhoneVerificationDto, CreateUserDto, GetUserByPhone, GetUserDto, VerifyPhoneDto } from './dto/user.dto';
import { IResponseData } from 'src/response';
import Stripe from 'stripe';
import { StripeService } from 'src/stripe/stripe.service';
import Twilio from "twilio";


const ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  private readonly twilioClient = Twilio(ACCOUNT_SID, AUTH_TOKEN);
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
      let user = await this.prisma.user.create({
        data: {
          email: dto.email ? dto.email.toLowerCase() : null,
          phone_number: dto.phone ? dto.phone : null,
          first_name: dto.firstName ? dto.firstName : null,
          last_name: dto.lastName ? dto.lastName : null,
          user_roles: dto.userRoles ? dto.userRoles : [],
        },
      });

      let whereClause = {}
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

      let customer: Stripe.Response<Stripe.Customer>;
      if (dto.createStripeCustomer && !user.stripe_customer_id) {
        customer = await this.stripeService.createCustomer(
          dto.email.toLowerCase(),
          dto.firstName + ' ' + dto.lastName,
          user.phone_number
        );
      }

      user = await this.prisma.user.update({
        where: {
          id: user.id
        },
        data: {
          stripe_customer_id: customer ? customer.id : user.stripe_customer_id,
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
          user.phone_number
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
          user_roles: [...new Set([...user.user_roles, ...dto.userRoles])],
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

  async verifyPhone(dto: VerifyPhoneDto) {
    try {
      const verification = await this.twilioClient.verify.v2.services(process.env.TWILIO_SERVICE_SID)
                .verifications
                .create({to: dto.phone, channel: 'sms'})
                .then(verification => console.log(verification.sid));

    return new IResponseData(`verification sent successfully`, verification).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }

  async completePhoneVerification(dto: CompletePhoneVerificationDto) {
    try {
      const verification = await this.twilioClient.verify.v2.services(process.env.TWILIO_SERVICE_SID)
                .verificationChecks
                .create({to: dto.phone, code: dto.code})
                .then(verification => console.log(verification.status));
    return new IResponseData(`verification completed successfully`, verification).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }
}
