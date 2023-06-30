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
import { ApiOkResponse, ApiResponse, ApiCreatedResponse, ApiBearerAuth } from '@nestjs/swagger/dist/decorators';

@ApiTags('Comments')
@Controller('comments')
export class CommentsController{
    constructor(private readonly commentsService: CommentService){}

    @Post(':announcementId')
    @ApiBearerAuth()
    @ApiCreatedResponse({ description: "Cria um comentário para um anúncio, recebe o ID do anúncio pelo parametro e o ID do usuário através do token", schema: {
        example: {
            "id": "d25aa8fe-b6cc-4b2e-ba0a-c45975fb3b88",
            "comment": "teste",
            "createdAt": "2023-06-30T12:35:56.595Z",
            "authorId": "84ca3ccf-1639-4cc4-9aa1-1c583537205d",
            "announcementId": "398eb6a4-62d6-41fe-a92c-c4f7a296d2a4"
        }
    }})
    @UseGuards(JwtAuthGuard)
    create(@Param('announcementId') announcementId: string, @Body() CreateCommentDto: CreateCommentDto, @Request() req: any){
        return this.commentsService.create(CreateCommentDto, announcementId, req.user.id)
    }

    @Get()
    findOne(commentId: string) {
      return this.commentsService.findOne(commentId);
    }

    @Get(':announcementId')
    @ApiOkResponse({ description: "Recebe todos os comentários do anúncio passado pelo ID", schema: {
        example: [
            {
                "id": "45fcc392-1b18-4a40-bfeb-9357e5c1ec04",
                "comment": "teste",
                "createdAt": "2023-06-30T12:33:06.699Z",
                "authorId": "84ca3ccf-1639-4cc4-9aa1-1c583537205d",
                "announcementId": "757ad206-b887-4fac-9f23-a7319001f764",
                "author": {
                    "id": "84ca3ccf-1639-4cc4-9aa1-1c583537205d",
                    "name": "teste",
                    "description": "1234567"
                }
            },
            {
                "id": "bbd8bfdf-967f-4b55-99cc-b8f2834cadc9",
                "comment": "teste",
                "createdAt": "2023-06-30T12:34:54.300Z",
                "authorId": "84ca3ccf-1639-4cc4-9aa1-1c583537205d",
                "announcementId": "757ad206-b887-4fac-9f23-a7319001f764",
                "author": {
                    "id": "84ca3ccf-1639-4cc4-9aa1-1c583537205d",
                    "name": "teste",
                    "description": "1234567"
                }
            }
        ]
    }})
    @ApiResponse({ status: 404, description: "Recebe um erro 404 caso não encontre o anúncio", schema: {
        example: {
            "statusCode": 404,
            "message": "Announcement not found!",
            "error": "Not Found"
        }
    }})
    findAll(@Param('announcementId') annoucementId: string){
        return this.commentsService.findAll(annoucementId)
    }

    @Patch(':commentId')
    @ApiBearerAuth()
    @ApiOkResponse({ description: "Recebe o novo comentário e atualiza", schema: {
        example: {
            "id": "d25aa8fe-b6cc-4b2e-ba0a-c45975fb3b88",
            "comment": "new comment",
            "createdAt": "2023-06-30T12:35:56.595Z",
            "authorId": "84ca3ccf-1639-4cc4-9aa1-1c583537205d",
            "announcementId": "398eb6a4-62d6-41fe-a92c-c4f7a296d2a4"
        }
        
    }})
    @ApiResponse({ status: 404, description: "Recebe um erro 404 caso não encontre o comentário", schema: {
        example: {
            "statusCode": 404,
            "message": "Comment not found!",
            "error": "Not Found"
        }
    }})
    @UseGuards(JwtAuthGuard)
    async update(@Param('commentId') commentId: string, @Body() updateCommentDto: UpdateCommentDto, @Request() req:any){
        const findComment = await this.commentsService.findOne(commentId);
        if(req.user.id !== findComment.authorId) throw new UnauthorizedException();

        return this.commentsService.update(commentId,  updateCommentDto);
    }

    @Delete(':commentId')
    @ApiBearerAuth()
    @ApiResponse({ status: 204, description: "Deleta o comentário passado pelo parametro" })
    @ApiResponse({ status: 404, description: "Recebe um erro 404 caso não encontre o comentário", schema: {
        example: {
            "statusCode": 404,
            "message": "Comment not found!",
            "error": "Not Found"
        }
    }})
    @UseGuards(JwtAuthGuard)
    async remove(@Param('commentId') commentId: string, @Request() req:any){
        const findComment = await this.commentsService.findOne(commentId);
        if(req.user.id !== findComment.authorId) throw new UnauthorizedException();

        return this.commentsService.remove(commentId)
    }
}