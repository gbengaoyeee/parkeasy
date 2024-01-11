-- CreateEnum
CREATE TYPE "Mobile_Onboard_Status" AS ENUM ('not_started', 'completed');

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "mobile_onboard_status" "Mobile_Onboard_Status" DEFAULT 'not_started';
