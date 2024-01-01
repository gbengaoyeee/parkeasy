import { IsEmail, IsOptional, IsString, IsUUID } from "class-validator"

export class GetUserDto {
    @IsString()
    idOrEmail: string
}