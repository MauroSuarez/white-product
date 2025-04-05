'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { ZodType } from "zod"
import { PanelSetup } from "../../components/PanelSetup"
import { Map } from '@/presentation/components/map'
import { GooglePlaceSchema } from '@/application/validators/setUpSchema'
import { useFormContext } from 'react-hook-form'
import { FormLocationPlaces } from '../../components/FormLocationPlace'
import { useGeolocation } from '@/presentation/hooks/useLocation'

interface LocationAddressProps {
  schema?: ZodType
  handleNext: (value: boolean) => void
}

/** example responde google place
address: "Lisandro Medina 2176, Caseros, Provincia de Buenos Aires, Argentina"
lat: -34.6018761
lng: -58.5634204
name: "Lisandro Medina 2176"
placeId: "ChIJOcTMwIO5vJURIIj8Os9tXdI"
*/

const LocationAddress = ({ schema, handleNext }: LocationAddressProps) => {
  const [center, setCenter] = useState<[number, number]>([-34.600625, -58.563671])
  const { position, error, isLoading, requestPermission } = useGeolocation({
    enableHighAccuracy: true,
    timeout: 100000,
    autoRequest: true // Solicitar automáticamente al montar el componente
  })

  const { watch } = useFormContext()
  
  const location = watch('location')

  useEffect(() => {
    if(!location) {
      setCenter([position?.coords?.latitude || -34.600625, position?.coords?.longitude || -58.563671])
    }else {
      setCenter([location?.lat, location?.lng])
    }
  }, [location, position])

  useEffect(() => {
    const validationResult = GooglePlaceSchema.safeParse({
      location: location
    })

    if(!validationResult.success) {
      handleNext(true)
    } else {
      handleNext(false)
    }
  }, [location])
  
  const markers: any = useMemo(() => {
    if(!location)
      return []
    else
      return [
        {
          lat: location?.lat ||  -34.600625,
          lng: location?.lng || -58.563671,
          tooltip: (
            <div style={{ background: 'white', padding: '10px', borderRadius: '5px' }}>
              <h3 style={{ color: 'blue' }}>Tooltip con React</h3>
              <p>{location?.address}</p>
            </div>
          ),
        },
    ]
  }, [location])

  return (
    <PanelSetup
      title="¿Dónde está tu taller?"
      description="Vamos a compartir tu dirección con los clientes para que puedan encontrarte fácilmente."
    >
      <div className="relative flex flex-wrap w-3/5 mx-auto mt-4 rounded-lg border border-gray-300 shadow-sm">
        <FormLocationPlaces
          name="location"
          description="Escribe la dirección de tu taller"
        />
        {position ? (
          <Map
            center={center}
            zoom={13}
            markers={markers}
            styleContainer={{ height: '450px', width: '100%' }}
          />
        ) : null}
      </div>
    </PanelSetup>
  )
}

export { LocationAddress }
