-- AlterTable
ALTER TABLE "Subscription" ADD COLUMN     "subscriber_user_id" TEXT;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_subscriber_user_id_fkey" FOREIGN KEY ("subscriber_user_id") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
