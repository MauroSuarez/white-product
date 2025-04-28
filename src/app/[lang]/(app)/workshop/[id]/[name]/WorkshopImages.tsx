'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, Images } from 'lucide-react'
import { Button } from '@/presentation/ds/button'
import { CustomSheet } from '@/presentation/components/custom-sheet'
import { Icon } from '@/presentation/ds/icon'

export function WorkshopImages() {
  const [openModalPhotos, setOpenModalPhotos] = useState(false)
  return (
    <>
      <section 
        className="h-[450px] flex items-center justify-center text-white rounded-[1rem] relative shadow-lg shadow-gray-300"
      >
        <div className="w-full h-[450px] rounded-lg overflow-hidden">
          {/* Contenedor grid interno */}
          <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-2">
            {/* Imagen grande (izquierda) - ocupa 2 columnas y 3 filas */}
            <div className="relative row-span-3 col-span-2">
              <Image
                src="/images/workshop.jpg"
                alt="Imagen principal"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
            
            {/* Tres imágenes pequeñas (derecha) */}
            <div className="relative">
              <Image
                src="/images/workshop-place.jpg"
                alt="Imagen 2"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative">
              <Image
                src="/images/workshop.jpg"
                alt="Imagen 3"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative">
              <Image
                src="/images/workshop.jpg"
                alt="Imagen 4"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
        <Button
          variant='outline'
          className='absolute bottom-4 py-5 border border-gray-200 right-4 bg-white text-gray-800 hover:bg-gray-100'
          onClick={() => setOpenModalPhotos(!openModalPhotos)}
        >
          <Images className='mr-4' /> Mostrar todas las fotos
        </Button>
      </section>
      <CustomSheet
        isOpen={openModalPhotos}
        isOpenChange={() => setOpenModalPhotos(false)}
        header={(
          <div className='flex w-full justify-between'>
            <ChevronLeft
              className='text-neutral-500 cursor-pointer'
              onClick={() => setOpenModalPhotos(false)}
            />
            <div className="flex space-x-4">
              <button className="flex items-center text-gray-600 hover:text-blue-500 transition-colors">
                <Icon name="Share1Icon" className="mr-1" />
                <span className='underline'>Compartir</span>
              </button>
              <button className="flex items-center text-gray-600 hover:text-blue-500 transition-colors">
                <Icon name="HeartIcon" className="mr-1" />
                <span className='underline'>Guardar</span>
              </button>
            </div>
          </div>
        )}
        footer={(<></>)}
      >
        <div>Aca irian las fotos</div>
      </CustomSheet>
    </>
  )
}