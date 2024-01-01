-- DropForeignKey
ALTER TABLE "Building" DROP CONSTRAINT "Building_management_id_fkey";

-- DropForeignKey
ALTER TABLE "ManagementStaff" DROP CONSTRAINT "ManagementStaff_management_id_fkey";

-- AddForeignKey
ALTER TABLE "ManagementStaff" ADD CONSTRAINT "ManagementStaff_management_id_fkey" FOREIGN KEY ("management_id") REFERENCES "Management"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Building" ADD CONSTRAINT "Building_management_id_fkey" FOREIGN KEY ("management_id") REFERENCES "Management"("id") ON DELETE CASCADE ON UPDATE CASCADE;
