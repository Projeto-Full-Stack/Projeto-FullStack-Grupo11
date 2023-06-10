-- CreateTable
CREATE TABLE "announcements" (
    "id" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "mileage" INTEGER NOT NULL,
    "avaliable" BOOLEAN NOT NULL,

    CONSTRAINT "announcements_pkey" PRIMARY KEY ("id")
);
