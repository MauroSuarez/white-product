'use client'

import { Typography } from "@/presentation/ds/typography";
import { Map } from '@/presentation/components/map'

export default function Home() {
  const center: [number, number] = [51.505, -0.09]

  const markers = [
    {
      lat: 51.51,
      lng: -0.1,
      tooltip: (
        <div style={{ background: 'white', padding: '10px', borderRadius: '5px' }}>
          <h3 style={{ color: 'blue' }}>Tooltip con React</h3>
          <p>Este es un tooltip hecho con un componente de React.</p>
        </div>
      ),
    },
    {
      lat: 51.49,
      lng: -0.08,
      tooltip: '<b>Tooltip con HTML</b><br><a href="#">Enlace</a>', // Tooltip con HTML
    },
    {
      lat: 51.5,
      lng: -0.06,
      tooltip: 'Tooltip de texto simple', // Tooltip con string
    },
  ]
  return (
    <section className="w-full py-8 px-10 h-screen">
      <div className="h-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 grid-rows-1">
        <div className="lg:col-span-1 md:col-span-1 col-span-1">
          <div className="flex h-full w-full justify-center items-start pt-24">
            <div className="flex flex-wrap justify-center space-y-8">
              <Typography variant='h1' className="text-primary w-full text-center">Poné tu FreeWheel</Typography>
              <Typography variant='h2' className="border-none w-full text-center">Hacete visible</Typography>
              <Typography variant='p' className="w-full text-center">Cientos de usuarios buscando servicios para sus vehículos</Typography>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 md:col-span-1 col-span-1">
          <Map center={center} zoom={13} markers={markers} />
        </div>
      </div>
    </section>
  )
}
