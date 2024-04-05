/*
  Warnings:

  - You are about to drop the column `stripe_price_id` on the `ParkingSpot` table. All the data in the column will be lost.
  - You are about to drop the column `stripe_product_id` on the `ParkingSpot` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ParkingSpot" DROP COLUMN "stripe_price_id",
DROP COLUMN "stripe_product_id",
ADD COLUMN     "stripe_product" JSONB;
