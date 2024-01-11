import { IsArray, IsEmail, IsEnum, IsOptional, IsString } from "class-validator"
import { Mobile_Onboard_Status, User_Role } from "../../../../shared/prisma-client"


export class GetUserDto {
    @IsString()
    email: string
}

export class GetUserByPhone {
    @IsString()
    phone: string

    @IsEnum(User_Role)
    role: User_Role
}

export class CreateUserDto {
    @IsEmail()
    @IsOptional()
    email: string

    @IsString()
    @IsOptional()
    phone: string

    @IsString()
    @IsOptional()
    firstName: string

    @IsString()
    @IsOptional()
    lastName: string

    @IsEnum(Mobile_Onboard_Status)
    @IsOptional()
    mobileOnboardStatus: Mobile_Onboard_Status

    @IsArray()
    @IsOptional()
    @IsEnum(User_Role, { each: true })
    userRoles: User_Role[]
}