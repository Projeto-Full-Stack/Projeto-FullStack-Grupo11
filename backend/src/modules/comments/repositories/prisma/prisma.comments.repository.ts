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
    
    async create(data: CreateCommentDto, announcementId: string, userId:string): Promise<Comment> {
        const comment = new Comment();
        Object.assign(comment, {
            ...data,
            announcementId: announcementId,
            authorId: userId
        });

        const newComment = await this.prisma.comment.create({
            data: { ...comment },
            include: {
                author: true
            }
        });

        return plainToInstance(Comment, newComment);
    }

    async findOne(id: string): Promise<Comment> {
        const findComment = await this.prisma.comment.findUnique({ where: { id }})
        return plainToInstance(Comment, findComment)
    }

    async findAll(announcementId: string): Promise<Comment[]> {
        const comments = await this.prisma.comment.findMany({
          where: {announcementId},
          include: {
            author: {
                select: {
                    id: true,
                    name: true,
                    description: true
                }
            }
          }
        });
    
        return comments;
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