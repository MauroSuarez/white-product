import { z } from "zod"

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

export const SocialNameSchema = z.object({
  socialName: z.string().min(3, 'Debe completar el nombre de la razón social.'),
})

export const DescriptionSchema = z.object({
  description: z.string().min(3, 'Debe completar la descripción.'),
})

export const ImageUploadSchema = z.object({
  images: z.array(
    z.object({
      id: z.string(),
      file: z.instanceof(File, { message: 'Debe ser un archivo válido' }).optional(),
      url: z.string().url().optional(),
      preview: z.string().optional()
    })
  )
  .min(4, 'Debes subir 4 imágenes')
  .refine(files => files.every(file => 
    !file.file || file.file.size <= 5 * 1024 * 1024
  ), 'Cada imagen debe ser menor a 5MB')
})

const TimeSchema = z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, {
  message: "Formato de hora inválido (HH:MM)"
})

const DayScheduleSchema = z.object({
  open: z.boolean().default(false),
  openingTime: z.string().optional(), //TimeSchema.optional(),
  closingTime: z.string().optional(), // TimeSchema.optional()
}).superRefine((val, ctx) => {
  if (val.open) {
    if (!val.openingTime || !val.closingTime) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Debes especificar horarios cuando el día está abierto",
        path: ["openingTime"]
      })
    } else if (val.openingTime >= val.closingTime) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "La hora de cierre debe ser posterior a la de apertura",
        path: ["closingTime"]
      })
    }
  }
  // if (val.open && (!val.openingTime || !val.closingTime)) {
  //   ctx.addIssue({
  //     code: z.ZodIssueCode.custom,
  //     message: "Debes especificar horarios cuando el día está abierto"
  //   })
  // }
})

export const WorkshopScheduleSchema = z.object({
  schedule: z.object({
    monday: DayScheduleSchema,
    tuesday: DayScheduleSchema,
    wednesday: DayScheduleSchema,
    thursday: DayScheduleSchema,
    friday: DayScheduleSchema,
    saturday: DayScheduleSchema,
    sunday: DayScheduleSchema
  })
}).superRefine((val, ctx) => {
  const days = Object.values(val.schedule)
  const hasOpenDay = days.some(day => day.open)
  if (!hasOpenDay) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Debes tener al menos un día abierto",
      path: ["schedule"]
    })
  }
})

export const ServicesSchema =  z.object({
  services: z.array(
    z.string()
  )
  .min(1, "Debes seleccionar al menos una subcategoría")
})

export const AmanitiesSchema =  z.object({
  amenities: z.array(
    z.string()
  )
  .min(1, "Debes seleccionar al menos una subcategoría")
})

export const SetUpSchema = z.object({
  category: z.string().optional(),
  location: z.object({
    address: z.string().optional(),
    lat: z.number().optional(),
    lng: z.number().optional(),
    name: z.string().optional(),
    placeId: z.string().optional(),
  }).optional(),
  images: z.array(
    z.object({
      id: z.string().optional(),
      file: z.instanceof(File, { message: 'Debe ser un archivo válido' }).optional(),
      url: z.string().url().optional(),
      preview: z.string().optional()
    })
  )
  .min(1, 'Debes subir 4 imágenes')
  .max(4, 'Máximo 4 imágenes permitidas')
  .refine(files => files.every(file => 
    !file.file || file.file.size <= 5 * 1024 * 1024
  ), 'Cada imagen debe ser menor a 5MB').optional(),
  socialName: z.string().optional(),
  description: z.string().optional(),
  schedule: z.object({
    monday: DayScheduleSchema,
    tuesday: DayScheduleSchema,
    wednesday: DayScheduleSchema,
    thursday: DayScheduleSchema,
    friday: DayScheduleSchema,
    saturday: DayScheduleSchema,
    sunday: DayScheduleSchema
  }).optional(),
  services: z.array(
    z.string()
  )
  .min(1, "Debes seleccionar al menos un servicio")
  .optional(),
  amenities: z.array(
    z.string()
  )
  .min(1, "Debes seleccionar al menos una")
  .optional()
})

export const partialSetUpSchema = SetUpSchema.partial()

export type SetUpDTO = z.infer<typeof SetUpSchema>
