import { z } from "zod"

export const annoucementSchema = z.object({
    brand: z.string(),
    model: z.string(),
    fuel: z.string(),
    year: z.string(),
    mileage: z.union([z.string(), z.number()]),
    color: z.string(),
    fipe: z.union([z.string(), z.number()]),
    price: z.union([z.string(), z.number()]),
    description: z.string(),
    coverImage: z.string().url(),
    avaliable: z.boolean().default(true)
}).refine((data) => {
    data.fipe = Number(data.fipe)
    data.price = Number(data.price)
    data.mileage = Number(data.mileage)
    return data
})

export type AnnoucementInterface = z.infer<typeof annoucementSchema>