import { 
    Building as PrismaBuilding, 
    ManagementStaff, 
    Management as PrismaManagement, 
    User as PrismaUser, 
    CommunityMembers as PrismaCommunityMembers, 
    QRCode,
    ParkingSpot as PrismaParkingSpot,
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

export interface CommunityMembers extends PrismaCommunityMembers {
    qr_code: QRCode
    building: Building
    parking_spots: ParkingSpot[]
}

export interface Building extends PrismaBuilding {
}
export interface ParkingSpot extends PrismaParkingSpot {
    qr_code: QRCode
}