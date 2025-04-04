
import React, { useEffect } from "react"
import { useCategoriesStore } from "@/infraestructure/stores/categoriesStore"
import { Typography } from "@/presentation/ds/typography"

import { FormRadioGroupCardCategory } from "../../components/FormRadioGroupCardCategory"
import { ZodType } from "zod"
import { useFormContext } from "react-hook-form"
import { CategorySchema } from "@/application/validators/setUpSchema"


interface ChoiseCategoryProps {
  schema?: ZodType
  handleNext: (value: boolean) => void
}

const ChoiseCategory = ({ schema, handleNext }: ChoiseCategoryProps) => {
  const { categories } = useCategoriesStore()
  const { watch, formState: { errors }  } = useFormContext()

  const category = watch('category')

  useEffect(() => {
    const validationResult = CategorySchema.safeParse({
      category: category
    })

    if(!validationResult.success) {
      handleNext(true)
    } else {
      handleNext(false)
    }
  }, [category])

  return (
    <div className="flex items-start flex-wrap justify-center w-4/5 mx-auto min-h-10 h-auto">
      <div className="flex-wrap w-full flex h-auto">
        <Typography variant={'h2'} className="text-center w-full font-semibold border-none">
          ¿Cuál de estas opciones describe mejor tu taller?
        </Typography>
      </div>
      <div className="flex w-full flex-wrap mt-4 justify-center">
        <FormRadioGroupCardCategory
          name="category"
          options={categories}
          className="flex w-full"
        />
      </div>
    </div>
  )
}

export { ChoiseCategory }
