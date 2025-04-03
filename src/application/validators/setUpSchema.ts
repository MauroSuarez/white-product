import { z } from "zod"

export const SetUpSchema = z.object({
  category: z.string().optional(),
  // address: z.string().min(1, 'El campo es obliatorio'),
})

export const CategorySchema = z.object({
  category: z.string().min(1, 'Debe seleccionar una categoria.')
})

export const partialSetUpSchema = SetUpSchema.partial()

export type SetUpDTO = z.infer<typeof SetUpSchema>
