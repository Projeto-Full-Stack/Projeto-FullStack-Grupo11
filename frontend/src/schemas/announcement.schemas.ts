import { z } from "zod"

export const annoucementSchema = z.object({
    brand: z.string(),
    model: z.string(),
    fuel: z.string(),
    fipe: z.union([z.string(), z.number()]),
    year: z.string(),
    color: z.string(),
    price: z.union([z.string(), z.number()]),
    mileage: z.union([z.string(), z.number()]),
    description: z.string(),
    coverImage: z.string().url(),
}).refine((data) => {
    data.fipe = Number(data.fipe)
    data.price = Number(data.price)
    data.mileage = Number(data.mileage)
    return data
})

export type AnnoucementInterface = z.infer<typeof annoucementSchema>