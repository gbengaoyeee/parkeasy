import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsEnum,
  IsIn,
  IsMobilePhone,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';
import {
  Active_State,
  Parking_Spot_Type,
  User_Role,
  Vehicle_Type,
} from '../../../../shared/prisma-client';

export class GetBuildingsDto {
  @IsString()
  @IsOptional()
  managementId: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  userId: string;
}
export class GetBuildingQueryDto {
  @IsString()
  buildingId: string;

  @IsBoolean()
  @IsOptional()
  @Transform(({ obj, key }) => obj[key] === 'true')
  includeMembers: boolean;
}

export class CreateCommunityMemberDto {
  @IsEnum(User_Role)
  userRole: User_Role;
  @IsString()
  name: string;
  @IsString()
  phone: string;
  @IsEmail()
  email: string;
  @IsArray()
  unitNumbers: string[];
  @IsArray()
  parkingSpots: string[];
}

export class UpdateCommunityMemberDto {
  @IsEnum(User_Role)
  @IsOptional()
  userRole: User_Role;
  @IsString()
  @IsOptional()
  name: string;
  @IsPhoneNumber()
  @IsOptional()
  phone: string;
  @IsEmail()
  @IsOptional()
  email: string;
  @IsArray()
  @IsOptional()
  parkingSpots: string[];
  @IsArray()
  @IsOptional()
  unitNumbers: string[];

  @IsEnum(Active_State)
  @IsOptional()
  status: 'active' | 'inactive';
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
  userId: string;

  @IsOptional()
  @IsString()
  phone: string;

  @IsOptional()
  @IsIn(['empty', 'occupied'], {
    message: 'state must be either empty or occupied',
  })
  state: 'empty' | 'occupied';
}

export class AddParkingSpotDto {
  @IsString()
  @IsOptional()
  spotNumber: string;

  @IsNumber()
  @IsOptional()
  spotLevel: number;

  @IsEnum(Parking_Spot_Type)
  spotType: Parking_Spot_Type;

  @IsString()
  @IsOptional()
  communityMemberId: string;

  @IsString()
  @IsOptional()
  parkingInstructions: string;

  @IsNumber()
  @IsOptional()
  price: number
}

export class UpdateParkingSpotDto extends AddParkingSpotDto {
  @IsString()
  spotId: string;
}

export class AddApartmentUnitDto {
  @IsString()
  unitNumber: string;
  @IsNumber()
  noOfRooms: number;
  @IsNumber()
  noOfBaths: number;
  // amenities: string[]
}

export class GetApartmentUnitsDto {
  @IsOptional()
  @IsIn(['empty', 'occupied'], {
    message: 'state must be either empty or occupied',
  })
  state: 'empty' | 'occupied';
}

export class GetSubscriptionsDto extends GetParkingsDto{}