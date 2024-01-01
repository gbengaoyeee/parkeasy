/*
  Warnings:

  - A unique constraint covering the columns `[building_id,unit_number]` on the table `CommunityMembers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CommunityMembers_building_id_unit_number_key" ON "CommunityMembers"("building_id", "unit_number");
