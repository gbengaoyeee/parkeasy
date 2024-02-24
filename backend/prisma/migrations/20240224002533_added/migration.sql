/*
  Warnings:

  - You are about to drop the column `no_of_beds` on the `ApartmentUnit` table. All the data in the column will be lost.
  - Added the required column `no_of_bedrooms` to the `ApartmentUnit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ApartmentUnit" DROP COLUMN "no_of_beds",
ADD COLUMN     "no_of_bedrooms" INTEGER NOT NULL;
