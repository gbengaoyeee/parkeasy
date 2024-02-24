/*
  Warnings:

  - A unique constraint covering the columns `[building_id,unit_number]` on the table `ApartmentUnit` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ApartmentUnit_building_id_unit_number_key" ON "ApartmentUnit"("building_id", "unit_number");
