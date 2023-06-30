import { z } from "zod";

export const commentSchema = z.object({
  comment: z.string().max(300, { message: "Tamanho máximo atingido" }),
});

export type CommentInterface = z.infer<typeof commentSchema>;

export const includeIdCommentSchema = z.object({
  id: z.string(),
  comment: z.string().max(300, { message: "Tamanho máximo atingido" }),
  authorId: z.string(),
  announcementId: z.string(),
  createdAt: z.string(),
});

export type IncludeIdCommentInterface = z.infer<typeof includeIdCommentSchema>;
