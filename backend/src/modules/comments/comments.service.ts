import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dtos";
import { CommentsRepository } from "./repositories/comments.repository";

@Injectable()
export class CommentService{
    constructor(private commentRepository: CommentsRepository) {}

    async create(CreateCommentDto: CreateCommentDto, announcementId: string, userId: string){
        const comment = await this.commentRepository.create(
            CreateCommentDto,
            announcementId,
            userId
        );
            
        return comment
    }

    async findOne(id: string) {
        const comment = await this.commentRepository.findOne(id);
    
        if (!comment) {
          throw new NotFoundException('Comment not found!');
        }
    
        return comment;
      }

    async findAll(announcementId: string) {
        const comments = await this.commentRepository.findAll(announcementId);

        return comments;
    }

    async update(commentId: string, updateCommentDto: UpdateCommentDto) {
        const found = await this.commentRepository.findOne(commentId);
        if (!found) {
            throw new NotFoundException('Comment not found!');
        };

        const comment = await this.commentRepository.update(
            commentId,
            updateCommentDto
        );

        return comment;
    }

    async remove(commentId: string) {
        const found = await this.commentRepository.findOne(commentId);
        if (!found) {
            throw new NotFoundException('Comment not found!');
        };

        await this.commentRepository.delete(commentId);

        return;
    }
}