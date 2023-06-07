import { Injectable } from '@nestjs/common';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { AnnouncementRepository } from '../repositories/announcements.repository';

@Injectable()
export class AnnouncementsService {
  constructor(private announcementsRepository: AnnouncementRepository) {}
  async create(createAnnouncementDto: CreateAnnouncementDto) {
    const announcement = await this.announcementsRepository.create(
      createAnnouncementDto,
    );

    return announcement;
  }

  findAll() {
    return `This action returns all announcements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} announcement`;
  }

  update(id: number, updateAnnouncementDto: UpdateAnnouncementDto) {
    return `This action updates a #${id} announcement`;
  }

  remove(id: number) {
    return `This action removes a #${id} announcement`;
  }
}
