import {z} from "zod";

export const loginFormSchema = z.object({
    email: z.string().nonempty("Por favor, forneça um e-mail válido"),
    password: z.string().nonempty("Por favor, forneça uma senha válida")
})