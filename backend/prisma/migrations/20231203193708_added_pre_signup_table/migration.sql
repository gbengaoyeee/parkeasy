-- CreateTable
CREATE TABLE "PreSignUpManagement" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "PreSignUpManagement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PreSignUpManagement_id_key" ON "PreSignUpManagement"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PreSignUpManagement_email_key" ON "PreSignUpManagement"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PreSignUpManagement_phone_key" ON "PreSignUpManagement"("phone");
