
import React, { useEffect } from "react"

import { useFormContext } from "react-hook-form"
import { AmanitiesSchema } from "@/application/validators/setUpSchema"
import { PanelSetup } from "../../components/PanelSetup"
import { FormToggleGroupAmenities } from "../../components/FormToggleGroupAmenities"
import { useAuthStore } from "@/infraestructure/stores/authStore"
import { useCustomQuery } from "@/presentation/hooks/useCustomQuery"
import { fetchAmenities } from "@/core/domain/services/fetchAmenities"

interface BasicDataProps {
  handleNext: (value: boolean) => void
}

const ChoiseAmenities = ({ handleNext }: BasicDataProps) => {
  const { token } = useAuthStore()
  const {
    data,
    isLoading,
    isError,
    error,
  } = useCustomQuery(
    () => fetchAmenities(token as string), // Función que obtiene los datos
    ['amenities'], // Identificador único para la consulta
  )

  const { watch, formState: { errors }  } = useFormContext()

  const amenities = watch('amenities')

  useEffect(() => {
    const validationResult = AmanitiesSchema.safeParse({
      amenities: amenities
    })

    if(!validationResult.success) {
      handleNext(true)
    } else {
      handleNext(false)
    }
  }, [amenities])

  return (
    <div className="flex items-start flex-wrap justify-center w-4/5 mx-auto min-h-10 h-auto">
      <PanelSetup
        title="Agrega algunos servicios extras"
        description="Contale a tus clientes con los beneficios que cuentas."
      >
        <FormToggleGroupAmenities
          name="amenities"
          options={data || []}
          type="multiple" 
        />
      </PanelSetup>
    </div>
  )
}

export { ChoiseAmenities }
