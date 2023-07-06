import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .max(120, { message: "Tamanho máximo 120 caracteres" })
      .nonempty("Insira um nome"),
    email: z
      .string()
      .email({ message: "Insira um email válido" })
      .max(255, { message: "O email pode ter no máximo 255 caracteres" }),
    password: z
      .string()
      .max(50, { message: "Tamanho máximo de 50 caracteres" })
      .nonempty("Insira uma senha"),
    confirmPassword: z.string().nonempty("Insira a senha novamente"),
    cpf: z
      .string()
      .max(14, { message: "Tamanho máximo atingido" })
      .nonempty("Insira um cpf"),
    phone: z
      .string()
      .max(15, { message: "Tamanho máximo atingido" })
      .nonempty("Insira um número de telefone"),
    birthDate: z.string().nonempty("Insira a data de nascimento"),
    description: z
      .string()
      .max(500, { message: "Tamanho máximo atingido." })
      .nonempty("Insira uma descrição"),
    isVendor: z.union([z.string(), z.boolean()]),

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
    complement: z.string().max(30, { message: "Tamanho máximo atingido." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  })
  .refine((data) => {
    if (data.isVendor === "vendedor") data.isVendor = true;
    if (data.isVendor === "comprador") data.isVendor = false;
    data.number = Number(data.number);
    return data;
  });

export type RegisterInterface = z.infer<typeof registerSchema>;