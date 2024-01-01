/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `Management` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `Management` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Management" ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Management_user_id_key" ON "Management"("user_id");

-- AddForeignKey
ALTER TABLE "Management" ADD CONSTRAINT "Management_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
