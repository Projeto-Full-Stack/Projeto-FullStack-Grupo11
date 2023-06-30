import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UnauthorizedException } from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiOkResponse, ApiResponse, ApiCreatedResponse } from '@nestjs/swagger/dist/decorators';

@ApiTags('Images')
@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post(':annId')
  @ApiCreatedResponse({ description: "Cria uma ou mais imagens para um anúncio" })
  @ApiResponse({ status: 404, description: "Recebe um erro 404 caso não encontre o anúncio", schema: {
    example: {
        "statusCode": 404,
        "message": "Announcement not found!",
        "error": "Not Found"
    }
}})
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
  @ApiOkResponse({ description: "Edita a imagem com uma nova URL" })
  @ApiResponse({ status: 404, description: "Recebe um erro 404 caso não encontre o anúncio", schema: {
    example: {
        "statusCode": 404,
        "message": "Image not found!",
        "error": "Not Found"
    }
}})
  update(@Param('imageId') imageId: string, @Body() data: UpdateImageDto){
    return this.imagesService.update(imageId, data)
  }

  @Delete()
  @ApiResponse({ status: 204, description: "Deleta um ou mais imagens de um anúncio" })
  remove(@Query() query: {}) {
    const ids: string[] = Object.values(query)
    return this.imagesService.remove(ids);
  }
}
