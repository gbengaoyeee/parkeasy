/*
  Warnings:

  - You are about to drop the column `phone` on the `PreSignUpManagement` table. All the data in the column will be lost.
  - Added the required column `contactNumber` to the `PreSignUpManagement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PreSignUpManagement" DROP COLUMN "phone",
ADD COLUMN     "contactNumber" TEXT NOT NULL;
