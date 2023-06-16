import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';


@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post(':annId')
  create(
    @Body() createImageDto: CreateImageDto,
    @Param('annId') annId: string,
  ) {
    return this.imagesService.create(createImageDto, annId);
  }

  @Get(':annId')
  findAll(@Param('annId') annId: string) {
    return this.imagesService.findAll(annId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagesService.remove(id);
  }
}
