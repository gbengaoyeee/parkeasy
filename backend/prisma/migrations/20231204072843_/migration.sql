/*
  Warnings:

  - The primary key for the `PreSignUpManagements` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `PreSignUpManagements` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "PreSignUpManagements_id_key";

-- AlterTable
ALTER TABLE "PreSignUpManagements" DROP CONSTRAINT "PreSignUpManagements_pkey",
DROP COLUMN "id";

-- CreateTable
CREATE TABLE "SingleSignOn" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "otp_code" INTEGER NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "SingleSignOn_id_key" ON "SingleSignOn"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SingleSignOn_email_key" ON "SingleSignOn"("email");
