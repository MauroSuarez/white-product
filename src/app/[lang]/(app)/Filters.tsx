'use client'

import React, { useEffect, useState } from 'react'
import { usePositionScroll } from '@/presentation/hooks/usePositionScroll'
import { Button } from '@/presentation/ds/button'
import { Typography } from '@/presentation/ds/typography'
import { SlidersHorizontal, Map, LayoutGrid, Hammer } from "lucide-react"
import { Swipper } from '@/presentation/ds/swipper'
import { ViewTypeController } from '@/application/controllers/viewTypeController'
import { CategoriesController } from '@/application/controllers/categoriesController'
import { Category } from '@/infraestructure/stores/appStore'

const viewTypeController = new ViewTypeController()
const categoriesController = new CategoriesController()

const Filters = () => {
  const [viewType, setViewType] = useState(viewTypeController.getViewType())
  const [categories, setCategory] = useState(categoriesController.getCategories())
  const { isSmall } = usePositionScroll()
  const [isActive, setIsActive] = useState<number>(-1)

  const handleViewType = () => {
    const type = viewType === 'card' ? 'map' : 'card'
    viewTypeController.setViewType(type)
  }

  const handleCategory = (key: number) => {
    // TODO Setear el store con la categoria
    setIsActive(key)
    categoriesController.setCategory(key)
  }

  useEffect(() => {
    const unsubscribeViewType = viewTypeController.subscribe((newState: any) => {
      setViewType(newState.viewType)
    })

    const unsubscribeCategory = categoriesController.subscribe((newState: any) => {
      setViewType(newState.viewType)
    })

    // Limpiar la suscripción al desmontar el componente
    return () => {
      unsubscribeViewType()
      unsubscribeCategory()
    }
  }, [])
  
  return (
    <section className={`bg-background transition-all duration-300 ${isSmall ? 'shadow-sm' : ''} h-22`}>
      <div className="px-10 h-20 w-full">

        <div className="grid grid-cols-[5fr_1fr_1fr] gap-6 h-full">

          <div className="flex flex-wrap w-full items-center overflow-x-auto">
            <Swipper>
              <div className='flex flex-nowrap h-full w-full'>
                {categories?.map((item: Category, key: number) => (
                  <div key={`item-filter-${key}`} className='flex h-full p-0 w-[80px] border border-blue-500'>
                    <Button
                      onClick={() => handleCategory(key)}
                      variant='outline'
                      className={`
                        flex flex-wrap
                        h-full border-0 shadow-none py-1 justify-center rounded-none
                        ${isActive === key ? 'border-b-2 border-primary' : ''}
                      `}
                    >
                      <div className='flex h-10 w-full justify-center border border-purple-500'>
                        <Hammer />
                      </div>
                      <div className='flex w-[80px] py-0 m-0 justify-center text-wrap'>
                        <Typography variant='muted' className='py-0 m-0'>{item.label}</Typography>
                      </div>
                    </Button>
                  </div>
                ))}
              </div>
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
