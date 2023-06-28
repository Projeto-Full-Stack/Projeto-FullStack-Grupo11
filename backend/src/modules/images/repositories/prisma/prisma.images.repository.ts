import { Injectable } from '@nestjs/common';
import { ImagesRepository } from '../images.repository';
import { CreateImageDto } from '../../dto/create-image.dto';
import { Image } from '../../entities/image.entity';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ImagesPrismaRepository implements ImagesRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateImageDto[], announcementId: string): Promise<Image> {
    const array = []
    data.forEach((imageData) => {
      const image = new Image();
      Object.assign(image, {
        ...imageData,
        announcementId
      });
      array.push(image)
    })

    const newImage = await this.prisma.image.createMany({
      data: array
    });

    return plainToInstance(Image, newImage)
  }

  async findAll(annId: string): Promise<Image[]> {
    const images = await this.prisma.image.findMany({
      where: { announcementId: annId },
    });

    return plainToInstance(Image, images);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.image.delete({
      where: { id },
    });
  }
}
