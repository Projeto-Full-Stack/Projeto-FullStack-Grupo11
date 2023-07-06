import { z } from "zod";

export const addressSchema = z
  .object({
    id: z.string(),
    cep: z.string().max(9).nonempty("Insira um cep"),
    state: z
      .string()
      .max(30, { message: "Tamanho máximo atingido." })
      .nonempty("Selecione um estado"),
    city: z
      .string()
      .max(50, { message: "Tamanho máximo atingido." })
      .nonempty("Insira uma cidade"),
    street: z
      .string()
      .max(100, { message: "Tamanho máximo atingido." })
      .nonempty("Insira uma rua"),
    number: z.union([z.string().nonempty("Insira um número"), z.number()]),
    complement: z.string().max(30, { message: "Tamanho máximo atingido." }).optional(),
});

export type AddressInterface = z.infer<typeof addressSchema>

export const idOmitedAddressSchema = addressSchema.omit({
    id: true
})

export type IdOmitedAddressInterface = z.infer<typeof idOmitedAddressSchema>