-- AlterTable
ALTER TABLE "Reservation" ADD COLUMN     "stripe_payment_id" TEXT,
ALTER COLUMN "listing_id" DROP NOT NULL,
ALTER COLUMN "host_id" DROP NOT NULL,
ALTER COLUMN "visitor_id" DROP NOT NULL,
ALTER COLUMN "parking_spot_id" DROP NOT NULL,
ALTER COLUMN "end_date" DROP NOT NULL,
ALTER COLUMN "start_date" DROP NOT NULL;
