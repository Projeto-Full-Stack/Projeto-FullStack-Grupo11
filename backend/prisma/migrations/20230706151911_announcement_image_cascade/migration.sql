-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_announcementId_fkey";

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_announcementId_fkey" FOREIGN KEY ("announcementId") REFERENCES "announcements"("id") ON DELETE CASCADE ON UPDATE CASCADE;
