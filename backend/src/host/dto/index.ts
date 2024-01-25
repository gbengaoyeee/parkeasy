import { IsEnum, IsNumber, IsOptional, Max, Min } from "class-validator"
import { Active_State, Confirmation_Type, Listing_Type } from "../../../../shared/prisma-client"
import { Type } from "class-transformer"

export class UpdateListingDto {
    @IsOptional()
    hostId: string
    @IsOptional()
    parkingId: string
    @IsOptional()
    title: string
    @IsOptional()
    description: string
    @IsOptional()
    price: number
    @IsOptional()
    @IsEnum(Listing_Type)
    type: Listing_Type
    @IsOptional()
    @IsEnum(Active_State)
    status: Active_State

    @IsOptional()
    @IsEnum(Confirmation_Type)
    confirmationType: Confirmation_Type
}
