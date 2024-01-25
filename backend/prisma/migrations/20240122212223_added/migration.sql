/*
  Warnings:

  - You are about to drop the column `parking_id` on the `Reservation` table. All the data in the column will be lost.
  - Added the required column `parking_spot_id` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_parking_id_fkey";

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "parking_id",
ADD COLUMN     "parking_spot_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_parking_spot_id_fkey" FOREIGN KEY ("parking_spot_id") REFERENCES "ParkingSpot"("id") ON DELETE CASCADE ON UPDATE CASCADE;
