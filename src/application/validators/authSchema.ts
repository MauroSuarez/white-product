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
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas deben ser iguales',
  path: ["confirm"],
})

export const SignInSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: ''
  }),
  remember: z.boolean().optional()
})

export const ResetPasswordSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export type SignUpDTO = z.infer<typeof SignUpSchema>
export type SignInDTO = z.infer<typeof SignInSchema>
export type ResetPasswordDTO = z.infer<typeof ResetPasswordSchema>

export const authSchema = {
  signup: SignUpSchema,
  signin: SignInSchema,
  resetPassword: ResetPasswordSchema,
}