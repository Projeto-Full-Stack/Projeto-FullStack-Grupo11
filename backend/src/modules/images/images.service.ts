import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { ImagesRepository } from './repositories/images.repository';
import { Announcement } from '@prisma/client';

@Injectable()
export class ImagesService {
  constructor(private imageReopository: ImagesRepository) {}
  async create(createAnnouncementDto: CreateImageDto) {
    const image = await this.imageReopository.create(createImageDto);
    return image;
  }
  async findAll() {
    const images = await this.imageReopository.findAll();
    return images;
  }
  async findOne(id: string) {
    const image = await this.imageReopository.findOne(id);
    if (!image) {
      throw new NotFoundException('Image not found!');
    }
    return image;
  }
  async update(id: string, updateImageDto: UpdateImageDto) {
    const found = await this.imageReopository.findOne(id);
    if (!found) {
      throw new NotFoundException('Image not found!');
    }
    const image = await this.imageReopository.update(id, updateImageDto);
    return image;
  }
  async remove(id: string) {
    const found = await this.imageReopository.findOne(id);
    if (!found) {
      throw new NotFoundException('Image not found!');
    }
    await this.imageReopository.delete(id);
    return;
  }
}
