import { IsDate, IsEnum, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';
import { Reservation_Status } from '../../../../shared/prisma-client';
import { Type } from 'class-transformer';

export class CreateReservationDto {
  @IsString()
  @MinLength(4)
  visitorId: string;
  @IsString()
  @MinLength(4)
  listingId: string;
  @IsString()
  @MinLength(4)
  hostId: string;
  @IsNumber()
  totalPrice: number;
  @IsNumber()
  totalFees: number;

  @IsString()
  @IsOptional()
  paymentIntentId?: string;
  @IsString()
  @MinLength(4)
  parkingSpotId: string;

  @Type(() => Number)
  @IsNumber({}, {message: 'startDate must be in milliseconds',})
  startDate: number;

  @Type(() => Number)
  @IsNumber({}, {message: 'endDate must be in milliseconds',})
  endDate: number;

  @IsEnum(Reservation_Status)
  @IsOptional()
  status: Reservation_Status;
}

export class UpdateReservationDto {
  @IsEnum(Reservation_Status)
  @IsOptional()
  status: Reservation_Status;
}

export class GetListingsDto {
  @IsOptional()
  @Type(() => Number)
  lat: number;
  @IsOptional()
  @Type(() => Number)
  lng: number;
  @IsOptional()
  @MinLength(4)
  visitorId: string;
  @IsOptional()
  @Type(() => Number)
  @IsNumber(
    {},
    {
      message: 'startDate must be in milliseconds',
    },
  )
  startDate: number;
  @IsOptional()
  @Type(() => Number)
  @IsNumber(
    {},
    {
      message: 'endDate must be in milliseconds',
    },
  )
  endDate: number;
}
