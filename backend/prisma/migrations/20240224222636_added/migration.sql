/*
  Warnings:

  - A unique constraint covering the columns `[email,phone_number]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "CommunityMembers" DROP CONSTRAINT "CommunityMembers_user_id_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_phone_number_key" ON "Users"("email", "phone_number");

-- AddForeignKey
ALTER TABLE "CommunityMembers" ADD CONSTRAINT "CommunityMembers_email_phone_fkey" FOREIGN KEY ("email", "phone") REFERENCES "Users"("email", "phone_number") ON DELETE SET NULL ON UPDATE CASCADE;
