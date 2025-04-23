import React, { useEffect, useMemo, useState } from 'react'
import { PanelSetup } from "../../components/PanelSetup"
import { Map } from '@/presentation/components/map'
import { useFormContext } from 'react-hook-form'
import { APPLICATION } from '@/config/constants'
import { Input } from '@/presentation/ds/input'
import { Label } from '@/presentation/ds/label'
import { Typography } from '@/presentation/ds/typography'

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
    setLocation(location)
  }, [location])

  // useEffect(() => {
  //   setLocation({
  //     address: "Lisandro Medina 2176, Caseros, Provincia de Buenos Aires, Argentina",
  //     lat: -34.6018761,
  //     lng: -58.5634204,
  //     name: "Lisandro Medina 2176",
  //     placeId: "ChIJOcTMwIO5vJURIIj8Os9tXdI",
  //   })
  // }, [])

  const markers: any = useMemo(() => {
      if(!location)
        return []
      else
        return [
          {
            lat: location?.lat ||  -34.600625,
            lng: location?.lng || -58.563671,
            // popup: (
            //   <div className="bg-white p-4 rounded shadow-lg">
            //     <h3 className="font-bold">Popup permanente</h3>
            //     <p>Este popup no se cerrará automáticamente</p>
            //   </div>
            // ),
            tooltip: (
              <div className="bg-white p-2 rounded shadow-lg border border-gray-200">
                <p className="text-sm font-semibold text-gray-800">Tooltip con Tailwind</p>
              </div>
            ),
            tooltipPermanent: true
            // tooltip: (
            //   <div style={{ background: 'white', padding: '10px', borderRadius: '5px' }}>
            //     <h3 style={{ color: 'blue' }}>Tu {APPLICATION.appName} esta aquí</h3>
            //     <p>{location?.address}</p>
            //   </div>
            // ),
            //popupPermanent: true
          },
      ]
    }, [location])

  const addressData = useMemo(() => {
    const addressParts = location?.address.split(',').map((part: string) => part.trim())
    if (!addressParts)
      return {}

    return  {
      address: addressParts[0],
      city: addressParts[1],
      state: addressParts[2],
      country: addressParts[3]
    }
  }, [location])

  return (
    <PanelSetup
      title="Confirma tu dirección"
      description="Tu dirección estará visible para los clientes. Asegúrate de que sea correcta."
    >
      <div className='flex flex-col w-4/5 mx-auto p-4 justify-center'>
        
        <div className="rounded-lg border-2 border-gray-200 w-4/5 mx-auto my-1">
          <div className="pb-3 mb-3 p-4">
            <Typography variant={'muted'} className="text-left w-full font-semibold border-none">
              País
            </Typography>
           <Typography variant={'p'} className="text-left w-full font-semibold border-none">
              {addressData?.country || 'Argentina'}
            </Typography>
          </div>
        </div>
        <div className='flex w-full mt-1 flex-wrap justify-center'>
          <div className="rounded-lg border-2 border-gray-200 w-4/5 my-8">
            <div className="border-b-2 border-gray-200 pb-3 mb-3 p-4">
              <Typography variant={'muted'} className="text-left w-full font-semibold border-none">
                Dirección
              </Typography>
              <Typography variant={'p'} className="text-left w-full font-semibold border-none">
                {addressData?.address || ''}
              </Typography>
            </div>
            
            <div className="border-b-2 border-gray-200 pb-3 mb-3 p-4">
              <Typography variant={'muted'} className="text-left w-full font-semibold border-none">
                Ciudad
              </Typography>
              <Typography variant={'p'} className="text-left w-full font-semibold border-none">
                {addressData?.city || ''}
              </Typography>
            </div>
            
            <div className="pb-3 p-4">
              <Typography variant={'muted'} className="text-left w-full font-semibold border-none">
                Provincia
              </Typography>
              <Typography variant={'p'} className="text-left w-full font-semibold border-none">
                {addressData?.state || ''}
              </Typography>
            </div>
          </div>
        </div>
      
        <div className="flex flex-wrap w-4/5 mx-auto mt-4 rounded-lg border border-gray-300 shadow-sm">
          {location ? (
            <Map
              center={[location?.lat, location?.lng]}
              zoom={13}
              markers={markers}
              styleContainer={{ height: '450px', width: '100%' }}
              tooltipOptions={{ className: '!bg-white !text-black !border !border-gray-300 !shadow-lg' }}
              popupOptions={{ className: '!bg-white !text-black !border !border-gray-300 !shadow-lg' }}
            />
          ) : null}
        </div>
      </div>
    </PanelSetup>
  )
}

export { ConfirmLocationAddress }
