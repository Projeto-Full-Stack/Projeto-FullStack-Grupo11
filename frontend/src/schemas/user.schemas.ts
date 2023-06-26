import { z } from "zod";


export const userSchema = z.object({
    id: z.string(),
    name: z
        .string()
        .max(120, { message: "Tamanho máximo 120 caracteres" })
        .nonempty("Insira um nome"),
    email: z
        .string()
        .email({ message: "Insira um email válido" })
        .max(255, { message: "O email pode ter no máximo 255 caracteres" }),
    cpf: z
        .string()
        .max(14, { message: "Tamanho máximo atingido" })
        .nonempty("Insira um cpf"),
    phone: z
        .string()
        .max(15, { message: "Tamanho máximo atingido" })
        .nonempty("Insira um número de telefone"),
    birthDate: z.string().nonempty("Insira a data de nascimento"),
    description: z
        .string()
        .max(500, { message: "Tamanho máximo atingido." })
        .nonempty("Insira uma descrição"),
    isVendor: z.union([z.string(), z.boolean()])
})

export type UserInterface = z.infer<typeof userSchema>

export const omitIdUserSchema = userSchema.omit({
    id: true,
    isVendor: true,
})

export type OmitedUserInterface = z.infer<typeof omitIdUserSchema>