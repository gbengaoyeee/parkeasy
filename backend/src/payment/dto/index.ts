import { Type } from "class-transformer";
import { Listing } from "../../../../shared/prisma-client";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class GetCheckoutDetailsDto {
    @IsString()
    listingId: string

    @Type(() => Number)
    @IsNumber({}, {message: 'startDate must be in milliseconds'})
    startDate: number;
  
    @Type(() => Number)
    @IsNumber({}, {message: 'endDate must be in milliseconds'})
    endDate: number;
}

export class PaymentIntentDto {
    @IsString()
    listingId: string
    
    @Type(() => Number)
    @IsNumber()
    amount: number

    @IsString()
    customerId: string
}