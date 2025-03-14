'use client'

import React, { useState } from 'react'
import { usePositionScroll } from '@/presentation/hooks/usePositionScroll'
import { Button } from '@/presentation/ui/atoms/button'
import { Typography } from '@/presentation/ui/atoms/typography'
import { SlidersHorizontal, Map, Hammer } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/presentation/ui/atoms/carousel'
import { Card, CardContent } from '@/presentation/ui/atoms/card'

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

          <div className="flex">
          {/* <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-sm"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, key) => (
                <CarouselItem key={key} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                  <Button
                      onClick={() => toggleActive(key)}
                      variant='outline'
                      className={`h-auto border-0 shadow-none w-auto py-1 flex flex-wrap justify-center rounded-none
                        ${isActive === key ? 'border-b-2 border-primary' : ''}
                        
                      `}
                    >
                      <Hammer />
                      <div className='flex w-full py-0 m-0 justify-center'>
                        <Typography variant='muted' className='py-0 m-0'>Lavadero {key}</Typography>
                      </div>
                    </Button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel> */}
            {/* <Carousel>
              <CarouselContent>
                {[...new Array(8)].map((_, key) => (
                  <CarouselItem key={key} className='border border-red-500 h-20'>
                    <div className='flex items-center justify-center h-64 bg-yellow-100 rounded-lg'>
                    <Button
                      onClick={() => toggleActive(key)}
                      variant='outline'
                      className={`h-auto border-0 shadow-none w-auto py-1 flex flex-wrap justify-center rounded-none
                        ${isActive === key ? 'border-b-2 border-primary' : ''}
                        
                      `}
                    >
                      <Hammer />
                      <div className='flex w-full py-0 m-0 justify-center'>
                        <Typography variant='muted' className='py-0 m-0'>Lavadero {key}</Typography>
                      </div>
                    </Button>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel> */}
            <div className='w-full flex flex-nowrap gap-2'>
              {[...new Array(8)].map((_, key) => (
                <Button
                  onClick={() => toggleActive(key)}
                  variant='outline'
                  className={`h-auto border-0 shadow-none w-auto py-1 flex flex-wrap justify-center rounded-none
                    ${isActive === key ? 'border-b-2 border-primary' : ''}
                    
                  `}
                >
                  <Hammer />
                  <div className='flex w-full py-0 m-0 justify-center'>
                    <Typography variant='muted' className='py-0 m-0'>Lavadero {key}</Typography>
                  </div>
                </Button>
              ))}
            </div>
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