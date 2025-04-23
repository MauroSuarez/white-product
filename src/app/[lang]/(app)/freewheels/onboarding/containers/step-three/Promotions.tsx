
import React, { useEffect } from "react"

import { useFormContext } from "react-hook-form"
import { WorkshopScheduleSchema } from "@/application/validators/setUpSchema"
import { PanelSetup } from "../../components/PanelSetup"
import { FormWorkShopSchedule } from "../../components/FormWorkShopSchedule"


interface WorkShopOpenDaysProps {
  handleNext: (value: boolean) => void
}

const Promotions = ({ handleNext }: WorkShopOpenDaysProps) => {
  const { watch, formState: { errors }, setValue  } = useFormContext()

  // const schedule = watch('schedule')
  // const scheduleString = JSON.stringify(schedule) // Convertimos a string para detectar cambios

  // useEffect(() => {
  //   const scheduleParse = scheduleString && JSON.parse(scheduleString)
  //   const validationResult = WorkshopScheduleSchema.safeParse({
  //     schedule: scheduleParse
  //   })

  //   if(!validationResult.success) {
  //     handleNext(true)
  //   } else {
  //     handleNext(false)
  //   }
  // }, [scheduleString])

  return (
    <div className="flex items-start flex-wrap justify-center w-4/5 mx-auto min-h-10 h-auto">
      <PanelSetup
        title="Agrega descuentos"
        description="Hacé que tu taller se destaque para conseguir nuevos clientes y mejores evaluaciones."
      >
        <div className="w-3/5 flex justify-center mt-8">
          promociones
        </div>
      </PanelSetup>
    </div>
  )
}

export { Promotions }
