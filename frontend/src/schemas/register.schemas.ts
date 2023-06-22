import { z } from "zod";

export const registerSchema = z.object({
    isVendor: z.boolean().default(false),
    name: z.string().max(120, {message: "Tamanho máximo 120 caracteres"}),
    email: z.string().email({message: "Insira um email válido"}).max(255, {message: "O email pode ter no máximo 255 caracteres"}),
    password: z.string().max(50, {message: "Tamanho máximo de 50 caracteres"}),
    confirmPassword: z.string(),
    cpf: z.number().max(14),
    phone: z.number().max(15),
    birthDate: z.date(),
    description: z.string().max(500, {message: "Tamanho máximo atingido."}),
    cep: z.number().max(9),
    state: z.string().max(30, {message: "Tamanho máximo atingido."}),
    city: z.string().max(50, {message: "Tamanho máximo atingido."}),
    street: z.string().max(100, {message: "Tamanho máximo atingido."}),
    number: z.number(),
    complement: z.string().max(30, {message: "Tamanho máximo atingido."}),
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
});

export type RegisterInterface = z.infer<typeof registerSchema>