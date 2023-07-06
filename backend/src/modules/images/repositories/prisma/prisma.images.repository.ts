import { Injectable } from '@nestjs/common';
import { ImagesRepository } from '../images.repository';
import { CreateImageDto } from '../../dto/create-image.dto';
import { Image } from '../../entities/image.entity';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';
import { UpdateImageDto } from '../../dto/update-image.dto';

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
      include: {
        announcement: {
          include: {
            user: {
              select: {
                name: true
              }
            }
          }
        }
      }
    });

    return plainToInstance(Image, images);
  }

  async findOne(imageId: string): Promise<Image> {
    const image = await this.prisma.image.findUnique({
      where: { id: imageId } 
    })

    return plainToInstance(Image, image)
  }

  async update(imageId: string, data: UpdateImageDto): Promise<Image> {
    const image = await this.prisma.image.update({
      where: {
        id: imageId
      },
      data: { ...data }
    })

    return plainToInstance(Image, image)
  }

  async deleteMany(ids: string[]): Promise<void> {
    await this.prisma.image.deleteMany({
      where: { 
        id: 
          {
            in: ids
          }
      },
    });
  }
}
