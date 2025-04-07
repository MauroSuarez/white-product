
import React, { useEffect } from "react"
import { useCategoriesStore } from "@/infraestructure/stores/categoriesStore"
import { Typography } from "@/presentation/ds/typography"

import { FormRadioGroupCardCategory } from "../../components/FormRadioGroupCardCategory"
import { ZodType } from "zod"
import { useFormContext } from "react-hook-form"
import { CategorySchema } from "@/application/validators/setUpSchema"
import { PanelSetup } from "../../components/PanelSetup"


interface ChoiseServicesProps {
  schema?: ZodType
  handleNext: (value: boolean) => void
}

const WorkShopPothos = ({ schema, handleNext }: ChoiseServicesProps) => {
  // const { categories } = useCategoriesStore()
  // const { watch, formState: { errors }  } = useFormContext()

  // const category = watch('category')

  // useEffect(() => {
  //   const validationResult = CategorySchema.safeParse({
  //     category: category
  //   })

  //   if(!validationResult.success) {
  //     handleNext(true)
  //   } else {
  //     handleNext(false)
  //   }
  // }, [category])

  return (
    <div className="flex items-start flex-wrap justify-center w-4/5 mx-auto min-h-10 h-auto">
      <PanelSetup
        title="Agregá algunas fotos de tu taller"
        description="Necesitarás al menos 4 fotos para que tu taller sea visible en la app"
      >
        
      </PanelSetup>
    </div>
  )
}

export { WorkShopPothos }
