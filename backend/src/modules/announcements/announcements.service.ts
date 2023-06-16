import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { AnnouncementRepository } from './repositories/announcements.repository';

@Injectable()
export class AnnouncementsService {
  constructor(private announcementsRepository: AnnouncementRepository) {}
  async create(createAnnouncementDto: CreateAnnouncementDto, userId: string) {
    const announcement = await this.announcementsRepository.create(
      createAnnouncementDto,
      userId,
    );

    return announcement;
  }

  async findAll() {
    const announcement = await this.announcementsRepository.findAll();

    return announcement;
  }

  async findOne(id: string) {
    const announcement = await this.announcementsRepository.findOne(id);

    if (!announcement) {
      throw new NotFoundException('Announcement not found!');
    }

    return announcement;
  }

  async update(id: string, updateAnnouncementDto: UpdateAnnouncementDto) {
    const found = await this.announcementsRepository.findOne(id);
    if (!found) {
      throw new NotFoundException('Announcement not found!');
    }
    const announcement = await this.announcementsRepository.update(
      id,
      updateAnnouncementDto,
    );

    return announcement;
  }

  async remove(id: string) {
    const found = await this.announcementsRepository.findOne(id);
    if (!found) {
      throw new NotFoundException('Announcement not found!');
    }
    await this.announcementsRepository.delete(id);

    return;
  }
}
