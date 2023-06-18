import { z } from "zod";

export const registerSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string(),
    cpf: z.number(),
    phone: z.number(),
    userType: z.string(),
    birthDate: z.date(),
    description: z.string(),
    cep: z.number(),
    state: z.string(),
    city: z.string(),
    street: z.string(),
    number: z.number(),
    complement: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

export type validationRegisterSchema = z.infer<typeof registerSchema/>