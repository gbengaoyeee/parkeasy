/*
  Warnings:

  - You are about to drop the column `stripe_account_id` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "stripe_account_id",
ADD COLUMN     "stripe_account" JSONB;
