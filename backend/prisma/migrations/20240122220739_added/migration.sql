/*
  Warnings:

  - You are about to drop the column `end` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `start` on the `Reservation` table. All the data in the column will be lost.
  - Added the required column `end_date` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "end",
DROP COLUMN "start",
ADD COLUMN     "end_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "start_date" TIMESTAMP(3) NOT NULL;
