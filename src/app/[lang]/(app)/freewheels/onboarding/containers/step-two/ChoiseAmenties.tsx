
import React, { useEffect } from "react"

import { useFormContext } from "react-hook-form"
import { SubCategorySchema } from "@/application/validators/setUpSchema"
import { PanelSetup } from "../../components/PanelSetup"
import { FormToggleGroupSubCategory } from "../../components/FormToggleGroupSubCategory"

interface BasicDataProps {
  handleNext: (value: boolean) => void
}

const ChoiseAmenities = ({ handleNext }: BasicDataProps) => {
  // const { watch, formState: { errors }  } = useFormContext()

  // const subCategory = watch('subCategory')

  // useEffect(() => {
  //   const validationResult = SubCategorySchema.safeParse({
  //     subCategory: subCategory
  //   })

  //   if(!validationResult.success) {
  //     handleNext(true)
  //   } else {
  //     handleNext(false)
  //   }
  // }, [subCategory])

  return (
    <div className="flex items-start flex-wrap justify-center w-4/5 mx-auto min-h-10 h-auto">
      <PanelSetup
        title="Agrega algunos datos básicos sobre tu taller"
        description="No te preocupes, puedes agregar o cambiarlo más adelante"
      >
        <FormToggleGroupSubCategory
          name="amenities"
          options={[
            {
              id: 1,
              value: 'light',
              label: 'Claro',
            },
            {
              id: 2,
              value: 'dark',
              label: 'Oscuro',
            },
            {
              id: 3,
              value: 'system',
              label: 'Sistema',
            }
          ]}
          type="multiple" 
        />
      </PanelSetup>
    </div>
  )
}

export { ChoiseAmenities }
