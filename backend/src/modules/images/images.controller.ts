import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Announcement } from '../announcements/entities/announcement.entity';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post(':id')
  create(@Body() createImageDto: CreateImageDto, @Param('id') id: string) {
    return this.imagesService.create(createImageDto, Announcement[id]);
  }

  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.imagesService.findAll(Announcement[id]);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imagesService.update(id, updateImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagesService.remove(id);
  }
}
