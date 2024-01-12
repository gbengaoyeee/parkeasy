-- AlterTable
ALTER TABLE "Building" ADD COLUMN     "lat" INTEGER,
ADD COLUMN     "lng" INTEGER;

-- AlterTable
ALTER TABLE "Management" ADD COLUMN     "address2" TEXT,
ADD COLUMN     "lat" INTEGER,
ADD COLUMN     "lng" INTEGER;
