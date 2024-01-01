-- CreateEnum
CREATE TYPE "QRCode_Type" AS ENUM ('static', 'dynamic');

-- AlterEnum
ALTER TYPE "User_Role" ADD VALUE 'visitor';

-- CreateTable
CREATE TABLE "CommunityMembers" (
    "id" TEXT NOT NULL,
    "building_id" TEXT NOT NULL,
    "user_role" "User_Role",
    "email" TEXT,
    "name" TEXT,
    "phone" TEXT,
    "unit_number" TEXT,

    CONSTRAINT "CommunityMembers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QRCode" (
    "id" TEXT NOT NULL,
    "qr_type" "QRCode_Type" NOT NULL,
    "url" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,

    CONSTRAINT "QRCode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CommunityMembers_id_key" ON "CommunityMembers"("id");

-- CreateIndex
CREATE UNIQUE INDEX "QRCode_id_key" ON "QRCode"("id");

-- AddForeignKey
ALTER TABLE "CommunityMembers" ADD CONSTRAINT "CommunityMembers_building_id_fkey" FOREIGN KEY ("building_id") REFERENCES "Building"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QRCode" ADD CONSTRAINT "QRCode_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "CommunityMembers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
