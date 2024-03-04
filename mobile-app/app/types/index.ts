import { 
    Building as PrismaBuilding, 
    ManagementStaff, 
    Management as PrismaManagement, 
    User as PrismaUser, 
    CommunityMembers as PrismaCommunityMembers, 
    QRCode,
    ParkingSpot as PrismaParkingSpot,
    Listing as PrismaListing,
    ApartmentUnit as PrismaApartmentUnit,
    Reservation as PrismaReservation
 } from "../../../shared/prisma-client";

export interface User extends PrismaUser {
    community_members: CommunityMembers[]
}

export enum User_Role {
    Owner = "owner",
    Tenant = "tenant",
    BuildingSecurity = "building_security",
    BuildingManager = "building_manager",
    Admin = "admin",
    Visitor = "visitor",
}

export enum Parking_Spot_Type {
    Regular = "regular",
    Electric = "electric",
}
export enum Listing_Type {
    Monthly = "monthly",
    // Weekly = "weekly",
    // Hourly = "hourly",
}

export interface CommunityMembers extends PrismaCommunityMembers {
    qr_code: QRCode
    building: Building
    apartment_units?: ApartmentUnit[]
    parking_spots?: ParkingSpot[]
}

export interface Building extends PrismaBuilding {
}
export interface ParkingSpot extends PrismaParkingSpot {
    qr_code: QRCode
    building: Building
}

export interface Listing extends PrismaListing {
    lat: number
    lng: number
    parking_spot?: ParkingSpot
}

export interface ApartmentUnit extends PrismaApartmentUnit {
    community_member?: CommunityMembers
}

export interface Reservation extends PrismaReservation {
    listing?: Listing
    host?: User
}