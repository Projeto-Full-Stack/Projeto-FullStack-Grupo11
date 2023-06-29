import { z } from "zod";

export const commentSchema = z.object({
  comment: z.string().max(300, { message: "Tamanho máximo atingido" }),
});

export type CommentInterface = z.infer<typeof commentSchema>;
