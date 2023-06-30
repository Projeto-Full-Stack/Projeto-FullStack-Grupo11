import { CreateCommentDto } from "../dto/create-comment.dto";
import { UpdateCommentDto } from "../dto/update-comment.dtos";
import { Comment } from "../entities/comment.entity";

export abstract class CommentsRepository {
    abstract create(data: CreateCommentDto, announcementId: string, userId: string): Promise<Comment>;
    abstract findOne(commentId: string): Promise<Comment>
    abstract delete(commentId: string): Promise<void> | void;
    abstract update(commentId: string, data: UpdateCommentDto): Promise<Comment>;
    abstract findAll(announcementId: string): Promise<Comment[]>;  
}