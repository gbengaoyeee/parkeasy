import { Injectable } from '@nestjs/common';
import { ErrorService } from 'src/exceptions/error.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { EnableHostingDto, GetAccountLink, UpdateListingDto } from './dto';
import { IResponseData } from 'src/response';
import { StripeService } from 'src/stripe/stripe.service';

@Injectable()
export class HostService {
  constructor(
    private prisma: PrismaService,
    private errorService: ErrorService,
    private stripeService: StripeService,
  ) {}

  async enableHosting(dto: EnableHostingDto) {
    try {
      let user = await this.prisma.user.findUniqueOrThrow({
        where: {
          id: dto.userId,
        },
      });
      if (!user.email.toLowerCase()) {
        throw this.errorService.handleException(new Error('user email not found'));
      }

      const account = await this.stripeService.createAccount(user.email.toLowerCase());

      user = await this.prisma.user.update({
        where: {
          id: dto.userId,
        },
        data: {
          stripe_account: account as any,
        },
      });

      return new IResponseData(`Hosting enabled successfully`, user).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }

  async createAccountLink(dto: GetAccountLink) {
    try {
      let user = await this.prisma.user.findUniqueOrThrow({
        where: {
          id: dto.userId,
        },
      });
      if (!user.stripe_account) {
        throw this.errorService.handleException(new Error('User payout account not found'));
      }
      const accountLink = await this.stripeService.createAccountLink(user.stripe_account['id']);
      return new IResponseData(`Account link created successfully`, accountLink).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }

  async createListing(dto: UpdateListingDto) {
    try {
      const listing = await this.prisma.listing.create({
        data: {
          host_id: dto.hostId,
          parking_id: dto.parkingId,
          title: dto.title,
          description: dto.description,
          price: dto.price,
          type: dto.type,
        },
      });
      return new IResponseData(`listing created successfully`, listing).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }

  async updateListing(listingId: string, updateData: UpdateListingDto) {
    try {
      const listing = await this.prisma.listing.update({
        where: {
          id: listingId,
        },
        data: {
          title: updateData.title,
          description: updateData.description,
          price: updateData.price,
          type: updateData.type,
          status: updateData.status,
          confirmation_type: updateData.confirmationType,
        },
      });
      return new IResponseData(`listing updated successfully`, listing).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }

  async getListing(listingId: string) {
    try {
      const listing = await this.prisma.listing.findUnique({
        where: {
          id: listingId,
        },
      });
      return new IResponseData(`listing retrieved successfully`, listing).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }

  async deleteListing(listingId: string) {
    try {
      const listing = await this.prisma.listing.delete({
        where: {
          id: listingId,
        },
      });
      return new IResponseData(`listing deleted successfully`, listing).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }

  async getListings(hostId: string) {
    try {
      const listings = await this.prisma.listing.findMany({
        where: {
          host_id: hostId,
        },
      });
      return new IResponseData(`listings retrieved successfully`, listings).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }

  async getReservations(hostId: string) {
    try {
      const currentTime = new Date().getTime();
      const allReservations = await this.prisma.reservation.findMany({
        where: {
          host_id: hostId,
        },
        include: {
          listing: {
            select: {
              id: true,
              title: true,
              description: true,
            }
          }
        }
      });
      const currentReservations = [];
      const upcomingReservations = [];
      const pastReservations= [];

      allReservations.forEach((reservation) => {
        const startTime = reservation.start_date.getTime();
        const endTime = reservation.end_date.getTime();
  
        if (startTime <= currentTime && endTime >= currentTime) {
          currentReservations.push(reservation);
        } else if (startTime > currentTime) {
          upcomingReservations.push(reservation);
        } else if (endTime < currentTime) {
          pastReservations.push(reservation);
        }
      });
      return new IResponseData(`reservations retrieved successfully`, {
        currentReservations,
        upcomingReservations,
        pastReservations,
      }).json;
    } catch (error) {
      throw this.errorService.handleException(error);
    }
  }
}
