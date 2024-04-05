-- CreateEnum
CREATE TYPE "SubscriptionStatus" AS ENUM ('active', 'inactive');

-- AlterTable
ALTER TABLE "Subscription" ADD COLUMN     "subscription_status" "SubscriptionStatus" DEFAULT 'active';
