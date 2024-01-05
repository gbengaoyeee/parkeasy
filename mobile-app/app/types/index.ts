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

export interface CommunityMembers extends PrismaCommunityMembers {
    qr_code: QRCode
    building: Building
    parking_spots: PrismaParkingSpot[]
}

export interface Building extends PrismaBuilding {
    parking_spots: ParkingSpot[]
}
export interface ParkingSpot extends PrismaParkingSpot {
    qr_code: QRCode
}