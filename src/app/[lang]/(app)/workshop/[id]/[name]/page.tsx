'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import AppLayout from "../../../AppLayout"
import { Icon } from '@/presentation/ds/icon'
import { Button } from '@/presentation/ds/button'
import { Bed, Images, LocateIcon, Medal, MessageCircle, Settings, Star } from 'lucide-react'
import Link from 'next/link'
import { CustomAvatar } from '@/presentation/components/custom-avatar'
import { TUsers } from '@/core/domain/entities/User'
import { Map, Marker } from '@/presentation/components/map'
import { ReviewCard } from './ReviewCard'
import { Wacky } from '@/presentation/components/wacky'

/*
🥇 Oro: #FFD700

🥈 Plata: #C0C0C0

🥉 Bronce: #CD7F32
*/

export default function WorkshopName() {
  const center: [number, number] = [-34.600625, -58.563671]

  const markers: Marker[] = [
    {
      lat: -34.600625,
      lng: -58.563671,
      tooltip: (
        <div style={{ background: 'white', padding: '10px', borderRadius: '5px' }}>
          <h3 style={{ color: '#2c3e50', fontWeight: 'bold', fontSize: 14, }}>Gomeria el corneta</h3>
          <p style={{ color: '#2c3e50', fontWeight: 'normal', fontSize: 12, }}>Av. San Martin 4585, Caseros.</p>
        </div>
      ),
      tooltipPermanent: true,
      iconName: 'pin',
      iconSize: 28
    },
  ]

  const [formPosition, setFormPosition] = useState<React.CSSProperties>({
    position: "relative",
    top: "auto",
    bottom: "auto",
    left: "auto",
    width: "100%",
    marginTop: "0px"
  })

  const formRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const initialSectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const preFooterRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const updateFormPosition = () => {
      if (!formRef.current || !containerRef.current || !initialSectionRef.current || 
          !contentRef.current || !preFooterRef.current) return

      const form = formRef.current
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const headerHeight = 80// headerRef.current.offsetHeight
      const formHeight = form.offsetHeight

      // Puntos clave
      const startSticky = initialSectionRef.current.offsetTop + 
                         initialSectionRef.current.offsetHeight - 100
      const endSticky = preFooterRef.current.offsetTop - formHeight - viewportHeight + 100
      const contentBottom = contentRef.current.offsetTop + contentRef.current.offsetHeight

      // Calcular ancho exacto
      const formWidth = containerRef.current.offsetWidth - 32

      // Scroll hacia abajo
      if (scrollY < startSticky) {
        setFormPosition({
          position: "relative",
          top: "auto",
          bottom: "auto",
          left: "auto",
          width: `${formWidth}px`,
          marginTop: "0px"
        })
      } 
      // Scroll hacia arriba (transición inversa)
      else if (scrollY > endSticky && scrollY < contentBottom - viewportHeight) {
        const relativeTop = contentBottom - formHeight - scrollY
        
        setFormPosition({
          position: "absolute",
          top: `${relativeTop}px`,
          bottom: "auto",
          left: "16px",
          width: `${formWidth}px`,
          marginTop: "0px"
        })
      }
      // Estado sticky normal
      else if (scrollY >= startSticky && scrollY <= endSticky) {
        setFormPosition({
          position: "fixed",
          top: `${headerHeight + 20}px`,
          bottom: "auto",
          left: `${containerRef.current.offsetLeft + 16}px`,
          width: `${formWidth}px`,
          marginTop: "0px"
        })
      }
      // Estado final (abajo)
      else {
        setFormPosition({
          position: "absolute",
          top: "auto",
          bottom: "0px",
          left: "16px",
          width: `${formWidth}px`,
          marginTop: "0px"
        })
      }
    }

    const handleScroll = () => {
      requestAnimationFrame(updateFormPosition)
    }

    // Inicializar
    updateFormPosition()
    
    // Event listeners
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", updateFormPosition)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", updateFormPosition)
    }
  }, [])

  const items = [
    "Preferencias de cuenta",
    "Configuración de privacidad",
    "Ajustes de notificaciones",
    "Personalización de tema",
    "Configuración de seguridad",
    "Preferencias de idioma",
    "Opciones de accesibilidad",
    "Configuración de correo",  
    "Gestión de dispositivos",
    "Preferencias de pago"
  ]

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

  // src="/images/workshop.jpg"
  // src="/images/workshop-place.jpg"
  return (
    <AppLayout showSearchBar type="detail">
      <div className='flex w-full px-10 space-y-4 flex-col pb-10'>

        <div className="flex justify-between items-center mt-12">
          <h1 className="text-xl font-bold text-gray-800">Título del Componente</h1>
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

        {/* Sección inicial de 500px */}
        <section 
          ref={initialSectionRef}
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
          <Button variant='outline' className='absolute bottom-4 py-5 border border-gray-200 right-4 bg-white text-gray-800 hover:bg-gray-100'>
            <Images className='mr-4' /> Mostrar todas las fotos
          </Button>
        </section>

        {/* Layout principal */}
        <div className="w-full flex gap-2 !mt-8">
          {/* Columna izquierda (contenido) */}
          <div ref={contentRef} className="w-[70%] space-y-4">
            <div className="flex flex-col gap-1 w-full">
              {/* Título */}
              <h2 className="text-2xl font-bold text-gray-800">
                Producto Ejemplo
              </h2>
              
              {/* Descripción */}
              <p className="text-gray-600">
                Este es un producto de alta calidad con excelentes características y durabilidad comprobada.
              </p>
              
              {/* Rating con estrella y link */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 font-medium text-gray-800">4.8</span>
                </div>
                
                <Link 
                  href="#reviews" 
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline ml-2"
                >
                  114 evaluaciones
                </Link>
              </div>
            </div>

            <div className='flex w-full py-8 border-t border-b border-gray-200 divide-y divide-gray-200  !mt-8 flex-col gap-8'>
              
              <div className='flex flex-row gap-4 py-4 items-center justify-between'>
                <div className='flex flex-row gap-4 py-4 h-auto items-center'>
                  <CustomAvatar user={{} as TUsers} className='h-16 w-16' />
                  <div className='flex flex-col gap-2'>
                    <div>Especialista: Suarez Mauro</div>
                    <div>Miembro desde el 14 de febrero</div>
                  </div>
                </div>
                <div className='flex flex-row gap-4 py-4 h-auto items-center'>
                  <div className='flex flex-col gap-2'>
                    <div>Especialista: Suarez Mauro</div>
                    <div>Miembro desde el 14 de febrero</div>
                  </div>
                  <Medal width={60} height={60} color='#FFD700' />
                </div>
              </div>

              {/* <div className='flex flex-row gap-4 py-4 h-auto items-center'>
                <Medal width={60} height={60} color='#FFD700' />
                <div className='flex flex-col gap-2'>
                  <div>Especialista: Suarez Mauro</div>
                  <div>Miembro desde el 14 de febrero</div>
                </div>
              </div> */}

              <div className='flex flex-col gap-4 py-4 items-center'>
                <h2 className="text-2xl font-bold text-gray-800 w-full">
                  Servicios
                </h2>
                <div className='flex flex-col gap-2 w-full'>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Mapeamos el array dividiéndolo en dos columnas */}
                    {items.map((item, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3"
                      >
                        <Settings className="w-5 h-5 text-gray-600 flex-shrink-0" />
                        <div className='flex flex-col gap-1'>
                          <span className="text-gray-700 w-full">{item}</span>
                          <span className="text-gray-700 w-full">descripción</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className='flex flex-col gap-4 py-4 items-center'>
                <h2 className="text-2xl font-bold text-gray-800 w-full">
                  Días y horarios de atención
                </h2>
                <div className='flex flex-col gap-2 w-full'>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Mapeamos el array dividiéndolo en dos columnas */}
                    {items.map((item, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3"
                      >
                        <Bed className="w-5 h-5 text-gray-600 flex-shrink-0" />
                        <div className='flex flex-col gap-1'>
                          <span className="text-gray-700 w-full">{item}</span>
                          <span className="text-gray-700 w-full">descripción</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className='flex flex-col gap-4 py-4 items-center'>
                <h2 className="text-2xl font-bold text-gray-800 w-full">
                  Comodidades
                </h2>
                <div className='flex flex-col gap-2 w-full'>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Mapeamos el array dividiéndolo en dos columnas */}
                    {items.map((item, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3"
                      >
                        <Bed className="w-5 h-5 text-gray-600 flex-shrink-0" />
                        <div className='flex flex-col gap-1'>
                          <span className="text-gray-700 w-full">{item}</span>
                          <span className="text-gray-700 w-full">descripción</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Columna derecha (formulario) */}
          <div ref={containerRef} className="w-[30%] relative flex items-start justify-center" style={{ minHeight: '200vh' }}>
            <div
              ref={formRef}
              className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300"
              style={formPosition}
            >
              <h2 className="text-xl font-bold mb-4">Formulario</h2>
              <form className="space-y-4">
                <div>
                  <label className="block mb-2">Nombre</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" 
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Pre-footer de 800px */}
        <div 
          ref={preFooterRef}
          className="h-[800px] w-full flex-col gap-2 flex items-center justify-center divide-y divide-gray-200"
        >
          <div className='flex justify-start items-center w-full flex-col gap-2'>
            <div className='flex justify-center items-center flex-nowrap w-full'>
              <LocateIcon className='mr-2' />
              <h2 className="text-2xl font-bold text-left w-full">Ubicación</h2>
            </div>
            <div className="rounded-[2rem] h-auto w-full">
              <Map
                center={center}
                zoom={13}
                markers={markers}
                circle={{
                  lat: center[0],
                  lng: center[1],
                  raidus: 1200
                }}
                styleContainer={{ height: '600px', width: '100%' }}
              />
            </div>
          </div>
        </div>

        <div className='flex justify-start items-center w-full flex-col gap-2 border-t border-gray-200 mt-4'>
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
            <Button variant='outline' className='py-5 border border-gray-200 right-4 bg-white text-gray-800 hover:bg-gray-100'>
              <MessageCircle className='mr-4' /> Mostrar todo 48 evaluaciones
            </Button>
          </div>
        </div>

        <div className='flex justify-center items-center w-full mt-4'>
          <Wacky height={100} />
        </div>

      </div>
    </AppLayout>
  )
}
