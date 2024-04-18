-- AlterTable
ALTER TABLE "Subscription" ADD COLUMN     "host_user_id" TEXT;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_host_user_id_fkey" FOREIGN KEY ("host_user_id") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
