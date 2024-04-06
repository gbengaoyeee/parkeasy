import { Type } from 'class-transformer';
import { Listing } from '../../../../shared/prisma-client';
import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class GetCheckoutDetailsDto {
  @IsString()
  listingId: string;

  @Type(() => Number)
  @IsNumber(
    {},
    {
      message: 'startDate must be in milliseconds',
    },
  )
  startDate: number;

  @Type(() => Number)
  @IsNumber({}, {message: 'endDate must be in milliseconds',})
  endDate: number;
}

export class PaymentIntentDto {
  @IsString()
  listingId: string;

  @Type(() => Number)
  @IsNumber()
  amount: number;

  @IsString()
  customerId: string;
}

export class SubscribeToParkingDto {
  @IsString()
  userId: string;

  @IsString()
  parkingSpotId: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  carModel: string;

  @IsString()
  officeNumber: string;
  
  @IsString()
  licencePlate: string;
  @IsString()
  driverLicenceNumber: string;
  @IsString()
  emiratesId: string;
}