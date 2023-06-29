import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UnauthorizedException } from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';


@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post(':annId')
  create(
    @Body() createImageDto: CreateImageDto[],
    @Param('annId') annId: string,
  ) {
    return this.imagesService.create(createImageDto, annId);

  }

  @Get(':annId')
  findAll(@Param('annId') annId: string) {
    return this.imagesService.findAll(annId);
  }

  @Get('/find/:imageId')
  findOne(@Param('imageId') imageId: string){
    return this.imagesService.findOne(imageId)
  }

  @Patch(':imageId')
  update(@Param('imageId') imageId: string, data: UpdateImageDto){
    console.log(data)
    return this.imagesService.update(imageId, data)
  }

  @Delete()
  remove(@Query() query: {}) {
    const ids: string[] = Object.values(query)
    return this.imagesService.remove(ids);
  }
}
