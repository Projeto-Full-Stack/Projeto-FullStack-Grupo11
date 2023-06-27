import { CreateCommentDto } from "../dto/create-comment.dto";
import { UpdateCommentDto } from "../dto/update-comment.dtos";
import { Comment } from "../entities/comment.entity";

export abstract class CommentsRepository {
    abstract create(data: CreateCommentDto): Promise<Comment>;
    abstract delete(id: string): Promise<void> | void;
    abstract update(id: string, data: UpdateCommentDto): Promise<Comment>;
}