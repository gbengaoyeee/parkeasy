/*
  Warnings:

  - You are about to drop the column `unit_numbers` on the `CommunityMembers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ApartmentUnit" ADD COLUMN     "community_member_id" TEXT;

-- AlterTable
ALTER TABLE "CommunityMembers" DROP COLUMN "unit_numbers",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "ApartmentUnit" ADD CONSTRAINT "ApartmentUnit_community_member_id_fkey" FOREIGN KEY ("community_member_id") REFERENCES "CommunityMembers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
