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
import { UpdateCommentDto } from "./dto/update-comment.dtos";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { JwtAuthGuard } from "../auth/jawt.auth.guard";
import { CommentService } from "./comments.service";
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Comments')
@Controller('comments')
export class CommentsController{
    constructor(private readonly commentsService: CommentService){}

    @Post(':announcementId')
    @UseGuards(JwtAuthGuard)
    create(@Param('announcementId') announcementId: string, @Body() CreateCommentDto: CreateCommentDto, @Request() req: any){
        return this.commentsService.create(CreateCommentDto, announcementId, req.user.id)
    }

    @Get()
    findOne(commentId: string) {
      return this.commentsService.findOne(commentId);
    }

    @Get(':announcementId')
    findAll(@Param('announcementId') annoucementId: string){
        return this.commentsService.findAll(annoucementId)
    }

    @Patch(':commentId')
    @UseGuards(JwtAuthGuard)
    async update(@Param('commentId') commentId: string, @Body() updateCommentDto: UpdateCommentDto, @Request() req:any){
        const findComment = await this.commentsService.findOne(commentId);
        if(req.user.id !== findComment.authorId) throw new UnauthorizedException();

        return this.commentsService.update(commentId,  updateCommentDto);
    }

    @Delete(':commentId')
    @UseGuards(JwtAuthGuard)
    async remove(@Param('commentId') commentId: string, @Request() req:any){
        const findComment = await this.commentsService.findOne(commentId);
        if(req.user.id !== findComment.authorId) throw new UnauthorizedException();

        return this.commentsService.remove(commentId)
    }
}