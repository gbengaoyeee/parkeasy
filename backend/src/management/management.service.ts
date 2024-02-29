import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  GetManagementQueryDto,
  OnboardBuildingDto,
  OnboardManagementDto,
  PreSignUpDto,
  RegisterManagementDto,
} from './dto';
import { AppwriteService } from 'src/appwrite/appwrite.service';
import { IResponseData, IResponseError } from 'src/response';
import { ErrorService } from 'src/exceptions/error.service';
import { v4 } from 'uuid';

@Injectable({})
export class ManagementService {
  constructor(
    private authProvider: AppwriteService,
    private prisma: PrismaService,
    private errorService: ErrorService,
  ) {}

  /**
   * pre signs up a management company
   * @param dto body to pass to function
   * @returns
   */
  async preSignUpManagement(dto: PreSignUpDto) {
    try {
      const contact = await this.prisma.preSignUpManagement.create({
        data: {
          email: dto.email.toLowerCase(),
          company_name: dto.companyName,
          contact_number: dto.contactNumber,
        },
      });
      return new IResponseData(
        `Your request is being reviewed. A member of our team will reach out to you shortly`,
        contact,
      ).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }

  /**
   * confirms and registers a managment company
   * @param dto body to pass to function
   * @returns
   */
  async registerManagment(dto: RegisterManagementDto) {
    try {
      const contact = await this.prisma.preSignUpManagement.findUnique({
        where: {
          email: dto.email.toLowerCase(),
        },
      });

      if (!contact) {
        throw this.errorService.handleException(
          new BadRequestException('Management has not pre registered'),
        );
      }
      let createOrUpdateUser;
      const user = await this.prisma.user.findFirst({
        where: {
          email: dto.email.toLowerCase(),
        },
      });
      const newId = v4();
      // create user with appwrite
      const userExists = await this.authProvider.getUserByEmail(contact.email.toLowerCase());
      if (!userExists) {
        await this.authProvider.createUser(contact.email.toLowerCase());
      }

      // save user to db after success of above
      if (user && !user.user_roles.includes('building_manager')) {
        createOrUpdateUser = this.prisma.user.update({
          where: {
            email: dto.email.toLowerCase(),
          },
          data: {
            user_roles: [...user.user_roles, 'building_manager'],
          },
        });
      } else {
        createOrUpdateUser = this.prisma.user.create({
          data: {
            id: newId,
            email: dto.email.toLowerCase(),
            user_roles: ['building_manager'],
          },
        });
      }
      const [newUser] = await Promise.all([createOrUpdateUser]);
      const management = await this.prisma.management.create({
        data: {
          user_id: newUser.id,
          business_email: contact.email.toLowerCase(),
          company_name: contact.company_name,
          phone_number: contact.contact_number,
        },
      });
      return new IResponseData(
        `${contact.company_name} is now registered. please inform them accordingly`,
        management,
      ).json;
    } catch (error) {
      console.error(error);
      throw this.errorService.handleException(error);
    }
  }

  async onboardManagement(dto: OnboardManagementDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          email: dto.email.toLowerCase(),
        },
      });
      const management = await this.prisma.management.findUnique({
        where: {
          business_email: dto.email.toLowerCase(),
        },
      });
      const updatedManagement = this.prisma.management.update({
        where: {
          id: management.id,
        },
        data: {
          ...management,
          address: dto.address,
          address2: dto.address2,
          lat: dto.lat,
          lng: dto.lng,
          phone_number: dto.phoneNumber,
          onboard_state: 'building_onboard',
          last_updated: new Date(),
        },
      });
      let staffPromise = [];
      if (dto.staffMembers) {
        dto.staffMembers.forEach((staff) => {
          if (staff.staffEmail.length && staff.staffName.length) {
            staffPromise.push(
              this.prisma.managementStaff.create({
                data: {
                  management_id: management.id,
                  date_added: new Date(),
                  email: staff.staffEmail,
                  name: staff.staffName,
                },
              }),
            );
          }
        });
      }

      const calls = await Promise.all([updatedManagement, ...staffPromise]);

      user['building_manager'] = calls[0];
      return new IResponseData(`${management.company_name} onboard complete!`, user).json;
    } catch (error) {
      console.error(error);
      throw this.errorService.handleException(error);
    }
  }

  async onboardBuilding(dto: OnboardBuildingDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          email: dto.email.toLowerCase(),
        },
      });
      const management = await this.prisma.management.findUnique({
        where: {
          business_email: dto.email.toLowerCase(),
        },
      });

      const building = await this.prisma.building.create({
        data: {
          management_id: management.id,
          building_name: dto.buildingName,
          building_type: dto.buildingType,
          address: dto.address,
          lat: dto.lat,
          lng: dto.lng,
          city: dto.city,
          state: dto.state,
          country: dto.country,
          facilities: dto.facilities,
          no_of_developer_parking_spots: dto.noOfDeveloperParkingSpots,
          no_of_parking_floors: dto.noOfParkingFloors,
          no_of_parking_spots: dto.noOfParkingSpots,
          no_of_units: dto.noOfUnits,
        },
      });

      await this.prisma.management.update({
        where: {
          id: management.id,
        },
        data: {
          onboard_state: 'payment',
        },
      });
      return new IResponseData(`onboarded ${building.building_name}!`, user).json;
    } catch (error) {
      console.error(error);
      throw this.errorService.handleException(error);
    }
  }

  async getManagement(managementId: string, queryDto: GetManagementQueryDto) {
    try {
      const management = await this.prisma.management.findUnique({
        where: {
          id: managementId,
        },
        include: {
          buildings: queryDto.includeBuildings,
          staffs: queryDto.includeStaffs,
        },
      });
      return new IResponseData(`management retrieved successfully!`, management).json;
    } catch (error) {
      console.error(error);
      throw this.errorService.handleException(error);
    }
  }
}
