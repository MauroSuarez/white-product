import { z } from "zod"

export const SetUpSchema = z.object({
  category: z.string().optional(),
  location: z.object({
    address: z.string().optional(),
    lat: z.number().optional(),
    lng: z.number().optional(),
    name: z.string().optional(),
    placeId: z.string().optional(),
  }),
})

export const CategorySchema = z.object({
  category: z.string().min(1, 'Debe seleccionar una categoria.'),
})

export const GooglePlaceSchema = z.object({
  location: z.object({
    address: z.string({
      required_error: "La dirección es requerida",
      invalid_type_error: "La dirección debe ser un texto"
    }).min(5, {
      message: "La dirección debe tener al menos 5 caracteres"
    }),
    
    lat: z.number({
      required_error: "La latitud es requerida",
      invalid_type_error: "La latitud debe ser un número"
    }).min(-90, {
      message: "La latitud no puede ser menor a -90"
    }).max(90, {
      message: "La latitud no puede ser mayor a 90"
    }),
    
    lng: z.number({
      required_error: "La longitud es requerida",
      invalid_type_error: "La longitud debe ser un número"
    }).min(-180, {
      message: "La longitud no puede ser menor a -180"
    }).max(180, {
      message: "La longitud no puede ser mayor a 180"
    }),
    
    name: z.string({
      required_error: "El nombre del lugar es requerido",
      invalid_type_error: "El nombre debe ser un texto"
    }).min(2, {
      message: "El nombre debe tener al menos 2 caracteres"
    }).optional(), // Hacerlo opcional si puede no venir
    
    placeId: z.string({
      required_error: "El placeId es requerido",
      invalid_type_error: "El placeId debe ser un texto"
    }).min(5, {
      message: "El placeId debe tener al menos 5 caracteres"
    }),
  })
})

export const partialSetUpSchema = SetUpSchema.partial()

export type SetUpDTO = z.infer<typeof SetUpSchema>
