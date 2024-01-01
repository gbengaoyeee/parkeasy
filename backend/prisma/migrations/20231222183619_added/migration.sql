-- CreateEnum
CREATE TYPE "Vehicle_Type" AS ENUM ('regular', 'electric', 'hybrid');

-- AlterTable
ALTER TABLE "ParkingSpot" ADD COLUMN     "vehicle_id" TEXT;

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" TEXT NOT NULL,
    "vehicle_plate" TEXT,
    "vehicle_type" "Vehicle_Type" NOT NULL DEFAULT 'regular',

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_id_key" ON "Vehicle"("id");

-- AddForeignKey
ALTER TABLE "ParkingSpot" ADD CONSTRAINT "ParkingSpot_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
