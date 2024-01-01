/*
  Warnings:

  - Added the required column `companyName` to the `PreSignUpManagement` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "PreSignUpManagement_phone_key";

-- AlterTable
ALTER TABLE "PreSignUpManagement" ADD COLUMN     "companyName" TEXT NOT NULL;
