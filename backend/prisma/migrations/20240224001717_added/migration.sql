-- CreateTable
CREATE TABLE "ApartmentUnit" (
    "id" TEXT NOT NULL,
    "unit_number" TEXT NOT NULL,
    "no_of_beds" INTEGER NOT NULL,
    "no_of_baths" INTEGER NOT NULL,

    CONSTRAINT "ApartmentUnit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ApartmentUnit_id_key" ON "ApartmentUnit"("id");
