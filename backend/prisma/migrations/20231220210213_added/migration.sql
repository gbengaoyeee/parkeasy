/*
  Warnings:

  - Added the required column `image_url` to the `QRCode` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "QRCode" DROP CONSTRAINT "QRCode_owner_id_fkey";

-- AlterTable
ALTER TABLE "QRCode" ADD COLUMN     "image_url" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "QRCode" ADD CONSTRAINT "QRCode_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "CommunityMembers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
