/*
  Warnings:

  - Added the required column `isVendor` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "isVendor" BOOLEAN NOT NULL,
ALTER COLUMN "cpf" SET DATA TYPE TEXT,
ALTER COLUMN "phone" SET DATA TYPE TEXT;
