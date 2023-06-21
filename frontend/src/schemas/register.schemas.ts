import { z } from "zod";

export const registerSchema = z.object({
    isVendor: z.boolean().default(false),
    name: z.string().max(120),
    email: z.string().email().max(255),
    password: z.string().max(50),
    confirmPassword: z.string(),
    cpf: z.number().max(14),
    phone: z.number().max(15),
    birthDate: z.date(),
    description: z.string().max(500),
    cep: z.number().max(9),
    state: z.string().max(30),
    city: z.string().max(50),
    street: z.string().max(100),
    number: z.number(),
    complement: z.string().max(30),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

export type RegisterInterface = z.infer<typeof registerSchema>