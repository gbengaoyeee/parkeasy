import { IsArray, IsEmail, IsEnum, IsOptional, IsString } from "class-validator"
import { User_Role } from "../../../../shared/prisma-client"


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

    @IsArray()
    @IsEnum(User_Role, { each: true })
    userRoles: User_Role[]
}