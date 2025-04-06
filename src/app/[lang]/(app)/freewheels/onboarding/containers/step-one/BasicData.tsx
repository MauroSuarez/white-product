
import React, { useEffect } from "react"

import { ZodType } from "zod"
import { useFormContext } from "react-hook-form"
import { CategorySchema } from "@/application/validators/setUpSchema"
import { PanelSetup } from "../../components/PanelSetup"


interface BasicDataProps {
  handleNext: (value: boolean) => void
}

const BasicData = ({ handleNext }: BasicDataProps) => {
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
        title="Agrega algunos datos básicos sobre tu taller"
        description="No te preocupes, puedes agregar o cambiarlo más adelante"
      >
        <div>hoal</div>
      </PanelSetup>
    </div>
  )
}

export { BasicData }
