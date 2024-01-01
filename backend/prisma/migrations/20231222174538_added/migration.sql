/*
  Warnings:

  - You are about to drop the column `owner_id` on the `QRCode` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[qr_code_id]` on the table `CommunityMembers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `qr_for` to the `QRCode` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Parking_Spot_Type" AS ENUM ('regular', 'electric');

-- CreateEnum
CREATE TYPE "QRCode_For" AS ENUM ('community_member', 'parking_spot');

-- DropForeignKey
ALTER TABLE "QRCode" DROP CONSTRAINT "QRCode_owner_id_fkey";

-- AlterTable
ALTER TABLE "CommunityMembers" ADD COLUMN     "qr_code_id" TEXT;

-- AlterTable
ALTER TABLE "QRCode" DROP COLUMN "owner_id",
ADD COLUMN     "qr_for" "QRCode_For" NOT NULL;

-- CreateTable
CREATE TABLE "ParkingSpot" (
    "id" TEXT NOT NULL,
    "building_id" TEXT NOT NULL,
    "owner_id" TEXT,
    "qr_code_id" TEXT,
    "parking_level" INTEGER,
    "parking_spot_number" TEXT,
    "parking_spot_type" "Parking_Spot_Type" NOT NULL DEFAULT 'regular',

    CONSTRAINT "ParkingSpot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ParkingSpot_id_key" ON "ParkingSpot"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ParkingSpot_qr_code_id_key" ON "ParkingSpot"("qr_code_id");

-- CreateIndex
CREATE UNIQUE INDEX "CommunityMembers_qr_code_id_key" ON "CommunityMembers"("qr_code_id");

-- AddForeignKey
ALTER TABLE "CommunityMembers" ADD CONSTRAINT "CommunityMembers_qr_code_id_fkey" FOREIGN KEY ("qr_code_id") REFERENCES "QRCode"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkingSpot" ADD CONSTRAINT "ParkingSpot_building_id_fkey" FOREIGN KEY ("building_id") REFERENCES "Building"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkingSpot" ADD CONSTRAINT "ParkingSpot_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "CommunityMembers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkingSpot" ADD CONSTRAINT "ParkingSpot_qr_code_id_fkey" FOREIGN KEY ("qr_code_id") REFERENCES "QRCode"("id") ON DELETE CASCADE ON UPDATE CASCADE;
