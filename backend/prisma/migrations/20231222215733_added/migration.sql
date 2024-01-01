/*
  Warnings:

  - A unique constraint covering the columns `[qr_code_id,parking_level,parking_spot_number]` on the table `ParkingSpot` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ParkingSpot_qr_code_id_parking_level_parking_spot_number_key" ON "ParkingSpot"("qr_code_id", "parking_level", "parking_spot_number");
