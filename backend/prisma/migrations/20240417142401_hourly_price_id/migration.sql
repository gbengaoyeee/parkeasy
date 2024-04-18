-- CreateEnum
CREATE TYPE "Payment_Type" AS ENUM ('subscription', 'payment');

-- AlterTable
ALTER TABLE "Subscription" ADD COLUMN     "payment_type" "Payment_Type" DEFAULT 'subscription';
