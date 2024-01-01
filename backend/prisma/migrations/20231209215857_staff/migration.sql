/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `ManagementStaff` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ManagementStaff_email_key" ON "ManagementStaff"("email");
