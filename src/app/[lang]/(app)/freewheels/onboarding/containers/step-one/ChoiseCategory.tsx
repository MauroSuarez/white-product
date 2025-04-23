
import React, { useEffect } from "react"
import { useCategoriesStore } from "@/infraestructure/stores/categoriesStore"
import { Typography } from "@/presentation/ds/typography"

import { FormRadioGroupCardCategory } from "../../components/FormRadioGroupCardCategory"
import { ZodType } from "zod"
import { useFormContext } from "react-hook-form"
import { CategorySchema } from "@/application/validators/setUpSchema"
import { PanelSetup } from "../../components/PanelSetup"


interface ChoiseCategoryProps {
  schema?: ZodType
  handleNext: (value: boolean) => void
}

const ChoiseCategory = ({ schema, handleNext }: ChoiseCategoryProps) => {
  const { categories } = useCategoriesStore()
  const { watch, formState: { errors }, setValue } = useFormContext()

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
      <PanelSetup
        title="¿Cuál de estas opciones describe mejor tu taller?"
      >
        <FormRadioGroupCardCategory
          name="category"
          options={categories}
          className="flex w-full"
          // defaultValue={category}
        />
      </PanelSetup>
    </div>
  )
}

export { ChoiseCategory }
