import { Injectable } from '@nestjs/common';
import { ImagesRepository } from '../images.repository';
import { CreateImageDto } from '../../dto/create-image.dto';
import { Image } from '../../entities/image.entity';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateImageDto } from '../../dto/update-image.dto';
import { plainToInstance } from 'class-transformer';

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
  async findOne(id: string): Promise<Image> {
    const image = await this.prisma.image.findUnique({
      where: { id },
    });

    return image;
  }

  async findAll(): Promise<object | Image[]> {
    const images = await this.prisma.image.findMany();

    return images;
  }

  async update(id: string, data: UpdateImageDto): Promise<Image> {
    const image = await this.prisma.image.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(Image, image);
  }
  async delete(id: string): Promise<void> {
    await this.prisma.image.delete({
      where: { id },
    });
  }
}
