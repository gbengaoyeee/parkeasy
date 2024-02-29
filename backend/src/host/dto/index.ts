import { IsEnum, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';
import { Active_State, Confirmation_Type, Listing_Type } from '../../../../shared/prisma-client';
import { Type } from 'class-transformer';

export class EnableHostingDto {
  @IsString()
  userId: string;

  @IsString()
  @IsOptional()
  countryISOCode: string;
}
export class GetAccountLink {
  @IsString()
  userId: string;
}
export class UpdateListingDto {
  @IsOptional()
  hostId: string;
  @IsOptional()
  parkingId: string;
  @IsOptional()
  title: string;
  @IsOptional()
  description: string;
  @IsOptional()
  price: number;
  @IsOptional()
  @IsEnum(Listing_Type)
  type: Listing_Type;
  @IsOptional()
  @IsEnum(Active_State)
  status: Active_State;

  @IsOptional()
  @IsEnum(Confirmation_Type)
  confirmationType: Confirmation_Type;
}
