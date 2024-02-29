/*
  Warnings:

  - A unique constraint covering the columns `[building_id,phone,email]` on the table `CommunityMembers` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "CommunityMembers_building_id_email_key";

-- DropIndex
DROP INDEX "CommunityMembers_building_id_phone_key";

-- CreateIndex
CREATE UNIQUE INDEX "CommunityMembers_building_id_phone_email_key" ON "CommunityMembers"("building_id", "phone", "email");
