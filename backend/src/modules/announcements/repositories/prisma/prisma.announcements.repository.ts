import { Injectable } from '@nestjs/common';
import { AnnouncementRepository } from '../announcements.repository';
import { CreateAnnouncementDto } from '../../dto/create-announcement.dto';
import { UpdateAnnouncementDto } from '../../dto/update-announcement.dto';
import { Announcement } from '../../entities/announcement.entity';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';
import { IAnnouncementGetAll } from '../../announcement.schema';
import { paginate } from 'nestjs-prisma-pagination';

@Injectable()
export class AnnouncementPrismaRepository implements AnnouncementRepository {
  constructor(private prisma: PrismaService) {}
  async create(
    data: CreateAnnouncementDto,
    userId: string,
  ): Promise<Announcement> {
    const announcement = new Announcement();
    Object.assign(announcement, {
      ...data,
      user_id: userId,
    });
    this.prisma.announcement.createMany;
    const newAnnouncement = await this.prisma.announcement.create({
      data: { ...announcement },
    });

    return plainToInstance(Announcement, newAnnouncement);
  }
  async findAll(query: IAnnouncementGetAll): Promise<Announcement[]> {
    const queryConfig = paginate(
      {
        page: query.page,
        limit: query.limit,
        search: query.value,
      },
      {
        search: [query.key],
        includes: ['image', 'user'],
        orderBy: { id: 'asc' },
      },
    );

    const announcements = await this.prisma.announcement.findMany(queryConfig);

    return plainToInstance(Announcement, announcements);
  }

  async findAllByUser(user_id: string): Promise<Announcement[]> {
    const announcements = await this.prisma.announcement.findMany({
      where: { user_id },
      include: { image: true },
    });

    return announcements;

    return announcements;
  }

  async findOne(id: string): Promise<Announcement> {
    const announcement = await this.prisma.announcement.findUnique({
      where: { id },
      include: {
        image: true,
        user: true,
        comments: {
          include: {
            author: { select: { id: true, name: true, description: true } },
          },
        },
      },
    });

    return plainToInstance(Announcement, announcement);
  }
  async update(id: string, data: UpdateAnnouncementDto): Promise<Announcement> {
    const announcement = await this.prisma.announcement.update({
      where: { id },
      data: { ...data },
      include: { image: true },
    });

    return plainToInstance(Announcement, announcement);
  }
  async delete(id: string): Promise<void> {
    await this.prisma.announcement.delete({
      where: { id },
    });
  }
}
