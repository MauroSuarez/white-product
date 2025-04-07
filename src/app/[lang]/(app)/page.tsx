'use client'

import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/presentation/ds/card"
import { Icon } from "@/presentation/ds/icon"
import { Filters } from "./Filters"
import { Map } from '@/presentation/components/map'
import { ScrollArea } from '@/presentation/ds/scroll-area'
import { Separator } from '@/presentation/ds/separator'
import { useViewTypeStore } from "@/infraestructure/stores/viewTypeStore"
import { useAuthStore } from "@/infraestructure/stores/authStore"
import AppLayout from './AppLayout'

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export default function App() {
  const { user, isLoggedIn, authModal } = useAuthStore()
  const viewType = useViewTypeStore((state) => state.viewType)
  const center: [number, number] = [-34.600625, -58.563671]

  // TODO, agregar un wrapper para la revisión del logueo
  const handleAddFavorite = () => {
    if(!user) {
      console.log("no estoy logueado")
      // setIsAuthModal(true)
    }else {
      console.log("si estoy logueado")
    }
  }

  const markers = [
    {
      lat: -34.600625,
      lng: -58.563671,
      tooltip: (
        <div style={{ background: 'white', padding: '10px', borderRadius: '5px' }}>
          <h3 style={{ color: 'blue' }}>Tooltip con React</h3>
          <p>Este es un tooltip hecho con un componente de React.</p>
        </div>
      ),
    },
  ]

  const handleSubmit = (data: any) => {
    console.log(data, 'FORM')
  }

  return (
    <AppLayout filters={<Filters />} showSearchBar type="default">
      <section className="w-full py-8 px-10 h-screen">
        {viewType === 'grid' ? (
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-4 lg:gap-4 md:grid-cols-4 md:gap-4 sm:grid-cols-2 sm:gap-4">
          {[...new Array(7)].map((column, index) => (
            <Card key={`card-freewheel-${index}`} className="overflow-hidden rounded-lg border-0">
              <div className="relative">
                <Link href={'/es/workshop/1'}>
                  <img
                    src="/images/workshop.jpg"
                    alt="Taller mecánico"
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div onClick={handleAddFavorite} className="absolute cursor-pointer top-2 right-2 bg-background rounded-full p-2 shadow-md">
                  <Icon name='HeartIcon' className="w-4 h-4 text-foreground" />
                </div>
              </div>
              
              <Link href={'/es/workshop/1'}>
                <CardContent className="px-0">
                  <CardHeader className="py-6 px-0">
                    <CardTitle className="text-xl font-semibold">Taller Mecánico XYZ</CardTitle>
                    <CardDescription className="text-gray-600">
                      Servicios de mecánica general, electricidad y mantenimiento.
                    </CardDescription>
                  </CardHeader>
                  
                  <CardFooter className="flex items-center space-x-1 py-2 px-0">
                    <Icon name='StarIcon' className="h-5 w-5 text-yellow-400" />
                    <span className="text-sm font-medium">4.8</span>
                    <span className="text-sm text-gray-500">(128 reseñas)</span>
                  </CardFooter>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
        ) : (
          <div className="grid grid-cols-4 gap-4 h-full">
            <div className="col-span-1">
              <ScrollArea className="h-48 w-full rounded-md border">
                <div className="p-4">
                  <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                  {tags.map((tag) => (
                    <>
                      <div key={tag} className="text-sm">
                        {tag}
                      </div>
                      <Separator className="my-2" />
                    </>
                  ))}
                </div>
              </ScrollArea>
            </div>

            <div className="col-span-3 rounded-sm">
              <Map center={center} zoom={13} markers={markers} styleContainer={{ height: '100%', width: '100%' }} />
            </div>
          </div>
        )}
      </section>
    </AppLayout>
  )
}