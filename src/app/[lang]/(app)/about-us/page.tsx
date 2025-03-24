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
        {/* Hero Section - Optimizado para palabras clave */}
        <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-r from-background/10 to-background/20 py-20 md:py-32">
          <div className="container relative z-10 px-4 text-center">
            <Typography variant="h1" className="mb-6">
              Transformamos tu experiencia automotriz
            </Typography>
            <Typography variant="lead" className="mb-8 mx-auto max-w-3xl">
              Conectamos conductores con los{" "}
              <strong>mejores talleres mecánicos</strong> y servicios de
              reparación, haciendo que el{" "}
              <strong>mantenimiento de tu vehículo</strong> sea simple,
              transparente y confiable.
            </Typography>
            <Button size="lg">
              Explorar talleres cercanos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="absolute inset-0 z-0 opacity-10">
            <Image
              src="/mechanic-working.jpg"
              alt="Mecánico trabajando en un taller asociado a FreeWheels"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Mission Section - Contenido semántico */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <Typography variant="h2" className="mb-6">
                Nuestra misión: Revolucionar el cuidado automotriz
              </Typography>
              <Typography variant="lead" className="mb-10">
                En FreeWheels, nos dedicamos a simplificar el proceso de
                encontrar y contratar{" "}
                <strong>servicios mecánicos de calidad</strong>. Nuestra
                plataforma verifica cada taller y profesional para garantizar la
                mejor experiencia.
              </Typography>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Car className="h-8 w-8" />
                  </div>
                  <Typography variant="h3" className="mb-2">
                    Accesibilidad total
                  </Typography>
                  <Typography variant="muted" className="text-center">
                    Encuentra talleres mecánicos cerca de tu ubicación con solo
                    unos clics, sin importar tu conocimiento técnico.
                  </Typography>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <Typography variant="h3" className="mb-2">
                    Confianza garantizada
                  </Typography>
                  <Typography variant="muted" className="text-center">
                    Reseñas verificadas y profesionales calificados para que
                    tengas paz mental al dejar tu vehículo.
                  </Typography>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Users className="h-8 w-8" />
                  </div>
                  <Typography variant="h3" className="mb-2">
                    Comunidad activa
                  </Typography>
                  <Typography variant="muted" className="text-center">
                    Más de 50,000 usuarios y 10,000 talleres forman parte de
                    nuestra red de servicios automotrices.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Pasos claros con microformatos */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container px-4">
            <Typography variant="h2" className="mb-12 text-center">
              Cómo encontrar el mejor taller mecánico con FreeWheels
            </Typography>
            <div className="grid gap-8 md:grid-cols-3">
              <div
                className="relative"
                itemScope
                itemType="https://schema.org/HowToStep"
              >
                <meta itemProp="position" content="1" />
                <div className="absolute -left-4 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-0">
                  1
                </div>
                <Card className="h-full border-0 shadow-lg">
                  <CardContent className="p-6">
                    <Typography variant="h3" className="mb-3" itemProp="name">
                      Busca servicios
                    </Typography>
                    <Typography variant="muted" itemProp="text">
                      Explora talleres mecánicos certificados, tiendas de
                      repuestos originales y servicios de reparación vehicular
                      cerca de tu ubicación.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              <div
                className="relative"
                itemScope
                itemType="https://schema.org/HowToStep"
              >
                <meta itemProp="position" content="2" />
                <div className="absolute -left-4 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-0">
                  2
                </div>
                <Card className="h-full border-0 shadow-lg">
                  <CardContent className="p-6">
                    <Typography variant="h3" className="mb-3" itemProp="name">
                      Compara opciones
                    </Typography>
                    <Typography variant="muted" itemProp="text">
                      Revisa perfiles detallados con fotos, precios
                      transparentes, especialidades y reseñas verificadas de
                      otros conductores.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
              <div
                className="relative"
                itemScope
                itemType="https://schema.org/HowToStep"
              >
                <meta itemProp="position" content="3" />
                <div className="absolute -left-4 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground md:left-0">
                  3
                </div>
                <Card className="h-full border-0 shadow-lg">
                  <CardContent className="p-6">
                    <Typography variant="h3" className="mb-3" itemProp="name">
                      Reserva con confianza
                    </Typography>
                    <Typography variant="muted" itemProp="text">
                      Agenda citas para mantenimiento preventivo o reparaciones
                      directamente con los mejores talleres asociados.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Datos verificables */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <Typography variant="h2" className="mb-12 text-center">
                FreeWheels en números: Impacto real
              </Typography>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="text-center">
                  <Typography variant="h1" className="mb-2 text-primary">
                    10,000+
                  </Typography>
                  <Typography variant="lead">Talleres certificados</Typography>
                </div>
                <div className="text-center">
                  <Typography variant="h1" className="mb-2 text-primary">
                    50,000+
                  </Typography>
                  <Typography variant="lead">
                    Conductores satisfechos
                  </Typography>
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

        {/* Testimonials - Opiniones reales */}
        <section className="bg-gradient-to-r from-background/10 to-background/20 py-16 md:py-24">
          <div className="container px-4">
            <Typography variant="h2" className="mb-12 text-center">
              Opiniones de nuestra comunidad
            </Typography>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="h-full border-0 shadow-lg"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <CardContent className="flex h-full flex-col p-6">
                    <div
                      className="mb-4 flex"
                      itemProp="reviewRating"
                      itemScope
                      itemType="https://schema.org/Rating"
                    >
                      <meta itemProp="ratingValue" content="5" />
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Award key={star} className="h-5 w-5 text-yellow-400" />
                      ))}
                    </div>
                    <Typography
                      variant="muted"
                      className="mb-6 flex-1"
                      itemProp="reviewBody"
                    >
                      {testimonial.quote}
                    </Typography>
                    <div className="flex items-center">
                      <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-muted">
                        <Image
                          src={`/avatar-${testimonial.id}.jpg`}
                          alt={`Foto de ${testimonial.name}`}
                          width={48}
                          height={48}
                        />
                      </div>
                      <div>
                        <Typography variant="h4" itemProp="author">
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="muted"
                          className="text-sm"
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

        {/* Team/Founding Story - Autoridad y confianza */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <Typography variant="h2" className="mb-6">
                Nuestra historia: Pasión por los autos y la tecnología
              </Typography>
              <Typography variant="lead" className="mb-10">
                FreeWheels nació de la necesidad de crear un estándar de calidad
                en los servicios automotrices, combinando nuestra experiencia en
                la industria con innovación tecnológica.
              </Typography>
              <div className="grid gap-8 md:grid-cols-3">
                {founders.map((founder) => (
                  <div
                    key={founder.id}
                    className="flex flex-col items-center"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <div className="mb-4 h-24 w-24 overflow-hidden rounded-full bg-muted">
                      <Image
                        src={`/founder-${founder.id}.jpg`}
                        alt={`Foto de ${founder.name}, ${founder.role} de FreeWheels`}
                        width={96}
                        height={96}
                      />
                    </div>
                    <Typography variant="h3" className="mb-1" itemProp="name">
                      {founder.name}
                    </Typography>
                    <Typography
                      variant="muted"
                      className="mb-2"
                      itemProp="jobTitle"
                    >
                      {founder.role}
                    </Typography>
                    <Typography
                      variant="muted"
                      className="text-center"
                      itemProp="description"
                    >
                      {founder.bio}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Optimizado para conversión */}
        <section className="bg-primary py-16 text-primary-foreground md:py-24">
          <div className="container px-4 text-center">
            <Typography variant="h2" className="mb-6">
              ¿Listo para una mejor experiencia automotriz?
            </Typography>
            <Typography variant="lead" className="mx-auto mb-8 max-w-2xl">
              Únete a miles de conductores que ya confían en FreeWheels para el
              cuidado de sus vehículos.
            </Typography>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary">
                Buscar talleres cercanos
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
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
