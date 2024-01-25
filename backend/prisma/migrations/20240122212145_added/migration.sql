-- CreateEnum
CREATE TYPE "Reservation_Status" AS ENUM ('pending', 'confirmed', 'cancelled', 'completed');

-- AlterTable
ALTER TABLE "Reservation" ADD COLUMN     "status" "Reservation_Status" NOT NULL DEFAULT 'pending',
ALTER COLUMN "building_id" DROP NOT NULL;
