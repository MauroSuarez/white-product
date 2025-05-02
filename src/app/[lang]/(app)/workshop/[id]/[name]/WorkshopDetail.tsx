'use client'

import AppLayout from "../../../AppLayout"
import { Wacky } from '@/presentation/components/wacky'
import { WorkshopMap } from './WorkshopMap'
import { WorkshopReviews } from './WorkshopReviews'
import { WorkshopAmenities } from './WorkshopAmenities'
import { WorkshopImages } from './WorkshopImages'
import { WorkshopServices } from './WorkshopServices'
import { WorkshopSchedule } from './WorkshopSchedule'
import { WorkshopDescription } from './WorkshopDescription'
import { WorkshopMembership } from './WorkshopMembership'
import { StickyCard } from './StickyCard'
import { WorkshopSharedFav } from './WorkshopSharedFav'
import { WorkshopUserView } from "./WorkshopUserView"

export default function WorkshopDetail() {
  // src="/images/workshop.jpg"
  // src="/images/workshop-place.jpg"
  return (
    <AppLayout showSearchBar type="detail">
      <div className='flex w-full px-10 space-y-4 flex-col pb-10'>

        <div className="flex justify-between items-center mt-12">
          <h1 className="text-xl font-bold text-gray-800">Título del Componente</h1>
          <div className="flex space-x-4">
            <WorkshopSharedFav />
          </div>
        </div>

        {/* Sección inicial de images */}
        <WorkshopImages />

        {/* Layout principal */}
        <section  id="columns" className="w-full flex gap-2 !mt-8">
          {/* Columna izquierda (contenido) */}
          <div className="w-[70%] space-y-4">
            
            <WorkshopDescription />

            <div className='flex w-full py-8 border-t border-b border-gray-200 divide-y divide-gray-200 !mt-8 flex-col gap-8'>
              
              <WorkshopMembership />

              <WorkshopServices />

              <WorkshopSchedule />

              <WorkshopAmenities />

            </div>

          </div>

          {/* Columna derecha (formulario) */}
          <div id="columnSticky" className="relative w-[30%] flex flex-col gap-4">
            <WorkshopUserView />

            <StickyCard />
          </div>
        </section>

        {/* Pre-footer */}
        <section id="prefooter">
          <WorkshopMap />

          <WorkshopReviews />
        </section>

        <div className='flex justify-center items-center w-full mt-4'>
          <Wacky height={100} />
        </div>

      </div>

    </AppLayout>
  )
}
