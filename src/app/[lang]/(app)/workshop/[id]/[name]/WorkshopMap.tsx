import { Map, Marker } from '@/presentation/components/map'
import { LocateIcon } from 'lucide-react'

export function WorkshopMap() {
  const center: [number, number] = [-34.600625, -58.563671]

  const markers: Marker[] = [
    {
      lat: -34.600625,
      lng: -58.563671,
      tooltip: (
        <div style={{ background: 'white', padding: '10px', borderRadius: '5px' }}>
          <h3 style={{ color: '#2c3e50', fontWeight: 'bold', fontSize: 14, }}>Gomeria el corneta</h3>
          <p style={{ color: '#2c3e50', fontWeight: 'normal', fontSize: 12, }}>Av. San Martin 4585, Caseros.</p>
        </div>
      ),
      tooltipPermanent: true,
      iconName: 'pin',
      iconSize: 28
    },
  ]

  return (
    <div
      className="h-[800px] w-full flex-col gap-2 flex items-center justify-center divide-y divide-gray-200"
    >
      <div className='flex justify-start items-center w-full flex-col gap-2'>
        <div className='flex justify-center items-center flex-nowrap w-full'>
          <LocateIcon className='mr-2' />
          <h2 className="text-2xl font-bold text-left w-full">Ubicación</h2>
        </div>
        <div className="rounded-[2rem] h-auto w-full">
          <Map
            center={center}
            zoom={13}
            markers={markers}
            circle={{
              lat: center[0],
              lng: center[1],
              raidus: 1200
            }}
            styleContainer={{ height: '600px', width: '100%' }}
            classNameContainer='rounded-[1rem]'
          />
        </div>
      </div>
    </div>
  )
}