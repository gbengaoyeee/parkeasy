-- CreateEnum
CREATE TYPE "Verification_Status" AS ENUM ('not_started', 'completed', 'failed');

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "verification_status" "Verification_Status" DEFAULT 'not_started';
