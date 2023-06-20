import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().min(1, { message: "Esse campo é obrigatório" }),
    password: z.string().min(1, { message: "O campo de senha é obrigatório" })
})

export type LoginInterface = z.infer<typeof loginSchema>