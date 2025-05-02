'use client'

import { Filters } from "./Filters"
import { useViewTypeStore } from "@/infraestructure/stores/viewTypeStore"
import { useAuthStore } from "@/infraestructure/stores/authStore"
import AppLayout from './AppLayout'
import { CardView } from "./CardView"
import { MapView } from "./MapView"
import { useEffect } from "react"


const workshops = [
  {
    id: 1,
    image: '/images/workshop.jpg',
    name: 'Garage',
    description: 'Garage por hora, día y mes',
    rating: 2.3,
    countReviews: 123,
    isFavorite: false,
    hasPromotions: false,
    category: 'Garage',
    category_icon: 'garage',
    created_at: '2025-05-01 13:18:34.004009+00',
  },
  {
    id: 2,
    image: '/images/workshop-1.jpg',
    name: 'Mecanica integral',
    description: 'Mecanica liviana y pesada',
    rating: 5.3,
    countReviews: 23,
    isFavorite: true,
    hasPromotions: false,
    category: 'Taller mecánico',
    category_icon: 'carRepair',
    created_at: '2025-02-21 13:18:34.004009+00',
  },
  {
    id: 3,
    image: '/images/workshop-6.jpg',
    name: 'Lavadero espumita',
    description: 'Estamos lavando, los mejores servicios, llueve truene o salga el sol',
    rating: 5.0,
    countReviews: 12,
    isFavorite: false,
    hasPromotions: false,
    category: 'Lavadero',
    category_icon: 'carwash',
    created_at: '2025-02-21 13:18:34.004009+00',
  },
  {
    id: 4,
    image: '/images/workshop-3.jpg',
    name: 'Chapa y pintura "El Chapa"',
    description: 'Chapa porque estamos locos con los precios',
    rating: 5.3,
    countReviews: 23,
    isFavorite: false,
    hasPromotions: false,
    category: 'Chapa y pintura',
    category_icon: 'carPaint',
    
  },
  {
    id: 4,
    image: '/images/workshop-4.jpg',
    name: 'Lubricentro lubri +',
    description: 'Lubricentro, contamos con los mejores productos para tu auto',
    rating: 2.3,
    countReviews: 4,
    isFavorite: true,
    hasPromotions: false,
    category: 'Lubricentro',
    category_icon: 'carOil',
    created_at: '2025-02-21 13:18:34.004009+00',
  },
  {
    id: 5,
    image: '/images/workshop-5.jpg',
    name: 'Gomeria el corneta',
    description: 'Si sos corneta te cambiamos la rueda igual',
    rating: 3.8,
    countReviews: 10,
    isFavorite: true,
    hasPromotions: true,
    category: 'Gomería',
    category_icon: 'carTire',
    created_at: '2025-05-01 13:18:34.004009+00',
  },
  {
    id: 5,
    image: '/images/workshop-2.jpg',
    name: 'Cerrajeria "la llave maestra"',
    description: 'Si perdiste la llave, no llames a Abel Pinto, llamanos a nosotros',
    rating: 3.8,
    countReviews: 10,
    isFavorite: true,
    hasPromotions: true,
    category: 'Cerrajería del automotor',
    category_icon: 'carKey',
    created_at: '2025-05-01 13:18:34.004009+00',
  },
  {
    id: 5,
    image: '/images/workshop-7.jpg',
    name: 'Seguridad vial, el vigilante',
    description: 'Tenemos todos los productos para que puedas circular con tranquilidad',
    rating: 3.8,
    countReviews: 10,
    isFavorite: true,
    hasPromotions: true,
    category: 'Seguridad vial',
    category_icon: 'roadSafety',
    created_at: '2025-02-21 13:18:34.004009+00',
  },
]

export default function Home() {
  const { viewType, setViewType } = useViewTypeStore()

  useEffect(() => setViewType('map'), [])

  return (
    <AppLayout subHeader={<Filters />} showSearchBar type="default">
      <section className="w-full py-8 px-10 h-screen">
        {viewType === 'grid' ? (
          <CardView workshops={workshops} />
        ) : (
          <MapView workshops={workshops} />
        )}
      </section>
    </AppLayout>
  )
}