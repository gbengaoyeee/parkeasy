/*
  Warnings:

  - You are about to drop the column `stripe_payment_id` on the `Reservation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "stripe_payment_id",
ADD COLUMN     "stripe_payment_intent_id" TEXT;
