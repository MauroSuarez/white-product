'use client'

import React, { useState } from 'react'
import { usePositionScroll } from '@/presentation/hooks/usePositionScroll'
import { Button } from '@/presentation/ds/button'
import { Typography } from '@/presentation/ds/typography'
import { SlidersHorizontal, Map, Hammer } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/presentation/ds/carousel'
import { Card, CardContent } from '@/presentation/ds/card'
import { Swipper } from '@/presentation/ds/swipper'

const Filters = () => {
  const { isSmall } = usePositionScroll()
  const [isActive, setIsActive] = useState<number>(-1)

  const toggleActive = (key: number) => {
    setIsActive(key)
  }
  
  return (
    <section className={`bg-background transition-all duration-300 ${
          isSmall ? 'shadow-sm' : ''
        } h-22
         
      `
      }>
      <div className="px-10 h-20 flex items-center">

        <div className="grid grid-cols-[5fr_1fr_1fr] gap-6 h-20">

          <div className="flex w-full">
          {[...new Array(8)].map((_, key) => (
                <Button
                  onClick={() => toggleActive(key)}
                  variant='outline'
                  className={`
                    relative inline-block mr-2.5
                    h-auto border-0 shadow-none w-auto py-1 flex flex-wrap justify-center rounded-none
                    ${isActive === key ? 'border-b-2 border-primary' : ''}
                  `}
                >
                  <Hammer />
                  <div className='flex w-full py-0 m-0 justify-center'>
                    <Typography variant='muted' className='py-0 m-0'>Lavadero {key}</Typography>
                  </div>
                </Button>
            ))}
            {/* <Swipper /> */}
            {/* <Swipper>
              {[...new Array(18)].map((_, key) => (
                <Button
                  onClick={() => toggleActive(key)}
                  variant='outline'
                  className={`
                    relative inline-block mr-2.5
                    h-auto border-0 shadow-none w-auto py-1 flex flex-wrap justify-center rounded-none
                    ${isActive === key ? 'border-b-2 border-primary' : ''}
                  `}
                >
                  <Hammer />
                  <div className='flex w-full py-0 m-0 justify-center'>
                    <Typography variant='muted' className='py-0 m-0'>Lavadero {key}</Typography>
                  </div>
                </Button>
            ))}
            </Swipper> */}
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