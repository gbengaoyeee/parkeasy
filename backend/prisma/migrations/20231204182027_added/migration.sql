-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "phone_number" TEXT,
ALTER COLUMN "first_name" DROP NOT NULL,
ALTER COLUMN "last_name" DROP NOT NULL,
ALTER COLUMN "user_roles" SET DEFAULT ARRAY[]::"User_Role"[];
