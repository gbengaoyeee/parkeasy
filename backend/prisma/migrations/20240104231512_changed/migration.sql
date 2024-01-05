/*
  Warnings:

  - You are about to drop the column `unit_number` on the `CommunityMembers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[building_id,phone,email]` on the table `CommunityMembers` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "CommunityMembers_building_id_unit_number_key";

-- AlterTable
ALTER TABLE "CommunityMembers" DROP COLUMN "unit_number",
ADD COLUMN     "unit_numbers" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- CreateIndex
CREATE UNIQUE INDEX "CommunityMembers_building_id_phone_email_key" ON "CommunityMembers"("building_id", "phone", "email");
