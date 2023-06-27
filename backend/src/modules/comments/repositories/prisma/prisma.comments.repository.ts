import { Injectable } from "@nestjs/common";
import { CreateCommentDto } from "../../dto/create-comment.dto";
import { UpdateCommentDto } from "../../dto/update-comment.dtos";
import { CommentsRepository } from "../comments.repository";
import { plainToInstance } from "class-transformer";
import { PrismaService } from "src/database/prisma.service";
import { Comment } from "../../entities/comment.entity";

@Injectable()
export class CommentPrismaRepository implements CommentsRepository {
    constructor(private prisma: PrismaService) {}
    
    async create(data: CreateCommentDto): Promise<Comment> {
        const comment = new Comment();
        Object.assign(comment, {
            ...data,
        });

        const newComment = await this.prisma.comment.create({
            data: { ...comment },
        });

        return plainToInstance(Comment, newComment);
    }

    async delete(id: string): Promise<void> {
        await this.prisma.comment.delete({ where: { id } });
    }

    async update(id: string, data: UpdateCommentDto): Promise<Comment> {
        const comment = await this.prisma.comment.update({
            where: {
                id,
            },
            data: { ...data },
        });

        return plainToInstance(Comment, comment)
    }
}