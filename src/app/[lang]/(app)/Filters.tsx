'use client'

import React, { useEffect, useState } from 'react'
import { usePositionScroll } from '@/presentation/hooks/usePositionScroll'
import { Button } from '@/presentation/ds/button'
import { Typography } from '@/presentation/ds/typography'
import { SlidersHorizontal, Map, LayoutGrid, Hammer } from "lucide-react"
import { Swipper } from '@/presentation/ds/swipper'
import { ViewTypeController } from '@/application/controllers/viewTypeController'

const viewTypeController = new ViewTypeController()

const Filters = () => {
  const [viewType, setViewType] = useState(viewTypeController.getViewType())
  const { isSmall } = usePositionScroll()
  const [isActive, setIsActive] = useState<number>(-1)

  const toggleActive = (key: number) => {
    setIsActive(key)
  }

  const handleViewType = () => {
    const type = viewType === 'card' ? 'map' : 'card'
    viewTypeController.setViewType(type)
  }

  useEffect(() => {
    const unsubscribe = viewTypeController.subscribe((newState: any) => {
      setViewType(newState.viewType)
    })

    // Limpiar la suscripción al desmontar el componente
    return () => unsubscribe()
  }, [])
  
  return (
    <section className={`bg-background transition-all duration-300 ${isSmall ? 'shadow-sm' : ''} h-22`}>
      <div className="px-10 h-20 w-full">

        <div className="grid grid-cols-[5fr_1fr_1fr] gap-6 h-full">

          <div className="flex flex-wrap w-full items-center overflow-x-auto">
            <Swipper>
              {[...new Array(10)].map((_, key) => (
                <div key={`item-filter-${key}`} className='inline-block h-full p-0 w-[10]'>
                  <Button
                    onClick={() => toggleActive(key)}
                    variant='outline'
                    className={`
                      flex flex-wrap
                      h-full border-0 shadow-none py-1 justify-center rounded-none
                      ${isActive === key ? 'border-b-2 border-primary' : ''}
                    `}
                  >
                    <div className='flex w-full py-0 m-0 justify-center'>
                      <Hammer />
                    </div>
                    <div className='flex w-full py-0 m-0 justify-center'>
                      <Typography variant='muted' className='py-0 m-0'>Lavadero {key}</Typography>
                    </div>
                  </Button>
                </div>
              ))}
            </Swipper>
          </div>

          <div className="flex items-center justify-end">
            <Button variant='outline'>
              <SlidersHorizontal className='mr-4' /> Más filtros
            </Button>
          </div>

          <div className="flex items-center justify-end">
            <Button variant='outline' onClick={handleViewType}>
              {viewType === 'card' ? (
                <>
                  <Map className='mr-4' /> Mostrar en mapa
                </>
              ) : (
                <>
                  <LayoutGrid className='mr-4' /> Mostrar tarjetas
                </>
              )}
            </Button>
          </div>
        </div>
        
      </div>

    </section>
  )
}

export { Filters }
