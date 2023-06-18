import { z } from "zod";

interface UserSchemaProps {
    email: string;
    password: string;
    __formSubmitted?: boolean
}

export const userSchema = z
  .object({
    email: z.string().email("Insira um email válido").nonempty("O email é obrigatório"),
    password: z.string().min(4, "No mínimo 4 caracteres").nonempty("A senha é obrigatória"),
  })
  .refine((arg: UserSchemaProps) => {
    if (!arg.__formSubmitted) {
      return true; 
    }

    return arg.email !== "" && arg.password !== "";
  }, { message: "Campo obrigatório" });