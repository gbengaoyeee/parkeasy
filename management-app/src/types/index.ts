import { 
    Building as PrismaBuilding, 
    ManagementStaff, 
    Management as PrismaManagement, 
    User as PrismaUser, 
    CommunityMembers as PrismaCommunityMembers, 
    QRCode,
    ParkingSpot as PrismaParkingSpot,
    ApartmentUnit as PrismaApartmentUnit,
    Subscription as PrismaSubscription
    
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
    apartment_units: ApartmentUnit[]
    parking_spots: ParkingSpot[]
}
export interface Building extends PrismaBuilding {
    community_members: CommunityMembers[]
    parking_spots: ParkingSpot[]
}

export interface ParkingSpot extends PrismaParkingSpot {
    qr_code: QRCode
    owner?: CommunityMembers
    current_subscription?: Subscription
}

export interface ApartmentUnit extends PrismaApartmentUnit {
    community_member?: CommunityMembers
}

export interface Subscription extends PrismaSubscription {
    parking_spot?: ParkingSpot
}