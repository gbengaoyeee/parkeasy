import { 
    Building as PrismaBuilding, 
    ManagementStaff, 
    Management as PrismaManagement, 
    User as PrismaUser, 
    CommunityMembers as PrismaCommunityMembers, 
    QRCode,
    ParkingSpot as PrismaParkingSpot,
    ApartmentUnit as PrismaApartmentUnit

 } from "../../../shared/prisma-client";

export interface User extends PrismaUser {
    management?: Management
}

export interface Management extends PrismaManagement {
    buildings: Building[]
    staffs: ManagementStaff[]
}
export interface CommunityMembers extends PrismaCommunityMembers {
    qr_code: QRCode
}
export interface Building extends PrismaBuilding {
    community_members: CommunityMembers[]
    parking_spots: ParkingSpot[]
}

export interface ParkingSpot extends PrismaParkingSpot {
    qr_code: QRCode
}

export interface ApartmentUnit extends PrismaApartmentUnit {
    
}