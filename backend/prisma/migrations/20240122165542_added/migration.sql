/*
  Warnings:

  - A unique constraint covering the columns `[host_id,parking_id]` on the table `Listing` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Listing" ALTER COLUMN "no_of_bookings" SET DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "Listing_host_id_parking_id_key" ON "Listing"("host_id", "parking_id");
