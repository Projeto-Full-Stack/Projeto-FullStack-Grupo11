import { IAnnouncementGetAll } from '../announcement.schema';
import { CreateAnnouncementDto } from '../dto/create-announcement.dto';
import { UpdateAnnouncementDto } from '../dto/update-announcement.dto';
import { Announcement } from '../entities/announcement.entity';

export abstract class AnnouncementRepository {
  abstract create(
    data: CreateAnnouncementDto,
    userId: string,
  ): Promise<Announcement>;
  abstract findAll(query: IAnnouncementGetAll): Promise<Announcement[]>;
  abstract findAllByUser(
    user_id: string,
    page?: string,
    perPage?: string,
  ): Promise<Announcement[]>;
  abstract findOne(id: string): Promise<Announcement>;
  abstract update(
    id: string,
    data: UpdateAnnouncementDto,
  ): Promise<Announcement>;
  abstract delete(id: string): Promise<void>;
}
