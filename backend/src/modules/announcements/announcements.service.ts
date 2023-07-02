import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { AnnouncementRepository } from './repositories/announcements.repository';
import { IAnnouncementGetAll } from './announcement.schema';

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

  async findAll(query: IAnnouncementGetAll) {
    const getLen = await this.announcementsRepository.findAll({});
    const totalAnnouncements = getLen.length;
    let totalPages = 0;
    if (totalAnnouncements / 12 > 0) {
      totalPages = Math.ceil(totalAnnouncements / 12);
    } else {
      totalPages = 1;
    }
    let nextPage = 0;
    let previousPage = 0;

    const announcement = await this.announcementsRepository.findAll(query);

    const count = announcement.length;

    if (announcement.length < 12) {
      nextPage = null;
      if (Number(query.page) == 1) {
        previousPage = null;
      } else {
        previousPage = Number(query.page) - 1;
      }
    } else {
      if (Number(query.page) == 1) {
        previousPage = null;
      } else {
        previousPage = Number(query.page) - 1;
      }
      nextPage = Number(query.page) + 1;
    }

    const data = {
      totalPages: totalPages,
      count: count,
      previousPage: previousPage,
      nextPage: nextPage,
      announcements: announcement,
    };

    return data;
  }

  async findAllByUser(user_id: string) {
    const announcement = await this.announcementsRepository.findAllByUser(
      user_id,
    );

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
