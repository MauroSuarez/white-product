import Image from "next/image";
import { Car, Users, ShieldCheck, Award, ArrowRight } from "lucide-react";
import { Button } from "@/presentation/ds/button";
import { Card, CardContent } from "@/presentation/ds/card";
import { Typography } from "@/presentation/ds/typography";

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
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-r from-background/10 to-background/20 py-20 md:py-32">
        <div className="container relative z-10 px-4 text-center">
          <Typography variant="h1" className="mb-6">
            Transformando la experiencia automotriz
          </Typography>
          <Typography variant="lead" className="mb-8 mx-auto max-w-3xl">
            Conectamos a conductores con los mejores servicios automotrices,
            haciendo que el mantenimiento y reparación de vehículos sea simple,
            transparente y confiable.
          </Typography>
          <Button size="lg">
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
            <Typography variant="h2" className="mb-6">
              Nuestra misión
            </Typography>
            <Typography variant="lead" className="mb-10">
              En FreeWheels, nuestra misión es revolucionar la forma en que las
              personas mantienen sus vehículos, creando un ecosistema donde
              encontrar servicios automotrices de calidad sea tan fácil como
              reservar un alojamiento.
            </Typography>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Car className="h-8 w-8" />
                </div>
                <Typography variant="h3" className="mb-2">
                  Accesibilidad
                </Typography>
                <Typography variant="muted" className="text-center">
                  Hacemos que los servicios automotrices sean accesibles para
                  todos, sin importar su conocimiento técnico.
                </Typography>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <Typography variant="h3" className="mb-2">
                  Confianza
                </Typography>
                <Typography variant="muted" className="text-center">
                  Construimos confianza a través de reseñas verificadas y
                  profesionales calificados.
                </Typography>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-8 w-8" />
                </div>
                <Typography variant="h3" className="mb-2">
                  Comunidad
                </Typography>
                <Typography variant="muted" className="text-center">
                  Creamos una comunidad donde conductores y profesionales
                  automotrices prosperan juntos.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container px-4">
          <Typography variant="h2" className="mb-12 text-center">
            Cómo funciona FreeWheels
          </Typography>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="relative">
              <div className="absolute -left-4 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-0">
                1
              </div>
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-6">
                  <Typography variant="h3" className="mb-3">
                    Busca servicios
                  </Typography>
                  <Typography variant="muted">
                    Explora talleres mecánicos, tiendas de repuestos y servicios
                    automotrices cerca de ti, filtrando por tipo de servicio,
                    ubicación y calificaciones.
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <div className="absolute -left-4 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-0">
                2
              </div>
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-6">
                  <Typography variant="h3" className="mb-3">
                    Compara opciones
                  </Typography>
                  <Typography variant="muted">
                    Revisa perfiles detallados, fotos, precios y reseñas
                    verificadas para encontrar el servicio perfecto para tu
                    vehículo.
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <div className="absolute -left-4 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-0">
                3
              </div>
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-6">
                  <Typography variant="h3" className="mb-3">
                    Reserva con confianza
                  </Typography>
                  <Typography variant="muted">
                    Agenda citas, solicita presupuestos o compra repuestos
                    directamente a través de nuestra plataforma segura.
                  </Typography>
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
            <Typography variant="h2" className="mb-12 text-center">
              FreeWheels en números
            </Typography>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <Typography variant="h1" className="mb-2 text-primary">
                  10,000+
                </Typography>
                <Typography variant="lead">Talleres registrados</Typography>
              </div>
              <div className="text-center">
                <Typography variant="h1" className="mb-2 text-primary">
                  50,000+
                </Typography>
                <Typography variant="lead">Usuarios activos</Typography>
              </div>
              <div className="text-center">
                <Typography variant="h1" className="mb-2 text-primary">
                  100,000+
                </Typography>
                <Typography variant="lead">Servicios completados</Typography>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-r from-background/10 to-background/20 py-16 md:py-24">
        <div className="container px-4">
          <Typography variant="h2" className="mb-12 text-center">
            Lo que dicen nuestros usuarios
          </Typography>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="h-full border-0 shadow-lg">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-4 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Award key={star} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>
                  <Typography variant="muted" className="mb-6 flex-1">
                    "FreeWheels ha transformado la forma en que mantengo mi
                    vehículo. Encontré un taller mecánico confiable cerca de mi
                    casa con excelentes reseñas, y ahora es mi lugar de
                    confianza para todo lo relacionado con mi auto."
                  </Typography>
                  <div className="flex items-center">
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-muted">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Avatar de usuario"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <Typography variant="h4">
                        Cliente Satisfecho {i}
                      </Typography>
                      <Typography variant="muted" className="text-sm">
                        Propietario de vehículo
                      </Typography>
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
            <Typography variant="h2" className="mb-6">
              Nuestra historia
            </Typography>
            <Typography variant="lead" className="mb-10">
              FreeWheels nació de una experiencia frustrante: la búsqueda
              interminable de un taller mecánico confiable. Nuestros fundadores,
              apasionados por la tecnología y los automóviles, decidieron crear
              una solución que transformara esta experiencia para millones de
              conductores.
            </Typography>
            <div className="grid gap-8 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="mb-4 h-24 w-24 overflow-hidden rounded-full bg-muted">
                    <Image
                      src="/placeholder.svg?height=96&width=96"
                      alt={`Fundador ${i}`}
                      width={96}
                      height={96}
                    />
                  </div>
                  <Typography variant="h3" className="mb-1">
                    Fundador {i}
                  </Typography>
                  <Typography variant="muted" className="mb-2">
                    Cargo
                  </Typography>
                  <Typography variant="muted" className="text-center">
                    Breve descripción del fundador y su experiencia en la
                    industria automotriz o tecnológica.
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container px-4 text-center">
          <Typography variant="h2" className="mb-6">
            Únete a la revolución automotriz
          </Typography>
          <Typography variant="lead" className="mx-auto mb-8 max-w-2xl">
            Ya sea que busques servicios para tu vehículo o quieras ofrecer tus
            servicios profesionales, FreeWheels es tu plataforma.
          </Typography>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary">
              Buscar servicios
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Registrar mi negocio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
