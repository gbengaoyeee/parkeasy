-- DropForeignKey
ALTER TABLE "ParkingSpot" DROP CONSTRAINT "ParkingSpot_owner_id_fkey";

-- AddForeignKey
ALTER TABLE "ParkingSpot" ADD CONSTRAINT "ParkingSpot_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "CommunityMembers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
