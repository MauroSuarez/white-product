import Image from "next/image";
import { Car, Users, ShieldCheck, Award, ArrowRight } from "lucide-react";

import { Button } from "@/presentation/ds/button";
import { Card, CardContent } from "@/presentation/ds/card";

export const metadata = {
  title:
    "Acerca de FreeWheels | Conectando conductores con servicios automotrices de calidad",
  description:
    "FreeWheels es la plataforma líder que conecta a conductores con talleres mecánicos, servicios de reparación, venta de repuestos y mantenimiento automotriz de confianza en toda la región.",
  keywords:
    "servicios automotrices, talleres mecánicos, repuestos de autos, reparación de vehículos, mantenimiento automotriz, FreeWheels"
};

export default function AboutUs() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-r from-orange-50 to-orange-100 py-20 md:py-32">
        <div className="container relative z-10 px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Transformando la experiencia automotriz
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
            Conectamos a conductores con los mejores servicios automotrices,
            haciendo que el mantenimiento y reparación de vehículos sea simple,
            transparente y confiable.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Explorar servicios
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Fondo de servicios automotrices"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Nuestra misión
            </h2>
            <p className="mb-10 text-xl text-gray-600">
              En FreeWheels, nuestra misión es revolucionar la forma en que las
              personas mantienen sus vehículos, creando un ecosistema donde
              encontrar servicios automotrices de calidad sea tan fácil como
              reservar un alojamiento.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  <Car className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Accesibilidad</h3>
                <p className="text-center text-gray-600">
                  Hacemos que los servicios automotrices sean accesibles para
                  todos, sin importar su conocimiento técnico.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Confianza</h3>
                <p className="text-center text-gray-600">
                  Construimos confianza a través de reseñas verificadas y
                  profesionales calificados.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Comunidad</h3>
                <p className="text-center text-gray-600">
                  Creamos una comunidad donde conductores y profesionales
                  automotrices prosperan juntos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Cómo funciona FreeWheels
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="relative">
              <div className="absolute -left-4 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white md:left-0">
                1
              </div>
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    Busca servicios
                  </h3>
                  <p className="text-gray-600">
                    Explora talleres mecánicos, tiendas de repuestos y servicios
                    automotrices cerca de ti, filtrando por tipo de servicio,
                    ubicación y calificaciones.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <div className="absolute -left-4 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white md:left-0">
                2
              </div>
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    Compara opciones
                  </h3>
                  <p className="text-gray-600">
                    Revisa perfiles detallados, fotos, precios y reseñas
                    verificadas para encontrar el servicio perfecto para tu
                    vehículo.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <div className="absolute -left-4 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white md:left-0">
                3
              </div>
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-semibold">
                    Reserva con confianza
                  </h3>
                  <p className="text-gray-600">
                    Agenda citas, solicita presupuestos o compra repuestos
                    directamente a través de nuestra plataforma segura.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              FreeWheels en números
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <p className="mb-2 text-4xl font-bold text-orange-500">
                  10,000+
                </p>
                <p className="text-xl text-gray-600">Talleres registrados</p>
              </div>
              <div className="text-center">
                <p className="mb-2 text-4xl font-bold text-orange-500">
                  50,000+
                </p>
                <p className="text-xl text-gray-600">Usuarios activos</p>
              </div>
              <div className="text-center">
                <p className="mb-2 text-4xl font-bold text-orange-500">
                  100,000+
                </p>
                <p className="text-xl text-gray-600">Servicios completados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-16 md:py-24">
        <div className="container px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Lo que dicen nuestros usuarios
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="h-full border-0 shadow-lg">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-4 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Award key={star} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-6 flex-1 text-gray-600">
                    "FreeWheels ha transformado la forma en que mantengo mi
                    vehículo. Encontré un taller mecánico confiable cerca de mi
                    casa con excelentes reseñas, y ahora es mi lugar de
                    confianza para todo lo relacionado con mi auto."
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Avatar de usuario"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Cliente Satisfecho {i}</p>
                      <p className="text-sm text-gray-500">
                        Propietario de vehículo
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Founding Story */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Nuestra historia
            </h2>
            <p className="mb-10 text-xl text-gray-600">
              FreeWheels nació de una experiencia frustrante: la búsqueda
              interminable de un taller mecánico confiable. Nuestros fundadores,
              apasionados por la tecnología y los automóviles, decidieron crear
              una solución que transformara esta experiencia para millones de
              conductores.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="mb-4 h-24 w-24 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src="/placeholder.svg?height=96&width=96"
                      alt={`Fundador ${i}`}
                      width={96}
                      height={96}
                    />
                  </div>
                  <h3 className="mb-1 text-xl font-semibold">Fundador {i}</h3>
                  <p className="mb-2 text-gray-500">Cargo</p>
                  <p className="text-center text-gray-600">
                    Breve descripción del fundador y su experiencia en la
                    industria automotriz o tecnológica.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 py-16 text-white md:py-24">
        <div className="container px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Únete a la revolución automotriz
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Ya sea que busques servicios para tu vehículo o quieras ofrecer tus
            servicios profesionales, FreeWheels es tu plataforma.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary">
              Buscar servicios
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500"
            >
              Registrar mi negocio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
