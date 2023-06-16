import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { ImagesRepository } from './repositories/images.repository';
import { Announcement } from '@prisma/client';

@Injectable()
export class ImagesService {
  constructor(private imageReopository: ImagesRepository) {}

  async create(createImageDto: CreateImageDto, annId: string) {
    const image = await this.imageReopository.create(createImageDto, annId);

    return image;
  }

  async findAll(annId: string) {
    const images = await this.imageReopository.findAll(annId);

    return images;
  }

  async remove(id: string) {
    await this.imageReopository.delete(id);
    return;
  }
}
