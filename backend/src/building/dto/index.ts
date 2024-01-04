
import { Active_State } from "@prisma/client";
import { Transform, Type } from "class-transformer";
import { IsBoolean, IsEmail, IsEnum, IsNumber, IsOptional, IsPhoneNumber, IsString, Max, Min } from "class-validator";
import { User_Role } from "../../../../shared/prisma-client";


export class GetBuildingsDto {
    @IsString()
    managementId: string
}
export class GetBuildingQueryDto {
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

export class GetPaginatedQueryDto {
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
