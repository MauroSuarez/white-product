
import React, { useEffect } from "react"

import { useFormContext } from "react-hook-form"
import { ServicesSchema } from "@/application/validators/setUpSchema"
import { PanelSetup } from "../../components/PanelSetup"
import { FormToggleGroupServices } from "../../components/FormToggleGroupServices"

interface BasicDataProps {
  handleNext: (value: boolean) => void
}

const BasicData = ({ handleNext }: BasicDataProps) => {
  const { watch, formState: { errors }  } = useFormContext()

  const services = watch('services')

  useEffect(() => {
    const validationResult = ServicesSchema.safeParse({
      services: services
    })

    if(!validationResult.success) {
      handleNext(true)
    } else {
      handleNext(false)
    }
  }, [services])

  return (
    <div className="flex items-start flex-wrap justify-center w-4/5 mx-auto min-h-10 h-auto">
      <PanelSetup
        title="Agrega algunos datos básicos sobre tu taller"
        description="No te preocupes, puedes agregar o cambiarlo más adelante"
      >
        <FormToggleGroupServices
          name="services"
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

export { BasicData }
