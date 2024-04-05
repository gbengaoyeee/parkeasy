/*
  Warnings:

  - You are about to drop the column `subscriber_license_plate` on the `Subscription` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "subscriber_license_plate",
ADD COLUMN     "subscriber_licence_plate" TEXT;
