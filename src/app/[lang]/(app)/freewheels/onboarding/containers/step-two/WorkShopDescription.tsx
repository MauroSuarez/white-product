
import React, { useEffect } from "react"

import { ZodType } from "zod"
import { useFormContext } from "react-hook-form"
import { DescriptionSchema } from "@/application/validators/setUpSchema"
import { PanelSetup } from "../../components/PanelSetup"
import { FormTextArea } from "@/presentation/components/form/FormTextArea"


interface WorkShopDescriptionProps {
  schema?: ZodType
  handleNext: (value: boolean) => void
}

const WorkShopDescription = ({ schema, handleNext }: WorkShopDescriptionProps) => {
  const { watch, formState: { errors }, setValue  } = useFormContext()

  const description = watch('description')

  useEffect(() => {
    const validationResult = DescriptionSchema.safeParse({
      description: description
    })

    if(!validationResult.success) {
      handleNext(true)
    } else {
      handleNext(false)
    }
  }, [description])

  return (
    <div className="flex items-start flex-wrap justify-center w-4/5 mx-auto min-h-10 h-auto">
      <PanelSetup
        title="Describe tu taller"
        description="Contá que hace que tu taller sea especial."
      >
        <div className="w-3/5 flex justify-center mt-8">
          <FormTextArea
            name="description"
            maxLength={500}
            className="w-full mx-auto mt-8 min-h-32"
            classNameContainer="mb-4 w-full"
            placeholder="Creá tu descripción."
          />
        </div>
      </PanelSetup>
    </div>
  )
}

export { WorkShopDescription }
