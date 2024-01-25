import { IsDate, IsEnum, IsNumber, IsOptional, IsString,  } from "class-validator"
import { Reservation_Status } from "../../../../shared/prisma-client"
import { Type } from "class-transformer"

export class CreateReservationDto {
    @IsString()
    visitorId: string
    @IsString()
    listingId: string
    @IsString()
    hostId: string
    @IsOptional()
    buildingId: string
    @IsNumber()
    price: number
    @IsString()
    parkingSpotId: string

    @IsDate()
    @Type(() => Date)
    startDate: Date;
  
    @IsDate()
    @Type(() => Date)
    endDate: Date;

    @IsEnum(Reservation_Status)
    @IsOptional()
    status: Reservation_Status
}

export class GetListingsDto {
    @IsOptional()
    @Type(() => Number)
    lat: number
    @IsOptional()
    @Type(() => Number)
    lng: number
    @IsOptional()
    visitorId: string
}