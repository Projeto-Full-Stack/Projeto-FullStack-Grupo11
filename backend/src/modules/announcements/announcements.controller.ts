import {
  UseGuards,
  Controller,
  UseGuards,
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.announcementsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateAnnouncementDto: UpdateAnnouncementDto, @Request() req: any) {
    const findAnnouncement = this.announcementsService.findOne(id)
    if (findAnnouncement.userId !== req.user.id) throw new UnauthorizedException()

    return this.announcementsService.update(id, updateAnnouncementDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string, @Request() req: any) {
    const findAnnouncement = this.announcementsService.findOne(id)
    if (findAnnouncement.userId !== req.user.id) throw new UnauthorizedException()

    return this.announcementsService.remove(id);
  }
}
