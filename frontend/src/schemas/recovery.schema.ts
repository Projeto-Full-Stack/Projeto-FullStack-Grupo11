import { z } from "zod";

export const recoverySchema = z.object({
  email: z
    .string()
    .min(1, { message: "Esse campo é obrigatório" })
    .max(120, { message: "O email pode ter no máximo 255 caracteres" })
    .email("Insira um email válido"),
});

export const resetPassSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "A senha deve conter no mínimo 8 caracteres" })
      .max(120, { message: "Tamanho máximo atingido" }),
    confirmPassword: z.string().nonempty("Insira a senha novamente"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type RecoveryInterface = z.infer<typeof recoverySchema>;
export type ResetPassInterface = z.infer<typeof resetPassSchema>;
