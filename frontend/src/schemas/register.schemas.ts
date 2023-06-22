import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().max(120, {message: "Tamanho máximo 120 caracteres"}),
    email: z.string().email({message: "Insira um email válido"}).max(255, {message: "O email pode ter no máximo 255 caracteres"}),
    password: z.string().max(50, {message: "Tamanho máximo de 50 caracteres"}),
    confirmPassword: z.string(),
    cpf: z.string().max(14),
    phone: z.string().max(15),
    birthDate: z.union([z.string(), z.date()]),
    description: z.string().max(500, {message: "Tamanho máximo atingido."}),
    isVendor: z.union([z.string(), z.boolean()]),
    cep: z.string().max(9),
    state: z.string().max(30, {message: "Tamanho máximo atingido."}),
    city: z.string().max(50, {message: "Tamanho máximo atingido."}),
    street: z.string().max(100, {message: "Tamanho máximo atingido."}),
    number: z.string(),
    complement: z.string().max(30, {message: "Tamanho máximo atingido."}),
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
}).refine((data) => {
    if (data.isVendor === "comprador") data.isVendor = false
    if (data.isVendor === "vendedor") data.isVendor = true
    return data
});

export type RegisterInterface = z.infer<typeof registerSchema>