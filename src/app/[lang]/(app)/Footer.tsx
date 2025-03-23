import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-background pt-8 text-sm">
      <div className="container mx-auto px-4 pb-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div>
            <h3 className="mb-4 font-semibold">Acerca de FreeWheels</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/nosotros"
                  className="text-gray-600 hover:underline"
                >
                  Cómo funciona FreeWheels
                </Link>
              </li>
              <li>
                <Link
                  href="/newsroom"
                  className="text-gray-600 hover:underline"
                >
                  Sala de prensa
                </Link>
              </li>
              <li>
                <Link
                  href="/inversionistas"
                  className="text-gray-600 hover:underline"
                >
                  Inversionistas
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:underline">
                  Blog de FreeWheels
                </Link>
              </li>
              <li>
                <Link
                  href="/carreras"
                  className="text-gray-600 hover:underline"
                >
                  Carreras
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="mb-4 font-semibold">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/talleres"
                  className="text-gray-600 hover:underline"
                >
                  Talleres mecánicos
                </Link>
              </li>
              <li>
                <Link
                  href="/repuestos"
                  className="text-gray-600 hover:underline"
                >
                  Venta de repuestos
                </Link>
              </li>
              <li>
                <Link
                  href="/lubricentros"
                  className="text-gray-600 hover:underline"
                >
                  Lubricentros
                </Link>
              </li>
              <li>
                <Link href="/gomeria" className="text-gray-600 hover:underline">
                  Gomería
                </Link>
              </li>
              <li>
                <Link
                  href="/lavaderos"
                  className="text-gray-600 hover:underline"
                >
                  Lavaderos
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="mb-4 font-semibold">Soporte</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/ayuda" className="text-gray-600 hover:underline">
                  Centro de ayuda
                </Link>
              </li>
              <li>
                <Link
                  href="/seguridad"
                  className="text-gray-600 hover:underline"
                >
                  Información de seguridad
                </Link>
              </li>
              <li>
                <Link
                  href="/opciones-cancelacion"
                  className="text-gray-600 hover:underline"
                >
                  Opciones de cancelación
                </Link>
              </li>
              <li>
                <Link
                  href="/reportar"
                  className="text-gray-600 hover:underline"
                >
                  Reportar un problema
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:underline">
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Business */}
          <div>
            <h3 className="mb-4 font-semibold">Negocios</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/registrar-taller"
                  className="text-gray-600 hover:underline"
                >
                  Registra tu taller
                </Link>
              </li>
              <li>
                <Link
                  href="/registrar-tienda"
                  className="text-gray-600 hover:underline"
                >
                  Registra tu tienda de repuestos
                </Link>
              </li>
              <li>
                <Link
                  href="/recursos"
                  className="text-gray-600 hover:underline"
                >
                  Recursos para negocios
                </Link>
              </li>
              <li>
                <Link
                  href="/comunidad"
                  className="text-gray-600 hover:underline"
                >
                  Comunidad de profesionales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-200"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Copyright and Links */}
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center">
            <span className="text-gray-600">
              © {currentYear} FreeWheels, Inc.
            </span>
            <span className="hidden md:inline text-gray-400">·</span>
            <Link href="/privacidad" className="text-gray-600 hover:underline">
              Privacidad
            </Link>
            <span className="hidden md:inline text-gray-400">·</span>
            <Link href="/terminos" className="text-gray-600 hover:underline">
              Términos
            </Link>
            <span className="hidden md:inline text-gray-400">·</span>
            <Link href="/mapa-sitio" className="text-gray-600 hover:underline">
              Mapa del sitio
            </Link>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <Link
              href="https://facebook.com"
              className="text-gray-600 hover:text-primary"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://twitter.com"
              className="text-gray-600 hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://instagram.com"
              className="text-gray-600 hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://youtube.com"
              className="text-gray-600 hover:text-primary"
            >
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
