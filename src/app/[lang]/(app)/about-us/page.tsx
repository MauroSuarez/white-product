import Image from "next/image";
import { Users, ShieldCheck, Award, ArrowRight, Wrench } from "lucide-react";
import { Button } from "@/presentation/ds/button";
import { Card, CardContent } from "@/presentation/ds/card";
import { Typography } from "@/presentation/ds/typography";
import Link from "next/link";
export const metadata = {
  title: "FreeWheels | Conectamos tu movilidad con servicios confiables",
  description:
    "Plataforma que une a usuarios con proveedores de servicios esenciales para la movilidad personal. Encuentra, compara y contrata servicios certificados con total transparencia.",
  keywords: [
    "servicios de movilidad",
    "proveedores movilidad",
    "conectar con servicios",
    "soluciones movilidad",
    "FreeWheels",
    "servicios certificados",
    "movilidad personal"
  ],
  alternates: {
    canonical: "https://tudominio.com/es/acerca-de"
  },
  openGraph: {
    title: "FreeWheels | Conectamos tu movilidad con servicios confiables",
    description:
      "Plataforma que une a usuarios con proveedores de servicios esenciales para la movilidad personal",
    url: "https://tudominio.com/es/acerca-de",
    siteName: "FreeWheels",
    images: [
      {
        url: "https://tudominio.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FreeWheels - Conexión inteligente para tu movilidad"
      }
    ],
    locale: "es_ES",
    type: "website"
  }
};

export default function AboutUs() {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Méndez",
      role: "Usuario frecuente",
      quote:
        "FreeWheels simplificó mi acceso a servicios de calidad para mi movilidad diaria. Ahora encuentro proveedores confiables en minutos."
    },
    {
      id: 2,
      name: "Laura Fernández",
      role: "Proveedora de servicios",
      quote:
        "La plataforma me ha permitido conectar con clientes que realmente valoran mi trabajo y profesionalismo."
    }
  ];

  const founders = [
    {
      id: 1,
      name: "Alejandro Martínez",
      role: "CEO & Co-Fundador",
      bio: "Apasionado por crear soluciones que mejoren la movilidad urbana."
    },
    {
      id: 2,
      name: "Sofía Ramírez",
      role: "CTO & Co-Fundadora",
      bio: "Especialista en tecnología para servicios colaborativos."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "FreeWheels",
            description:
              "Plataforma de conexión para servicios de movilidad personal",
            url: "https://tudominio.com"
          })
        }}
      />

      <div className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b  z-50 py-2 shadow-sm">
          <div className="container mx-auto flex justify-center md:justify-start">
            <Link href={"/"}>
              <button className="flex items-center gap-2 px-4 py-2 rounded-md ">
                <Wrench className="h-6 w-6 text-primary" />
                <Typography className="text-primary whitespace-nowrap">
                  FreeWheels
                </Typography>
              </button>
            </Link>
          </div>
        </header>
        <section className="relative py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 space-y-4">
                <Typography
                  variant="h1"
                  className="text-3xl md:text-4xl font-bold"
                >
                  Conectamos tu movilidad con los mejores servicios
                </Typography>
                <Typography variant="lead" className="text-muted-foreground">
                  Nuestra plataforma facilita el encuentro entre usuarios y
                  proveedores de servicios esenciales para la movilidad
                  personal.
                </Typography>
                <Button size="lg" className="mt-2">
                  Descubre proveedores
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="md:w-1/2 relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=320&width=480"
                  alt="Plataforma de conexión para servicios de movilidad"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <Typography
              variant="h2"
              className="text-2xl md:text-3xl font-bold text-center mb-12"
            >
              Nuestra propuesta de valor
            </Typography>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <Typography variant="h3" className="text-xl font-medium mb-2">
                    Conexiones inteligentes
                  </Typography>
                  <Typography variant="muted">
                    Sistema que empareja usuarios con proveedores según sus
                    necesidades específicas
                  </Typography>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <ShieldCheck className="h-8 w-8 text-primary mb-4" />
                  <Typography variant="h3" className="text-xl font-medium mb-2">
                    Calidad certificada
                  </Typography>
                  <Typography variant="muted">
                    Todos los proveedores pasan por nuestro riguroso proceso de
                    verificación
                  </Typography>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Award className="h-8 w-8 text-primary mb-4" />
                  <Typography variant="h3" className="text-xl font-medium mb-2">
                    Experiencia optimizada
                  </Typography>
                  <Typography variant="muted">
                    Proceso simplificado desde la búsqueda hasta la contratación
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <Typography
              variant="h2"
              className="text-2xl md:text-3xl font-bold text-center mb-8"
            >
              Cómo funciona nuestra plataforma
            </Typography>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                  1
                </div>
                <Typography variant="h3" className="text-xl font-medium mb-2">
                  Describe tu necesidad
                </Typography>
                <Typography variant="muted">
                  Indica qué servicio requieres para tu movilidad
                </Typography>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                  2
                </div>
                <Typography variant="h3" className="text-xl font-medium mb-2">
                  Compara opciones
                </Typography>
                <Typography variant="muted">
                  Revisa perfiles, valoraciones y precios
                </Typography>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                  3
                </div>
                <Typography variant="h3" className="text-xl font-medium mb-2">
                  Contrata con confianza
                </Typography>
                <Typography variant="muted">
                  Conecta directamente con el proveedor ideal
                </Typography>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <Typography
              variant="h2"
              className="text-2xl md:text-3xl font-bold text-center mb-12"
            >
              Lo que dicen nuestros usuarios
            </Typography>

            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <Typography variant="muted" className="mb-4 text-sm">
                      "{testimonial.quote}"
                    </Typography>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                      <div>
                        <Typography
                          variant="h4"
                          className="text-sm font-medium"
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography variant="muted" className="text-xs">
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

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <Typography
              variant="h2"
              className="text-2xl md:text-3xl font-bold mb-4 text-white"
            >
              ¿Listo para optimizar tu movilidad?
            </Typography>
            <Typography
              variant="muted"
              className="mb-8 max-w-2xl mx-auto text-white/80"
            >
              Únete a nuestra comunidad y descubre una nueva forma de acceder a
              servicios de calidad.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Buscar servicios
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Ofrecer servicios
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
