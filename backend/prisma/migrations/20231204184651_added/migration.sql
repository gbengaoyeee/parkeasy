/*
  Warnings:

  - A unique constraint covering the columns `[business_email]` on the table `Management` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Management_business_email_key" ON "Management"("business_email");
