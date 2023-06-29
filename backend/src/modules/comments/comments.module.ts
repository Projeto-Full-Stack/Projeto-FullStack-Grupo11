import { Module } from '@nestjs/common';
import { CommentService } from './comments.service';
import { CommentController } from './comments.crontroller';
import { CommentsRepository } from './repositories/comments.repository';
import { CommentPrismaRepository } from './repositories/prisma/prisma.comments.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
    controllers: [CommentController],
    providers: [
        CommentService,
        PrismaService,
        {
            provide: CommentsRepository,
            useClass: CommentPrismaRepository,
        },
    ],
})
export class CommentsModule {}