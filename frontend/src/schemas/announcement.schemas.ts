import { z } from "zod"
import { userSchema } from "./user.schemas"

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
    avaliable: z.boolean().default(true),
    images: z.array(z.object({imageUrl: z.string().url()}))
}).refine((data) => {
    data.fipe = Number(data.fipe)
    data.price = Number(data.price)
    data.mileage = Number(data.mileage)
    return data
})

export type AnnoucementInterface = z.infer<typeof annoucementSchema>

export const includeIdAnnouncementSchema = z.object({
    id: z.string(),
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
    avaliable: z.boolean().default(true),
    image: z.array(z.object({imageUrl: z.string()})),
    user: userSchema
}).refine((data) => {
    data.fipe = Number(data.fipe)
    data.price = Number(data.price)
    data.mileage = Number(data.mileage)
    return data
})

export type IncludeIdAnnouncementInterface = z.infer<typeof includeIdAnnouncementSchema>

export const editAnnouncementSchema = z.object({
    id: z.string(),
    mileage: z.union([z.string(), z.number()]),
    color: z.string(),
    price: z.union([z.string(), z.number()]),
    description: z.string(),
    avaliable: z.union([z.boolean(), z.string()]).default(true),
    image: z.array(z.object({id: z.string().nullish(), imageUrl: z.string()}))
}).refine((data) => {
    data.price = Number(data.price)
    data.mileage = Number(data.mileage)
    if (data.avaliable === "true") data.avaliable = true
    if (data.avaliable === "false") data.avaliable = false
    return data
})

export type EditAnnouncementInterface = z.infer<typeof editAnnouncementSchema>

export const announcementImagesSchema = z.array(
    z.object({
        id: z.string().nullish(),
        imageUrl: z.string()
    })
)

export type AnnouncementImagesInterface = z.infer<typeof announcementImagesSchema>