/*
  Warnings:

  - You are about to drop the column `subscription_status` on the `Subscription` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "subscription_status";

-- DropEnum
DROP TYPE "SubscriptionStatus";
