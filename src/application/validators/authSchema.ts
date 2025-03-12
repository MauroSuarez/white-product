import { z } from "zod"

export const SignUpSchema = z.object({
  firstName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: ''
  }),
  confirmPassword: z.string().min(8, {
    message: ''
  }),
  terms: z.boolean().refine(
    (value) => value === true,
    {
      message: "Debe aceptar los términos y condiciones",
    }
  ),
  roleId: z.number().refine((value) => value === 1 || value === 2),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas deben ser iguales',
  path: ["confirm"],
})

export type SignUpDTO = z.infer<typeof SignUpSchema>

export const authSchema = {
  signup: SignUpSchema
}