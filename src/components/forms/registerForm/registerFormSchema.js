import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z
      .string()
      .nonempty("Digite um nome para prosseguir"),
    email: z
      .string()
      .nonempty("Digite um email para prosseguir")
      .email("Forneça um e-mail válido"),
    password: z
      .string()
      .nonempty("Digite uma senha para prosseguir")
      .min(8, "É necessário pelo menos oito caracteres")
      .regex(/(?=.*[A-Z])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/(?=.*[a-z])/, "É necessário pelo menos uma letra minúscula")
      .regex(/(?=.*[0-9])/, "É necessário pelo menos um número")
      .regex(
        /(?=.*[*?[#?!@$%^&*-])/,
        "É necessário que contenha pelo menos um caracter especial"
      ),
    confirmPassword: z
      .string()
      .nonempty("Confirme sua senha para prosseguir"),
    bio: z.string().nonempty("Por favor, preencha o campo obrigatório"),
    contact: z.string().nonempty("Por favor, preencha o campo obrigatório"),
    course_module: z.string().nonempty("Por favor, selecione um módulo"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });
