
import { Active_State } from "@prisma/client";
import { Transform, Type } from "class-transformer";
import { IsBoolean, IsEmail, IsEnum, IsNumber, IsOptional, IsPhoneNumber, IsString, Max, Min } from "class-validator";
import { Parking_Spot_Type, User_Role } from "../../../../shared/prisma-client";


export class GetBuildingsDto {
    @IsString()
    @IsOptional()
    managementId: string
    
    @IsOptional()
    @IsString()
    email: string

    @IsOptional()
    @IsString()
    phone: string
}
export class GetBuildingQueryDto {
    @IsString()
    buildingId: string

    @IsBoolean()
    @IsOptional()
    @Transform(({ obj, key }) => obj[key] === 'true')
    includeMembers: boolean
}

export class CreateCommunityMemberDto {
    @IsEnum(User_Role)
    userRole: User_Role
    @IsString()
    name: string
    @IsPhoneNumber()
    phone: string
    @IsEmail()
    email: string
    @IsString()
    unit_number: string
}

export class UpdateCommunityMemberDto {
    @IsEnum(User_Role)
    @IsOptional()
    userRole: User_Role
    @IsString()
    @IsOptional()
    name: string
    @IsPhoneNumber()
    @IsOptional()
    phone: string
    @IsEmail()
    @IsOptional()
    email: string
    @IsString()
    @IsOptional()
    unit_number: string

    @IsEnum(Active_State)
    @IsOptional()
    status: 'active' | 'inactive'
}

export class GetCommunityMembersDto {
    @IsOptional()
    @IsNumber()
    @Min(1)
    @Type(() => Number)
    page: number = 1;

    @IsOptional()
    @IsNumber()
    @Min(1)
    @Max(100)
    @Type(() => Number)
    pageSize: number = 10;
}
export class GetParkingsDto {
    @IsOptional()
    @IsNumber()
    @Min(1)
    @Type(() => Number)
    page: number = 1;

    @IsOptional()
    @IsNumber()
    @Min(1)
    @Max(100)
    @Type(() => Number)
    pageSize: number = 10;

    @IsOptional()
    @IsString()
    userId: string

    @IsOptional()
    @IsString()
    phone: string
}

export class AddParkingSpotDto {
    @IsString()
    spotNumber: string

    @IsNumber()
    spotLevel: number

    @IsEnum(Parking_Spot_Type)
    spotType: Parking_Spot_Type

    @IsString()
    userId: string

    @IsString()
    @IsOptional()
    parkingInstructions: string
}