import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().min(1, { message: "Esse campo é obrigatório" }).email(),
    password: z.string().min(1, { message: "Esse campo é obrigatório" })
})

export type LoginInterface = z.infer<typeof loginSchema>