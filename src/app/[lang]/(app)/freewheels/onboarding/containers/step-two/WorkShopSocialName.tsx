
import React, { useEffect } from "react"

import { ZodType } from "zod"
import { useFormContext } from "react-hook-form"
import { SocialNameSchema } from "@/application/validators/setUpSchema"
import { PanelSetup } from "../../components/PanelSetup"
import { FormTextArea } from "@/presentation/components/form/FormTextArea"


interface WorkShopSocialNameProps {
  schema?: ZodType
  handleNext: (value: boolean) => void
}

const WorkShopSocialName = ({ schema, handleNext }: WorkShopSocialNameProps) => {
  const { watch, formState: { errors }, setValue  } = useFormContext()

  const socialName = watch('socialName')

  useEffect(() => {
    const validationResult = SocialNameSchema.safeParse({
      socialName: socialName
    })

    if(!validationResult.success) {
      handleNext(true)
    } else {
      handleNext(false)
    }
  }, [socialName])

  return (
    <div className="flex items-start flex-wrap justify-center w-4/5 mx-auto min-h-10 h-auto">
      <PanelSetup
        title="Ponelé el nombre a tu taller"
        description="Los nombres cortos funcionan mejor. Podés usar el nombre de tu taller o uno que lo represente."
      >
        <div className="w-3/5 flex justify-center mt-8">
          <FormTextArea
            name="socialName"
            maxLength={120}
            className="w-full mx-auto mt-8 min-h-20"
            classNameContainer="mb-4 w-full"
            placeholder="Escribe el nombre tu taller, gomería, etc."
            // defaultValue={socialName}
          />
        </div>
      </PanelSetup>
    </div>
  )
}

export { WorkShopSocialName }
