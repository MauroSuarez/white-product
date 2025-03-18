'use client'

import React, { useState } from 'react'
import { usePositionScroll } from '@/presentation/hooks/usePositionScroll'
import { Button } from '@/presentation/ds/button'
import { Typography } from '@/presentation/ds/typography'
import { SlidersHorizontal, Map, Hammer } from "lucide-react"
import { Swipper } from '@/presentation/ds/swipper'

const Filters = () => {
  const { isSmall } = usePositionScroll()
  const [isActive, setIsActive] = useState<number>(-1)

  const toggleActive = (key: number) => {
    setIsActive(key)
  }
  
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
            <Button variant='outline'>
              <Map className='mr-4' /> Mostrar en mapa
            </Button>
          </div>
        </div>
        
      </div>

    </section>
  )
}

export { Filters }
