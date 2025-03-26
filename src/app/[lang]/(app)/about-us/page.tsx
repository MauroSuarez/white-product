import Image from "next/image";
import { Car, Users, ShieldCheck, Award, ArrowRight } from "lucide-react";
import { Button } from "@/presentation/ds/button";
import { Card, CardContent } from "@/presentation/ds/card";
import { Typography } from "@/presentation/ds/typography";

export const metadata = {
  title: "FreeWheels | Plataforma líder de servicios automotrices",
  description:
    "Conectamos conductores con los mejores talleres mecánicos y servicios de reparación vehicular. Encuentra profesionales calificados, compara precios y agenda citas fácilmente.",
  keywords: [
    "talleres mecánicos cerca de mí",
    "reparación de autos",
    "servicios automotrices confiables",
    "mantenimiento de vehículos",
    "agendar cita taller mecánico",
    "FreeWheels",
    "mejores mecánicos",
    "reparación vehicular"
  ],
  alternates: {
    canonical: "https://tudominio.com/es/acerca-de"
  },
  openGraph: {
    title: "FreeWheels | Plataforma líder de servicios automotrices",
    description:
      "Conectamos conductores con los mejores talleres mecánicos y servicios de reparación vehicular.",
    url: "https://tudominio.com/es/acerca-de",
    siteName: "FreeWheels",
    images: [
      {
        url: "https://tudominio.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FreeWheels - Servicios automotrices de confianza"
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "FreeWheels | Plataforma líder de servicios automotrices",
    description:
      "Conectamos conductores con los mejores talleres mecánicos y servicios de reparación vehicular.",
    images: ["https://tudominio.com/images/twitter-card.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function AboutUs() {
  const testimonials = [
    {
      id: 1,
      name: "Juan Pérez",
      role: "Propietario de Toyota Corolla",
      quote:
        "FreeWheels ha transformado la forma en que mantengo mi vehículo. Encontré un taller confiable con excelentes reseñas cerca de mi casa."
    },
    {
      id: 2,
      name: "María González",
      role: "Dueña de taller mecánico",
      quote:
        "Desde que me registré en FreeWheels, mi taller ha duplicado los clientes. La plataforma es fácil de usar y muy efectiva."
    },
    {
      id: 3,
      name: "Carlos Rodríguez",
      role: "Propietario de flota vehicular",
      quote:
        "La mejor solución para el mantenimiento de mis vehículos de trabajo. Ahorro tiempo y dinero con FreeWheels."
    }
  ];

  const founders = [
    {
      id: 1,
      name: "Alejandro Martínez",
      role: "CEO & Co-Fundador",
      bio: "Experto en tecnología con más de 10 años en desarrollo de plataformas digitales."
    },
    {
      id: 2,
      name: "Sofía Ramírez",
      role: "CTO & Co-Fundadora",
      bio: "Ingeniera mecánica especializada en sistemas automotrices modernos."
    },
    {
      id: 3,
      name: "Diego Fernández",
      role: "CMO & Co-Fundador",
      bio: "Especialista en marketing digital y experiencia del usuario."
    }
  ];

  return (
    <>
      {/* Schema.org markup para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "FreeWheels",
            url: "https://tudominio.com",
            logo: "https://tudominio.com/logo.png",
            description:
              "Plataforma líder que conecta conductores con servicios automotrices de calidad",
            founders: founders.map((founder) => ({
              "@type": "Person",
              name: founder.name,
              jobTitle: founder.role
            })),
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ciudad",
              addressRegion: "Región",
              postalCode: "Código Postal",
              addressCountry: "País"
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: "contacto@tudominio.com",
              telephone: "+1234567890"
            }
          })
        }}
      />

      <div className="flex min-h-screen flex-col">
        {/* Hero Section - Simplificado */}
        <section className="relative py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 space-y-4">
                <Typography
                  variant="h1"
                  className="text-3xl md:text-4xl font-bold"
                >
                  Transformamos tu experiencia automotriz
                </Typography>
                <Typography variant="lead" className="text-muted-foreground">
                  Conectamos conductores con los mejores talleres mecánicos y
                  servicios de reparación, haciendo que el mantenimiento de tu
                  vehículo sea simple y confiable.
                </Typography>
                <Button size="lg" className="mt-2">
                  Explorar talleres cercanos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="md:w-1/2 relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=320&width=480"
                  alt="Mecánico trabajando en un taller asociado a FreeWheels"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Valores - Simplificado */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <Typography
              variant="h2"
              className="text-2xl md:text-3xl font-bold text-center mb-12"
            >
              Nuestra misión: Revolucionar el cuidado automotriz
            </Typography>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Car className="h-8 w-8 text-primary mb-4" />
                  <Typography variant="h3" className="text-xl font-medium mb-2">
                    Accesibilidad total
                  </Typography>
                  <Typography variant="muted">
                    Encuentra talleres mecánicos cerca de tu ubicación con solo
                    unos clics.
                  </Typography>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <ShieldCheck className="h-8 w-8 text-primary mb-4" />
                  <Typography variant="h3" className="text-xl font-medium mb-2">
                    Confianza garantizada
                  </Typography>
                  <Typography variant="muted">
                    Reseñas verificadas y profesionales calificados para tu
                    tranquilidad.
                  </Typography>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <Typography variant="h3" className="text-xl font-medium mb-2">
                    Comunidad activa
                  </Typography>
                  <Typography variant="muted">
                    Más de 50,000 usuarios y 10,000 talleres en nuestra red.
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cómo funciona - Simplificado */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <Typography
              variant="h2"
              className="text-2xl md:text-3xl font-bold text-center mb-8"
            >
              Cómo funciona FreeWheels
            </Typography>
            <Typography
              variant="muted"
              className="text-center max-w-2xl mx-auto mb-12"
            >
              Encuentra el mejor taller mecánico en tres simples pasos
            </Typography>

            <div className="grid md:grid-cols-3 gap-6">
              <div
                className="flex flex-col items-center text-center"
                itemScope
                itemType="https://schema.org/HowToStep"
              >
                <meta itemProp="position" content="1" />
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                  1
                </div>
                <Typography
                  variant="h3"
                  className="text-xl font-medium mb-2"
                  itemProp="name"
                >
                  Busca servicios
                </Typography>
                <Typography variant="muted" itemProp="text">
                  Explora talleres certificados y servicios de reparación cerca
                  de ti.
                </Typography>
              </div>

              <div
                className="flex flex-col items-center text-center"
                itemScope
                itemType="https://schema.org/HowToStep"
              >
                <meta itemProp="position" content="2" />
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                  2
                </div>
                <Typography
                  variant="h3"
                  className="text-xl font-medium mb-2"
                  itemProp="name"
                >
                  Compara opciones
                </Typography>
                <Typography variant="muted" itemProp="text">
                  Revisa perfiles con fotos, precios y reseñas verificadas.
                </Typography>
              </div>

              <div
                className="flex flex-col items-center text-center"
                itemScope
                itemType="https://schema.org/HowToStep"
              >
                <meta itemProp="position" content="3" />
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                  3
                </div>
                <Typography
                  variant="h3"
                  className="text-xl font-medium mb-2"
                  itemProp="name"
                >
                  Reserva con confianza
                </Typography>
                <Typography variant="muted" itemProp="text">
                  Agenda citas directamente con los mejores talleres asociados.
                </Typography>
              </div>
            </div>
          </div>
        </section>

        {/* Estadísticas - Simplificado */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Typography
                  variant="h1"
                  className="text-3xl md:text-4xl font-bold text-primary"
                >
                  10,000+
                </Typography>
                <Typography variant="muted">Talleres certificados</Typography>
              </div>
              <div className="text-center">
                <Typography
                  variant="h1"
                  className="text-3xl md:text-4xl font-bold text-primary"
                >
                  50,000+
                </Typography>
                <Typography variant="muted">Conductores satisfechos</Typography>
              </div>
              <div className="text-center">
                <Typography
                  variant="h1"
                  className="text-3xl md:text-4xl font-bold text-primary"
                >
                  100,000+
                </Typography>
                <Typography variant="muted">Servicios completados</Typography>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios - Simplificado */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <Typography
              variant="h2"
              className="text-2xl md:text-3xl font-bold text-center mb-12"
            >
              Lo que dice nuestra comunidad
            </Typography>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="border-0 shadow-sm"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <CardContent className="p-6">
                    <div
                      className="flex mb-4"
                      itemProp="reviewRating"
                      itemScope
                      itemType="https://schema.org/Rating"
                    >
                      <meta itemProp="ratingValue" content="5" />
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Award key={star} className="h-4 w-4 text-yellow-400" />
                      ))}
                    </div>
                    <Typography
                      variant="muted"
                      className="mb-4 text-sm"
                      itemProp="reviewBody"
                    >
                      "{testimonial.quote}"
                    </Typography>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                      <div>
                        <Typography
                          variant="h4"
                          className="text-sm font-medium"
                          itemProp="author"
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="muted"
                          className="text-xs"
                          itemProp="description"
                        >
                          {testimonial.role}
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Equipo - Simplificado */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <Typography
              variant="h2"
              className="text-2xl md:text-3xl font-bold text-center mb-6"
            >
              Nuestro equipo fundador
            </Typography>
            <Typography
              variant="muted"
              className="text-center max-w-2xl mx-auto mb-12"
            >
              FreeWheels nació de la necesidad de crear un estándar de calidad
              en los servicios automotrices
            </Typography>

            <div className="grid md:grid-cols-3 gap-8">
              {founders.map((founder) => (
                <div
                  key={founder.id}
                  className="text-center"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4"></div>
                  <Typography
                    variant="h3"
                    className="text-lg font-medium mb-1"
                    itemProp="name"
                  >
                    {founder.name}
                  </Typography>
                  <Typography
                    variant="muted"
                    className="text-sm mb-2"
                    itemProp="jobTitle"
                  >
                    {founder.role}
                  </Typography>
                  <Typography
                    variant="muted"
                    className="text-sm"
                    itemProp="description"
                  >
                    {founder.bio}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Simplificado */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <Typography
              variant="h2"
              className="text-2xl md:text-3xl font-bold mb-4 text-white"
            >
              ¿Listo para una mejor experiencia automotriz?
            </Typography>
            <Typography
              variant="muted"
              className="mb-8 max-w-2xl mx-auto text-white/80"
            >
              Únete a miles de conductores que ya confían en FreeWheels para el
              cuidado de sus vehículos.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Buscar talleres cercanos
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Registrar mi taller
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
