'use client'

import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { usePositionScroll } from '@/presentation/hooks/usePositionScroll'
import { Button } from '@/presentation/ds/button'
import { Typography } from '@/presentation/ds/typography'
import { SlidersHorizontal, Map, LayoutGrid, Hammer } from "lucide-react"
import { Swipper } from '@/presentation/ds/swipper'
import { ViewTypeController } from '@/application/controllers/viewTypeController'
import { FiltersController } from '@/application/controllers/filtersController'
import { useViewTypeStore } from '@/infraestructure/stores/viewTypeStore'
// import { Category, useCategoriesStore } from '@/infraestructure/stores/categoriesStore'
import { useFilterstore } from '@/infraestructure/stores/filtersStore'
import { CategoryIcon } from '@/presentation/components/category-icon'
import { CategoriesController } from '@/application/controllers/categoriesController'
import { Category } from '@/core/domain/entities/Category'
import { fetchCategories } from '@/core/domain/services/fetchCategories'

const viewTypeController = new ViewTypeController()
const filtersController = new FiltersController()
const categoriesController = new CategoriesController()

const Filters = () => {
  // const [dataCategories, setDataCategories] = useState<Category[] | null>([])
  const viewType = useViewTypeStore((state) => state.viewType)

  const { category } = useFilterstore((state) => state.filters)
  const { isSmall } = usePositionScroll()

  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['categories'], // Identificador único para la consulta
    queryFn: fetchCategories, // Función que obtiene los datos
  })

  console.log(categories, 'categories')

  // const fetchDataCategories = async () => {
  //   try {
  //     const response = await categoriesController.getCategories()
  //     if (!response.success) {
  //       throw new Error('Error al obtener los datos');
  //     }
  //     console.log(response?.categories!)
  //     setDataCategories(response?.categories!)
  //   } catch (err) {
  //     const e = err as Error
  //     // setError(e.message)
  //   } finally {
      
  //   }
  // }

  // useEffect(() => {
  //   fetchDataCategories()
  // }, [])

  const handleViewType = () => {
    const type = viewType === 'grid' ? 'map' : 'grid'
    viewTypeController.setViewType(type)
  }

  const handleCategory = (value: number) => {
    const newValue = value !== category ? value : 0
    filtersController.setFilters("category", newValue)
  }
  
  return (
    <section className={`bg-background transition-all duration-300 ${isSmall ? 'shadow-sm' : ''} h-22`}>
      <div className="px-10 h-20 w-full">

        <div className="grid grid-cols-[5fr_1fr_1fr] gap-6 h-full">

          <div className="flex flex-wrap w-full items-center overflow-x-auto">
            <Swipper>
              <div className='flex flex-nowrap h-full w-full'>
                {categories?.map((item: Category, key: number) => (
                  <div key={`item-filter-${key}`} className='flex h-full p-0 w-[80px]'>
                    <div
                      onClick={() => handleCategory(item.id)}
                      className={`
                        flex flex-wrap cursor-pointer
                        h-full border-0 shadow-none py-1 justify-center rounded-none
                        ${category === item.id ? 'border-b-2 border-primary' : ''}
                      `}
                    >
                      <div className='flex h-10 w-full justify-center items-center'>
                        <CategoryIcon iconName={item.icon} />
                      </div>
                      <div className='flex w-[80px] py-0 m-0 justify-center text-wrap text-center'>
                        <Typography variant='muted' className={`py-0 m-0 text-[10px] ${category === item.id ? 'font-semibold' : ''}`}>{item.label}</Typography>
                      </div>
                    </div>
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
              {viewType === 'grid' ? (
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
