/*
  Warnings:

  - You are about to drop the column `building_id` on the `Reservation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_building_id_fkey";

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "building_id",
ADD COLUMN     "buildingId" TEXT;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "Building"("id") ON DELETE SET NULL ON UPDATE CASCADE;
