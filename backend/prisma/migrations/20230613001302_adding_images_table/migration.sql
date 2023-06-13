/*
  Warnings:

  - Added the required column `brand` to the `announcements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fipe` to the `announcements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fuel` to the `announcements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `announcements` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "announcements" ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "fipe" INTEGER NOT NULL,
ADD COLUMN     "fuel" TEXT NOT NULL,
ADD COLUMN     "model" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "images" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "announcementId" TEXT NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_announcementId_fkey" FOREIGN KEY ("announcementId") REFERENCES "announcements"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
