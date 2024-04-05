/*
  Warnings:

  - A unique constraint covering the columns `[current_subscription_id]` on the table `ParkingSpot` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ParkingSpot" ADD COLUMN     "current_subscription_id" TEXT;

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "parking_spot_id" TEXT,
    "stripe_subscription" JSONB,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ParkingSpot_current_subscription_id_key" ON "ParkingSpot"("current_subscription_id");

-- AddForeignKey
ALTER TABLE "ParkingSpot" ADD CONSTRAINT "ParkingSpot_current_subscription_id_fkey" FOREIGN KEY ("current_subscription_id") REFERENCES "Subscription"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_parking_spot_id_fkey" FOREIGN KEY ("parking_spot_id") REFERENCES "ParkingSpot"("id") ON DELETE SET NULL ON UPDATE CASCADE;
