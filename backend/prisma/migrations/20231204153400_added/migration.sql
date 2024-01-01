/*
  Warnings:

  - You are about to drop the column `companyName` on the `PreSignUpManagements` table. All the data in the column will be lost.
  - You are about to drop the column `contactNumber` on the `PreSignUpManagements` table. All the data in the column will be lost.
  - Added the required column `company_name` to the `PreSignUpManagements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact_number` to the `PreSignUpManagements` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Subscription_PlanType" AS ENUM ('basic', 'standard', 'pro');

-- CreateEnum
CREATE TYPE "Active_State" AS ENUM ('active', 'inactive');

-- AlterTable
ALTER TABLE "PreSignUpManagements" DROP COLUMN "companyName",
DROP COLUMN "contactNumber",
ADD COLUMN     "company_name" TEXT NOT NULL,
ADD COLUMN     "contact_number" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Management" (
    "id" TEXT NOT NULL,
    "company_name" TEXT,
    "business_email" TEXT,
    "phone_number" TEXT,
    "customer_service_email" TEXT,
    "emergency_email" TEXT,
    "address" JSONB,
    "subscription_plan_type" "Subscription_PlanType",
    "subscription_state" "Active_State",
    "business_state" "Active_State",
    "date_joined" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_login" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Management_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Management_id_key" ON "Management"("id");
