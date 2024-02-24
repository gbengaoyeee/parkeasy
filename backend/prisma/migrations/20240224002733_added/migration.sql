/*
  Warnings:

  - Added the required column `building_id` to the `ApartmentUnit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ApartmentUnit" ADD COLUMN     "building_id" TEXT NOT NULL,
ALTER COLUMN "unit_number" DROP NOT NULL,
ALTER COLUMN "no_of_baths" DROP NOT NULL,
ALTER COLUMN "no_of_bedrooms" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ApartmentUnit" ADD CONSTRAINT "ApartmentUnit_building_id_fkey" FOREIGN KEY ("building_id") REFERENCES "Building"("id") ON DELETE CASCADE ON UPDATE CASCADE;
