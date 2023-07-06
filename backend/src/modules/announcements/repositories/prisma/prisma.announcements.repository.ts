import { Injectable } from '@nestjs/common';
import { AnnouncementRepository } from '../announcements.repository';
import { CreateAnnouncementDto } from '../../dto/create-announcement.dto';
import { UpdateAnnouncementDto } from '../../dto/update-announcement.dto';
import { Announcement } from '../../entities/announcement.entity';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';
import { IAnnouncementGetAll } from '../../announcement.schema';

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
      include: {
        image: true,
        user: {
          select: {
            name: true
          }
        }
      }
    });

    return plainToInstance(Announcement, newAnnouncement);
  }

  async findAll(query: IAnnouncementGetAll): Promise<Announcement[]> {
    const dataWhere = {};

    const { page, limit, ...queries } = query;

    for (const key of Object.keys(queries)) {
      if (
        key != 'minPrice' &&
        key != 'maxPrice' &&
        key != 'minMileage' &&
        key != 'maxMileage'
      ) {
        dataWhere[key] = { contains: queries[key], mode: 'insensitive' };
      }
      if (key == 'minPrice') {
        dataWhere['price'] = { gte: Number(queries[key]) };
      }
      if (key == 'maxPrice') {
        dataWhere['price'] = { lte: Number(queries[key]) };
      }
      if (key == 'minMileage') {
        dataWhere['mileage'] = { gte: Number(queries[key]) };
      }
      if (key == 'maxMileage') {
        dataWhere['mileage'] = { lte: Number(queries[key]) };
      }
    }

    let auxPage = 1;
    let auxLimit = 1000000;

    page ? (auxPage = page) : (auxPage = 1);
    limit ? (auxLimit = limit) : (auxLimit = 1000000);

    const perPageNum = Number(auxLimit);

    const pageNum = perPageNum * (Number(auxPage) - 1);

    const announcements = await this.prisma.announcement.findMany({
      skip: pageNum,
      take: perPageNum,
      orderBy: {
        brand: 'asc',
      },
      where: {
        AND: { ...dataWhere },
      },
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

    return plainToInstance(Announcement, announcements);
  }

  async findAllByUser(
    user_id: string,
    page?: string,
    perPage?: string,
  ): Promise<Announcement[]> {
    let auxPage = '1';
    let auxLimit = '1000000';

    page ? (auxPage = page) : (auxPage = auxPage);
    perPage ? (auxLimit = perPage) : (auxLimit = auxLimit);

    const perPageNum = Number(auxLimit);

    const pageNum = perPageNum * (Number(auxPage) - 1);

    const announcements = await this.prisma.announcement.findMany({
      skip: pageNum,
      take: perPageNum,
      orderBy: {
        brand: 'asc',
      },
      where: { user_id },
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

    return plainToInstance(Announcement, announcements);
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
      include: { 
        image: true,
        user: {
          select: {
            name: true
          }
        }
      },
    });

    return plainToInstance(Announcement, announcement);
  }
  async delete(id: string): Promise<void> {
    await this.prisma.announcement.delete({
      where: { id },
    });
  }
}
