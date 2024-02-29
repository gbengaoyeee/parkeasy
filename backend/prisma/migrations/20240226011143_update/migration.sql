-- DropForeignKey
ALTER TABLE "CommunityMembers" DROP CONSTRAINT "CommunityMembers_email_phone_fkey";

-- AddForeignKey
ALTER TABLE "CommunityMembers" ADD CONSTRAINT "CommunityMembers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
