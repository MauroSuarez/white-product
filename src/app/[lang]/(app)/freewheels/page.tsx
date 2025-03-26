'use client'

import { Typography } from "@/presentation/ds/typography";
import { Map } from '@/presentation/components/map'
import { Header } from "../layout/Header";

export default function FreeWheel() {
    const center: [number, number] = [-34.600625, -58.563671]

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
      {
        lat: -34.600537,
        lng: -58.570565,
        tooltip: '<b>Tooltip con HTML</b><br><a href="#">Enlace</a>', // Tooltip con HTML
      },
      {
        lat: -34.595529,
        lng: -58.564390,
        tooltip: 'Tooltip de texto simple', // Tooltip con string
      },
    ]
    return (
      <>
        <div className="sticky top-0 z-20 bg-background">
          <Header type="basic" />
        </div>
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
              <Map center={center} zoom={13} markers={markers} styleContainer={{ height: '700px', width: '100%' }} />
            </div>
          </div>
        </section>
      </>
  )
}
