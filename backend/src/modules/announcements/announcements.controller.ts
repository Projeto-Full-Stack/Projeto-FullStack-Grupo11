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
} from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { JwtAuthGuard } from '../auth/jawt.auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Announcements")
@Controller('announcements')
export class AnnouncementsController {
  constructor(private readonly announcementsService: AnnouncementsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createAnnouncementDto: CreateAnnouncementDto, @Request() req: any) {
    if (!req.user.vendor) throw new UnauthorizedException()

    return this.announcementsService.create(createAnnouncementDto, req.user.id);
  }

  @Get()
  findAll() {
    return this.announcementsService.findAll();
  }

  @Get('/users/:user_id')
  findAllByUser (@Param('user_id') user_id: string){
    return this.announcementsService.findAllByUser(user_id)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.announcementsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updateAnnouncementDto: UpdateAnnouncementDto, @Request() req: any) {
    const findAnnouncement = await this.announcementsService.findOne(id)
    if (findAnnouncement.user_id !== req.user.id) throw new UnauthorizedException()

    return this.announcementsService.update(id, updateAnnouncementDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string, @Request() req: any) {
    const findAnnouncement = await this.announcementsService.findOne(id)
    if (findAnnouncement.user_id !== req.user.id) throw new UnauthorizedException()

    return this.announcementsService.remove(id);
  }
}
