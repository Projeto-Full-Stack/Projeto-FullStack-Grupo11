import { CreateAnnouncementDto } from '../announcements/dto/create-announcement.dto';
import { Announcement } from '../announcements/entities/announcement.entity';

export abstract class AnnouncementRepository {
  abstract create(data: CreateAnnouncementDto): Promise<Announcement>;
}
