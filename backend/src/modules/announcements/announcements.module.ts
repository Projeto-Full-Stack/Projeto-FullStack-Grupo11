import { Module } from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { AnnouncementsController } from './announcements.controller';
import { AnnouncementRepository } from '../repositories/announcements.repository';

@Module({
  controllers: [AnnouncementsController],
  providers: [
    AnnouncementsService,
    {
      provide: AnnouncementRepository,
      useClass: '',
    },
  ],
})
export class AnnouncementsModule {}
