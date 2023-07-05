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
    const newObj = {};
    for (const key of Object.keys(query)) {
      if (key !== 'page' && key !== 'limit') {
        newObj[key] = query[key];
      }
    }
    const getLen = await this.announcementsRepository.findAll(newObj);
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

    let actualPage = 1;

    if (count < 12) {
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
      if (count === totalAnnouncements) {
        nextPage = null;
      } else {
        nextPage = Number(query.page) + 1;
      }
    }

    if (previousPage === null) {
      actualPage = 1;
    } else {
      actualPage = previousPage + 1;
    }

    const data = {
      totalPages: totalPages,
      actualPage: actualPage,
      count: count,
      previousPage: previousPage,
      nextPage: nextPage,
      announcements: announcement,
    };

    return data;
  }

  async findAllByUser(user_id: string, page?: string, perPage?: string) {
    const getLen = await this.announcementsRepository.findAllByUser(user_id);
    const totalAnnouncements = getLen.length;
    let totalPages = 0;
    if (totalAnnouncements / 12 > 0) {
      totalPages = Math.ceil(totalAnnouncements / 12);
    } else {
      totalPages = 1;
    }
    let nextPage = 0;
    let previousPage = 0;

    const announcement = await this.announcementsRepository.findAllByUser(
      user_id,
      page,
      perPage,
    );

    const count = announcement.length;

    let actualPage = 1;

    if (count < 12) {
      nextPage = null;
      if (Number(page) == 1) {
        previousPage = null;
      } else {
        previousPage = Number(page) - 1;
      }
    } else {
      if (Number(page) == 1) {
        previousPage = null;
      } else {
        previousPage = Number(page) - 1;
      }
      if (count === totalAnnouncements) {
        nextPage = null;
      } else {
        nextPage = Number(page) + 1;
      }
    }

    if (previousPage === null) {
      actualPage = 1;
    } else {
      actualPage = previousPage + 1;
    }

    const data = {
      totalPages: totalPages,
      actualPage: actualPage,
      count: count,
      previousPage: previousPage,
      nextPage: nextPage,
      announcements: announcement,
    };

    return data;
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
