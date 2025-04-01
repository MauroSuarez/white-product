import { z } from "zod"

export const SetUpSchema = z.object({
  category: z.string().min(1),
  // address: z.string().min(1, 'El campo es obliatorio'),
})

export type SetUpDTO = z.infer<typeof SetUpSchema>
