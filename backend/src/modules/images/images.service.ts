import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { ImagesRepository } from './repositories/images.repository';
import { Announcement } from '@prisma/client';
import { UpdateImageDto } from './dto/update-image.dto';

@Injectable()
export class ImagesService {
  constructor(private imageReopository: ImagesRepository) {}

  async create(createImageDto: CreateImageDto[], annId: string) {
    const image = await this.imageReopository.create(createImageDto, annId);

    return image;
  }

  async findAll(annId: string) {
    const images = await this.imageReopository.findAll(annId);

    return images;
  }

  async findOne(imageId: string){
    const image = await this.imageReopository.findOne(imageId)

    return image
  }

  async update(imageId: string, data: UpdateImageDto){
    const image = await this.imageReopository.update(imageId, data)

    return image
  }

  async remove(ids: string[]) {
    await this.imageReopository.deleteMany(ids);
    return;
  }
}
