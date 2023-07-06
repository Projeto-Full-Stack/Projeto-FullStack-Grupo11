import { Module } from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { AnnouncementsController } from './announcements.controller';
import { AnnouncementRepository } from './repositories/announcements.repository';
import { AnnouncementPrismaRepository } from './repositories/prisma/prisma.announcements.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [AnnouncementsController],
  providers: [
    AnnouncementsService,
    PrismaService,
    {
      provide: AnnouncementRepository,
      useClass: AnnouncementPrismaRepository,
    },
  ],
})
export class AnnouncementsModule {}
