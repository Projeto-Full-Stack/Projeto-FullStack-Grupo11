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

@Controller('comments')
export class CommentsController{
    constructor(private readonly commentsService: CommentService){}

    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Body() CreateCommentDto: CreateCommentDto, @Request() req:any){
        return this.commentsService.create(CreateCommentDto, req.user.id)
    }

    @Get('/create/:commentId')
    findOne(@Param('commentId') commentId: string) {
      return this.commentsService.findOne(commentId);
    }

    @Get('/:announcementId')
    findAllByAnnouncement (@Param('announcementId') annoucementId: string){
        return this.commentsService.findAllOfAnnounce(annoucementId)
    }

    @Patch('/update:commentId')
    @UseGuards(JwtAuthGuard)
    async update(@Param('commentId') commentId: string, @Body() updateCommentDto: UpdateCommentDto, @Request() req:any){
        const findComment = await this.commentsService.findOne(commentId);
        if(!findComment) throw new UnauthorizedException();

        return this.commentsService.update(commentId, updateCommentDto);
    }

    @Delete('/delete:commentId')
    @UseGuards(JwtAuthGuard)
    async remove(@Param('commentId') commentId: string, @Request() req:any){
        const findComment = await this.commentsService.findOne(commentId);
        if(!findComment) throw new UnauthorizedException();

        return this.commentsService.remove(commentId)
    }
}