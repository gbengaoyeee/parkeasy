-- AlterTable
ALTER TABLE "CommunityMembers" ADD COLUMN     "user_id" TEXT;

-- AddForeignKey
ALTER TABLE "CommunityMembers" ADD CONSTRAINT "CommunityMembers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
