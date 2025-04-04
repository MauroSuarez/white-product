import React, { useRef, useState } from 'react'
import { ZodType } from "zod"
import { PanelSetup } from "../../components/PanelSetup"
import { Map } from '@/presentation/components/map'
import { SearchBoxPlaces, PlaceResult } from "@/presentation/components/searchbox-places"

interface LocationAddressProps {
  schema?: ZodType
  handleNext: (value: boolean) => void
}

const LocationAddress = ({ schema, handleNext }: LocationAddressProps) => {
  const center: [number, number] = [-34.600625, -58.563671]
  const mapRef = useRef<{ flyTo: (coords: [number, number], zoom: number) => void } | null>(null)
  const [position, setPosition] = useState([-34.600625, -58.563671])
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [selectedLocation, setSelectedLocation] = useState<PlaceResult | null>(null)
  
  const markers = [
    {
      lat: -34.600625,
      lng: -58.563671,
      tooltip: (
        <div style={{ background: 'white', padding: '10px', borderRadius: '5px' }}>
          <h3 style={{ color: 'blue' }}>Tooltip con React</h3>
          <p>Este es un tooltip hecho con un componente de React.</p>
        </div>
      ),
    },
  ]
  return (
    <PanelSetup
      title="¿Dónde está tu taller?"
      description="Vamos a compartir tu dirección con los clientes para que puedan encontrarte fácilmente."
    >
      <div className="relative flex flex-wrap w-3/5 mx-auto mt-4 rounded-lg border border-gray-300 shadow-sm">
        <div className='w-4/5 absolute left-1/2 top-5 transform -translate-x-1/2 z-[99999]'>
          <SearchBoxPlaces
            onPlaceSelected={(place: PlaceResult) => {
              setSelectedLocation(place);
              console.log('Lugar seleccionado:', place);
            }}
            placeholder="Escribe una dirección..."
            className="mb-4"
          />
        </div>
        <Map center={center} zoom={13} markers={markers} styleContainer={{ height: '450px', width: '100%' }} />
      </div>
    </PanelSetup>
  )
}

export { LocationAddress }
