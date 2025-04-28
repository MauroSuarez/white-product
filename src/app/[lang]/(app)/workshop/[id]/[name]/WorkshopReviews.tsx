'use client'

import { useState } from "react"
import { ChevronLeft, MessageCircle, Star } from "lucide-react"
import { ReviewCard } from "./ReviewCard"
import { Button } from "@/presentation/ds/button"
import { CustomSheet } from "@/presentation/components/custom-sheet"

export function WorkshopReviews() {
  const [openModalReviews, setOpenModalReviews] = useState(false)
  const mockReviews = [
    {
      id: "1",
      name: "María González",
      avatarUrl: "/avatars/1.jpg",
      rating: 5,
      comment: "Excelente servicio, muy profesionales. Volveré a contratarlos sin duda.",
      date: "2023-05-15",
    },
    {
      id: "2",
      name: "Carlos Pérez",
      rating: 4,
      comment: "Buen trabajo, aunque hubo un pequeño retraso en la entrega. Por lo demás todo perfecto.",
      date: "2023-04-22",
    },
    {
      id: "3",
      name: "Ana Rodríguez",
      avatarUrl: "/avatars/3.jpg",
      rating: 5,
      comment: "Increíble atención al cliente y resultados de alta calidad. Superaron mis expectativas.",
      date: "2023-03-10",
    },
  ]
  return (
    <>
      <section id="reviews" className='flex justify-start items-center w-full flex-col gap-2 border-t border-gray-200 mt-4'>
        <div className='flex justify-center items-center flex-nowrap w-full mt-4'>
          <Star className='mr-2' />
          <h2 className="text-2xl font-bold text-left w-full">Calificaciones</h2>
        </div>
        <div className="rounded-[2rem] h-auto w-full">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {mockReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
        <div className='h-10 w-full py-4 flex justify-start items-center mt-4'>
          <Button onClick={() => setOpenModalReviews(!openModalReviews)} variant='outline' className='py-5 border border-gray-200 right-4 bg-white text-gray-800 hover:bg-gray-100'>
            <MessageCircle className='mr-4' /> Mostrar todo 48 evaluaciones
          </Button>
        </div>
      </section>
      <CustomSheet
        isOpen={openModalReviews}
        isOpenChange={() => setOpenModalReviews(false)}
        header={(
          <div className='flex w-full justify-between'>
            <ChevronLeft
              className='text-neutral-500 cursor-pointer'
              onClick={() => setOpenModalReviews(false)}
            />
            <div className="flex space-x-4">
              
            </div>
          </div>
        )}
        footer={(<></>)}
      >
        <div>Aca irian las demás reviews</div>
      </CustomSheet>
    </>
  )
}