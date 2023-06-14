import { Injectable } from '@nestjs/common';
import { ImagesRepository } from '../images.repository';
import { CreateImageDto } from '../../dto/create-image.dto';
import { Image } from '../../entities/image.entity';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ImagesPrismaRepository implements ImagesRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateImageDto, announcementId: string): Promise<Image> {
    const image = new Image();
    Object.assign(image, {
      ...data,
    });

    const newImage = await this.prisma.image.create({
      data: {
        ...image,
        announcementId,
      },
    });

    return newImage;
  }

  async findAll(annId: string): Promise<Image[]> {
    const images = await this.prisma.image.findMany({
      where: { announcementId: annId },
    });

    return images;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.image.delete({
      where: { id },
    });
  }
}
