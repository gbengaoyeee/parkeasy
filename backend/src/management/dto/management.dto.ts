import { Transform, Type } from "class-transformer"
import { IsAlpha, IsAlphanumeric, IsArray, IsAscii, IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString, IsUUID, ValidateIf, ValidateNested, isEmail } from "class-validator"

export class PreSignUpDto {
    @IsAscii()
    @IsNotEmpty()
    companyName: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsPhoneNumber()
    @IsNotEmpty()
    contactNumber: string
}

export class StartSingleSignOnDto {
    @IsEmail()
    email: string
}
export class RegisterManagementDto {
    @IsEmail()
    email: string
}


enum StaffRole {
    BuildingManager = 'building_manager',
    FinanceAccountant = 'finance_accountant',
    BuildingConcierge = 'building_concierge'
}
class StaffDto {
    @IsOptional()
    staffName: string
    
    @ValidateIf(o => o.staffEmail !== '')
    @IsEmail()
    @IsOptional()
    staffEmail: string
    
    @ValidateIf(o => o.staffRole !== '')
    @IsEnum(StaffRole)
    @IsOptional()
    staffRole: StaffRole
}

export class OnboardManagementDto {
    @IsEmail()
    email:string
    
    @IsPhoneNumber()
    phoneNumber: string;
    
    @IsString()
    address: string;
    
    @IsArray() // Add this if you're validating the array itself
    @ValidateNested({ each: true })
    @IsOptional()
    @Type(() => StaffDto) // This ensures proper validation and transformation
    staffMembers: StaffDto[];
}
enum BuildingType {
    Commercial = 'commercial',
    Residential = 'residential',
    Governmental = 'governmental'
}
enum BuildingFacility {
    EV_Charging = 'ev_charging',
    BulkParkingOwners = 'bulk_parking_owners',
    SmartMeters = 'smart_meters',
    ANPR = 'anpr',
    InternetWifi = 'internet_wifi',
    AccessCardSystem = 'access_card_system',
    VisitorParking = 'visitor_parking',
    BMS = 'bms',
    HandicappedParking = 'handicapped_parking',
    PaidParkingSystem = 'paid_parking_system',
}
export class OnboardBuildingDto {
    @IsEmail()
    email:string
    
    @IsString()
    buildingName: string;
    
    @IsEnum(BuildingType)
    buildingType: BuildingType;
    
    @IsString()
    address: string;

    @IsString()
    city: string;
    
    @IsString()
    state: string;

    @IsString()
    zipcode: string;

    @IsString()
    country: string;

    @IsNumber()
    noOfUnits: number
    @IsNumber()
    noOfParkingFloors: number
    @IsNumber()
    noOfParkingSpots: number
    @IsNumber()
    noOfDeveloperParkingSpots: number

    @IsArray()
    @IsEnum(BuildingFacility, { each: true })
    @IsOptional()
    facilities: BuildingFacility[]; // Renamed to `facilities`
}
export class GetManagementQueryDto {
    @IsBoolean()
    @IsOptional()
    @Transform(({ obj, key }) => obj[key] === 'true')
    includeBuildings: boolean
    
    @IsBoolean()
    @IsOptional()
    @Transform(({ obj, key }) => obj[key] === 'true')
    includeStaffs: boolean
}
