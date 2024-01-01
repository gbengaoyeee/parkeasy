-- CreateTable
CREATE TABLE "ManagementStaff" (
    "id" TEXT NOT NULL,
    "management_id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "date_added" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ManagementStaff_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ManagementStaff_id_key" ON "ManagementStaff"("id");

-- AddForeignKey
ALTER TABLE "ManagementStaff" ADD CONSTRAINT "ManagementStaff_management_id_fkey" FOREIGN KEY ("management_id") REFERENCES "Management"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
