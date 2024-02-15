/*
  Warnings:

  - You are about to drop the column `buildingId` on the `Reservation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_buildingId_fkey";

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "buildingId",
ADD COLUMN     "building_id" TEXT;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_building_id_fkey" FOREIGN KEY ("building_id") REFERENCES "Building"("id") ON DELETE CASCADE ON UPDATE CASCADE;
