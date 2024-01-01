-- CreateEnum
CREATE TYPE "OnboardingState" AS ENUM ('management_onboard', 'building_onboard', 'payment', 'finish');

-- AlterTable
ALTER TABLE "Management" ADD COLUMN     "onboard_state" "OnboardingState" NOT NULL DEFAULT 'management_onboard';
