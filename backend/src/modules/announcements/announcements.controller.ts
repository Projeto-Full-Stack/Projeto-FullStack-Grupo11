import {
  UseGuards,
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UnauthorizedException,
  Query,
} from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { JwtAuthGuard } from '../auth/jawt.auth.guard';
import { IAnnouncementGetAll } from './announcement.schema';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiResponse,
  ApiOkResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';

@ApiTags('Announcements')
@Controller('announcements')
export class AnnouncementsController {
  constructor(private readonly announcementsService: AnnouncementsService) {}

  @Post()
  @ApiBearerAuth()
  @ApiCreatedResponse({
    description: 'Created Succesfully',
    schema: {
      example: {
        id: '757ad206-b887-4fac-9f23-a7319001f764',
        brand: 'brand',
        model: 'model',
        year: 'year',
        fuel: 'fuel',
        fipe: 33121,
        color: 'color',
        price: 33121,
        description: 'description',
        coverImage: 'coverImage',
        mileage: 1000,
        avaliable: true,
        user_id: '84ca3ccf-1639-4cc4-9aa1-1c583537205d',
        image: [],
      },
    },
  })
  @UseGuards(JwtAuthGuard)
  create(
    @Body() createAnnouncementDto: CreateAnnouncementDto,
    @Request() req: any,
  ) {
    if (!req.user.vendor) throw new UnauthorizedException();

    return this.announcementsService.create(createAnnouncementDto, req.user.id);
  }

  @Get()
  @ApiOkResponse({
    description: 'Todos os anúncios com as relações',
    schema: {
      example: [
        {
          id: '757ad206-b887-4fac-9f23-a7319001f764',
          brand: 'brand',
          model: 'model',
          year: 'year',
          fuel: 'fuel',
          fipe: 33121,
          color: 'color',
          price: 33121,
          description: 'description',
          coverImage: 'coverImage',
          mileage: 1000,
          avaliable: true,
          user_id: '84ca3ccf-1639-4cc4-9aa1-1c583537205d',
          image: [],
          user: {
            id: 'bda6fcf8-f593-49b1-8ab0-26fe300b885f',
            name: 'teste2',
            description: '1234567',
          },
          comments: [
            {
              id: '45fcc392-1b18-4a40-bfeb-9357e5c1ec04',
              comment: 'teste',
              createdAt: '2023-06-30T12:33:06.699Z',
              authorId: '84ca3ccf-1639-4cc4-9aa1-1c583537205d',
              announcementId: '757ad206-b887-4fac-9f23-a7319001f764',
              author: {
                id: '84ca3ccf-1639-4cc4-9aa1-1c583537205d',
                name: 'teste',
                description: '1234567',
              },
            },
          ],
        },
        {
          id: '757ad206-b887-4fac-9f23-a7319001f764',
          brand: 'brand',
          model: 'model',
          year: 'year',
          fuel: 'fuel',
          fipe: 33121,
          color: 'color',
          price: 33121,
          description: 'description',
          coverImage: 'coverImage',
          mileage: 1000,
          avaliable: true,
          user_id: '84ca3ccf-1639-4cc4-9aa1-1c583537205d',
          image: [],
          user: {
            id: 'bda6fcf8-f593-49b1-8ab0-26fe300b885f',
            name: 'teste2',
            description: '1234567',
          },
          comments: [
            {
              id: '45fcc392-1b18-4a40-bfeb-9357e5c1ec04',
              comment: 'teste',
              createdAt: '2023-06-30T12:33:06.699Z',
              authorId: '84ca3ccf-1639-4cc4-9aa1-1c583537205d',
              announcementId: '757ad206-b887-4fac-9f23-a7319001f764',
              author: {
                id: '84ca3ccf-1639-4cc4-9aa1-1c583537205d',
                name: 'teste',
                description: '1234567',
              },
            },
          ],
        },
      ],
    },
  })
  findAll(@Query() query: IAnnouncementGetAll) {
    return this.announcementsService.findAll(query);
  }

  @Get('/users/:user_id')
  @ApiOkResponse({
    description:
      "Recebe pelo parametro o ID do usuário e procura por anúncios onde o user_id seja igual ao do parametro, o retorno é igual ao GET '/announcements'",
  })
  findAllByUser(
    @Param('user_id') user_id: string,
    @Query('page') page: string,
    @Query('perPage') perPage: string,
  ) {
    return this.announcementsService.findAllByUser(user_id, page, perPage);
  }

  @Get(':id')
  @ApiOkResponse({
    description:
      "Recebe pelo parametro o ID do anúncio, o retoro é igual ao GET '/announcements', porém apenas um objeto",
  })
  @ApiResponse({
    status: 404,
    description: 'Erro caso o anúncio não seja encontrado',
    schema: {
      example: {
        statusCode: 404,
        message: 'Announcement not found!',
        error: 'Not Found',
      },
    },
  })
  findOne(@Param('id') id: string) {
    return this.announcementsService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Recebe o anúncio atualizado',
    schema: {
      example: {
        id: '757ad206-b887-4fac-9f23-a7319001f764',
        brand: 'brand',
        model: 'model',
        year: 'year',
        fuel: 'fuel',
        fipe: 33121,
        color: 'color',
        price: 33121,
        description: 'description',
        coverImage: 'coverImage',
        mileage: 1000,
        avaliable: false,
        user_id: '84ca3ccf-1639-4cc4-9aa1-1c583537205d',
        image: [],
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Erro caso o anúncio não seja encontrado',
    schema: {
      example: {
        statusCode: 404,
        message: 'Announcement not found!',
        error: 'Not Found',
      },
    },
  })
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateAnnouncementDto: UpdateAnnouncementDto,
    @Request() req: any,
  ) {
    const findAnnouncement = await this.announcementsService.findOne(id);
    if (findAnnouncement.user_id !== req.user.id)
      throw new UnauthorizedException();

    return this.announcementsService.update(id, updateAnnouncementDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiResponse({
    status: 204,
    description: 'Recebe pelo parametro o ID do anúnico, não possui retorno',
  })
  @ApiResponse({
    status: 404,
    description: 'Erro caso o anúncio não seja encontrado',
    schema: {
      example: {
        statusCode: 404,
        message: 'Announcement not found!',
        error: 'Not Found',
      },
    },
  })
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string, @Request() req: any) {
    const findAnnouncement = await this.announcementsService.findOne(id);
    if (findAnnouncement.user_id !== req.user.id)
      throw new UnauthorizedException();

    return this.announcementsService.remove(id);
  }
}
