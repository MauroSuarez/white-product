
import React, { useEffect } from "react"

import { useFormContext } from "react-hook-form"
import { BasicServicesSchema } from "@/application/validators/setUpSchema"
import { PanelSetup } from "../../components/PanelSetup"
import { FormToggleGroupServices } from "../../components/FormToggleGroupServices"
import { Skeleton } from "@/presentation/ds/skeleton"
import { useAuthStore } from "@/infraestructure/stores/authStore"
import { useCustomQuery } from "@/presentation/hooks/useCustomQuery"
import { fetchBasicServices } from "@/core/domain/services/fetchBasicServices"

interface BasicDataProps {
  handleNext: (value: boolean) => void
}

const BasicData = ({ handleNext }: BasicDataProps) => {
  const { token } = useAuthStore()
  const { watch, formState: { errors }, getValues } = useFormContext()

  const basicServices = watch('basicServices')
  const { category } = getValues()

  const {
    data,
    isLoading,
    isError,
    error,
  } = useCustomQuery(
    () => fetchBasicServices(token as string, category), // Función que obtiene los datos
    ['basic_services', category], // Identificador único para la consulta
  )

  useEffect(() => {
    const validationResult = BasicServicesSchema.safeParse({
      basicServices: basicServices
    })

    if(!validationResult.success) {
      handleNext(true)
    } else {
      handleNext(false)
    }
  }, [basicServices])

  const SkeletonBasciData = () => {
    return (
      <div className="className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto'">
        {[...new Array(6)].map((item) => (
          <div key={item} className='flex items-center h-auto py-2 gap-2 px-4'>
            <Skeleton className="w-[300px] h-20" />
            <Skeleton className="w-[300px] h-20" />
            <Skeleton className="w-[300px] h-20" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex items-start flex-wrap justify-center w-4/5 mx-auto min-h-10 h-auto">
      <PanelSetup
        title="Agrega algunos servicios básicos sobre tu taller"
        description="No te preocupes, puedes agregar o cambiarlo más adelante, y agregar servicios personalizados"
      >
        {isLoading ? (
          <SkeletonBasciData />
        ) : (
          <FormToggleGroupServices
            name="basicServices"
            options={data as Array<any> || []}
            type="multiple" 
          />
        )}
      </PanelSetup>
    </div>
  )
}

export { BasicData }
