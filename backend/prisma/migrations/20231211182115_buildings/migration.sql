-- CreateEnum
CREATE TYPE "BuildingType" AS ENUM ('commercial', 'residential', 'governmental');

-- CreateEnum
CREATE TYPE "BuildingFacility" AS ENUM ('ev_charging', 'bulk_parking_owners', 'smart_meters', 'anpr', 'internet_wifi', 'access_card_system', 'visitor_parking', 'bms', 'handicapped_parking', 'paid_parking_system');

-- CreateTable
CREATE TABLE "Building" (
    "id" TEXT NOT NULL,
    "management_id" TEXT NOT NULL,
    "building_type" "BuildingType",
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "no_of_units" INTEGER,
    "no_of_parking_floors" INTEGER,
    "no_of_parking_spots" INTEGER,
    "no_of_developer_parking_spots" INTEGER,
    "facilities" "BuildingFacility"[],

    CONSTRAINT "Building_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Building_id_key" ON "Building"("id");

-- AddForeignKey
ALTER TABLE "Building" ADD CONSTRAINT "Building_management_id_fkey" FOREIGN KEY ("management_id") REFERENCES "Management"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
