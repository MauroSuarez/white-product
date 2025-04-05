import React, { useEffect, useMemo, useState } from 'react'
import { PanelSetup } from "../../components/PanelSetup"
import { Map } from '@/presentation/components/map'
import { useFormContext } from 'react-hook-form'
import { APPLICATION } from '@/config/constants'
import { Input } from '@/presentation/ds/input'
import { Label } from '@/presentation/ds/label'

interface ConfirmLocationAddressProps {
  handleNext: (value: boolean) => void
}

/** example responde google place
address: "Lisandro Medina 2176, Caseros, Provincia de Buenos Aires, Argentina"
lat: -34.6018761
lng: -58.5634204
name: "Lisandro Medina 2176"
placeId: "ChIJOcTMwIO5vJURIIj8Os9tXdI"
*/


const ConfirmLocationAddress = ({
  handleNext
}: ConfirmLocationAddressProps) => {
  const { getValues, setValue } = useFormContext()
  const [location, setLocation] = useState<any>(null)

  useEffect(() => {
    const location = getValues('location')
    console.log(location, 'A VEr')
    // setLocation(location)
  }, [location])

  useEffect(() => {
    setLocation({
      address: "Lisandro Medina 2176, Caseros, Provincia de Buenos Aires, Argentina",
      lat: -34.6018761,
      lng: -58.5634204,
      name: "Lisandro Medina 2176",
      placeId: "ChIJOcTMwIO5vJURIIj8Os9tXdI",
    })
  }, [])

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
                <h3 style={{ color: 'blue' }}>Tu {APPLICATION.appName} esta aquí</h3>
                <p>{location?.address}</p>
              </div>
            ),
          },
      ]
    }, [location])

  return (
    <PanelSetup
      title="Confirma tu dirección"
      description="Tu dirección estará visible para los clientes. Asegúrate de que sea correcta."
    >
      <div className='flex flex-col w-4/5 mx-auto p-4 justify-center border border-red-500'>
        <div className='flex w-full flex-wrap justify-center'>
          <Label className='w-4/5 py-4'>País</Label>
          <Input
            name="location.address"
            value={location?.address}
            readOnly
            className='w-4/5 border border-red-500 py-6'
          />
        </div>
        <div className='flex w-full mt-2 flex-wrap justify-center'>
          <div className='flex w-4/5 mx-auto flex-wrap border border-gray-300 rounded-md justify-center'>
            <Label className='w-full py-2'>País</Label>
            <Input
              name="location.address"
              value={location?.address}
              readOnly
              className='w-full py-6'
            />
            <Label className='w-full py-2'>País</Label>
            <Input
              name="location.address"
              value={location?.address}
              readOnly
              className='w-fullpy-6'
            />
            <Label className='w-full py-2'>País</Label>
            <Input
              name="location.address"
              value={location?.address}
              readOnly
              className='w-full py-6'
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-3/5 mx-auto mt-4 rounded-lg border border-gray-300 shadow-sm">
        {location ? (
          <Map
            center={[location?.lat, location?.lng]}
            zoom={13}
            markers={markers}
            styleContainer={{ height: '450px', width: '100%' }}
          />
        ) : null}
      </div>
    </PanelSetup>
  )
}

export { ConfirmLocationAddress }
