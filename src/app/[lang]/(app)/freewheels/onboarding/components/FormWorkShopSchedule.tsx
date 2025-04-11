'use client'

import { useFormContext } from 'react-hook-form'
import { FormCheckbox } from '@/presentation/components/form/FormCheckbox'
import { FormInput } from '@/presentation/components/form/FormInput'
import { useEffect } from 'react'

const days = [
  { id: 'monday', label: 'Lunes' },
  { id: 'tuesday', label: 'Martes' },
  { id: 'wednesday', label: 'Miércoles' },
  { id: 'thursday', label: 'Jueves' },
  { id: 'friday', label: 'Viernes' },
  { id: 'saturday', label: 'Sábado' },
  { id: 'sunday', label: 'Domingo' }
] as const

export function FormWorkShopSchedule() {
  const { watch, setValue } = useFormContext()
  const schedule = watch('schedule')

  // Inicializar valores por defecto
  useEffect(() => {
    const defaultSchedule = days.reduce((acc, day) => {
      acc[day.id] = { open: false, openingTime: '', closingTime: '' }
      return acc
    }, {} as any)
    
    if (!schedule) {
      setValue('schedule', defaultSchedule, { shouldValidate: true })
    } else {
      // Asegurar que todos los días tengan la estructura correcta
      days.forEach(day => {
        if (!schedule[day.id]) {
          setValue(`schedule.${day.id}`, { open: false, openingTime: '', closingTime: '' })
        }
      })
    }
  }, [setValue])

  return (
    <div className="space-y-6 w-full">
      <div className="grid gap-4">
        {days.map((day) => (
          <div key={day.id} className="border rounded-lg p-4">
            <FormCheckbox
              name={`schedule.${day.id}.open`}
              label={day.label}
              classNameContainer="items-center"
            />

            {schedule?.[day.id]?.open && (
              <div className="mt-4 grid grid-cols-2 gap-4">
                <FormInput
                  name={`schedule.${day.id}.openingTime`}
                  label="Hora de apertura"
                  type="time"
                  className="w-full"
                  defaultValue=""
                />

                <FormInput
                  name={`schedule.${day.id}.closingTime`}
                  label="Hora de cierre"
                  type="time"
                  className="w-full"
                  defaultValue=""
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}