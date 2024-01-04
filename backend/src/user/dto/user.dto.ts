import { IsEmail, IsEnum, IsOptional, IsString, IsUUID } from "class-validator"
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