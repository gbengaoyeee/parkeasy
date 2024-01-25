-- CreateEnum
CREATE TYPE "Listing_Type" AS ENUM ('hourly', 'weekly', 'monthly');

-- CreateEnum
CREATE TYPE "Confirmation_Type" AS ENUM ('manual', 'automatic');

-- CreateTable
CREATE TABLE "Listing" (
    "id" TEXT NOT NULL,
    "host_id" TEXT NOT NULL,
    "parking_id" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "type" "Listing_Type",
    "price" INTEGER,
    "status" "Active_State" NOT NULL DEFAULT 'active',
    "booking_status" "Active_State" NOT NULL DEFAULT 'inactive',
    "confirmation_type" "Confirmation_Type" NOT NULL DEFAULT 'automatic',
    "no_of_bookings" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL,
    "listing_id" TEXT NOT NULL,
    "host_id" TEXT NOT NULL,
    "visitor_id" TEXT NOT NULL,
    "building_id" TEXT NOT NULL,
    "parking_id" TEXT NOT NULL,
    "price" INTEGER,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Listing_id_key" ON "Listing"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_id_key" ON "Reservation"("id");

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_host_id_fkey" FOREIGN KEY ("host_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_parking_id_fkey" FOREIGN KEY ("parking_id") REFERENCES "ParkingSpot"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_listing_id_fkey" FOREIGN KEY ("listing_id") REFERENCES "Listing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_host_id_fkey" FOREIGN KEY ("host_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_visitor_id_fkey" FOREIGN KEY ("visitor_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_building_id_fkey" FOREIGN KEY ("building_id") REFERENCES "Building"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_parking_id_fkey" FOREIGN KEY ("parking_id") REFERENCES "ParkingSpot"("id") ON DELETE CASCADE ON UPDATE CASCADE;
