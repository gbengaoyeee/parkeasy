import { Injectable } from '@nestjs/common';
import { ErrorService } from 'src/exceptions/error.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateListingDto } from './dto';
import { IResponseData } from 'src/response';

@Injectable()
export class HostService {
    constructor(
        private prisma: PrismaService, 
        private errorService: ErrorService
    ) {}

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
                }
            })
            return new IResponseData(
                `listing created successfully`,
                listing
            ).json
        } catch (error) {
            throw this.errorService.handleException(error)
        }
    }

    async updateListing(listingId: string, updateData: UpdateListingDto) {
        try {
            const listing = await this.prisma.listing.update({
                where: {
                    id: listingId
                },
                data: {
                    title: updateData.title,
                    description: updateData.description,
                    price: updateData.price,
                    type: updateData.type,
                    status: updateData.status,
                    confirmation_type: updateData.confirmationType
                }
            })
            return new IResponseData(
                `listing updated successfully`,
                listing
            ).json
        } catch (error) {
            throw this.errorService.handleException(error)
        }
    }

    async getListing(listingId: string,) {
        try {
            const listing = await this.prisma.listing.findUnique({
                where: {
                    id: listingId
                }
            })
            return new IResponseData(
                `listing retrieved successfully`,
                listing
            ).json
        } catch (error) {
            throw this.errorService.handleException(error)
        }
    }

    async deleteListing(listingId: string) {
        try {
            const listing = await this.prisma.listing.delete({
                where: {
                    id: listingId
                }
            })
            return new IResponseData(
                `listing deleted successfully`,
                listing
            ).json
        } catch (error) {
            throw this.errorService.handleException(error)
        }
    }

    async getListings(hostId: string,) {
        try {
            const listings = await this.prisma.listing.findMany({
                where: {
                    host_id: hostId
                }
            })
            return new IResponseData(
                `listings retrieved successfully`,
                listings
            ).json
        } catch (error) {
            throw this.errorService.handleException(error)
        }
    }

    async getReservations(hostId: string,) {
        try {
            const reservations = await this.prisma.reservation.findMany({
                where: {
                    host_id: hostId
                }
            })
            return new IResponseData(
                `reservations retrieved successfully`,
                reservations
            ).json
        } catch (error) {
            throw this.errorService.handleException(error)
        }
    }
}
