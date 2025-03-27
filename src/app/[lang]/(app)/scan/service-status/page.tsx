"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import {
  Wrench,
  Clock,
  CheckCircle2,
  AlertCircle,
  Calendar,
  MapPin,
  PenToolIcon as Tool,
  Car,
  Phone,
  MessageSquare,
  FileDown,
  ChevronLeft,
  Share2,
  Printer,
  Moon,
  Sun
} from "lucide-react";
import { Button } from "@/presentation/ds/button";
import Link from "next/link";

// Mock data generator
const generateMockData = (licensePlate: string) => {
  const isABC123 = licensePlate === "ABC123";

  return {
    vehicle: {
      make: isABC123 ? "Toyota" : "Ford",
      model: isABC123 ? "Corolla" : "Fiesta",
      year: isABC123 ? "2019" : "2020",
      licensePlate,
      vin: isABC123 ? "H4GCMB2833A1E8A56" : "1HGCM82633A123456",
      lastService: isABC123 ? "15/02/2023" : "20/03/2023",
      image: "/placeholder.svg?height=200&width=350"
    },
    service: {
      id: isABC123 ? "SRV-2023-0458" : "SRV-2023-0459",
      status: isABC123 ? "en progreso" : "completado",
      startDate: isABC123 ? "22/03/2023" : "15/03/2023",
      estimatedCompletion: isABC123 ? "24/03/2023" : "18/03/2023",
      progress: isABC123 ? 65 : 100,
      provider: {
        name: isABC123 ? "Taller Mecánico Express" : "AutoServicio Premium",
        rating: isABC123 ? 4.8 : 4.9,
        address: isABC123
          ? "Av. Libertador 1234, Buenos Aires"
          : "Calle Principal 567, Córdoba",
        phone: isABC123 ? "+54 11 5555-1234" : "+54 351 5555-6789",
        image: "/placeholder.svg?height=50&width=50"
      },
      technician: {
        name: isABC123 ? "Carlos Rodríguez" : "María Gómez",
        speciality: isABC123
          ? "Mecánico Senior"
          : "Especialista en Electrónica",
        image: "/placeholder.svg?height=50&width=50"
      }
    },
    steps: isABC123
      ? [
          {
            id: 1,
            name: "Recepción del vehículo",
            status: "completed",
            date: "22/03/2023 08:16"
          },
          {
            id: 2,
            name: "Diagnóstico inicial",
            status: "completed",
            date: "22/03/2023 10:30"
          },
          {
            id: 3,
            name: "Reparación en curso",
            status: "in-progress",
            date: "22/03/2023 14:45"
          },
          { id: 4, name: "Control de calidad", status: "pending", date: "" },
          { id: 5, name: "Entrega del vehículo", status: "pending", date: "" }
        ]
      : [
          {
            id: 1,
            name: "Recepción del vehículo",
            status: "completed",
            date: "15/03/2023 09:00"
          },
          {
            id: 2,
            name: "Diagnóstico inicial",
            status: "completed",
            date: "15/03/2023 10:15"
          },
          {
            id: 3,
            name: "Reparación",
            status: "completed",
            date: "15/03/2023 16:30"
          },
          {
            id: 4,
            name: "Control de calidad",
            status: "completed",
            date: "16/03/2023 10:00"
          },
          {
            id: 5,
            name: "Entrega del vehículo",
            status: "completed",
            date: "16/03/2023 12:30"
          }
        ],
    diagnostics: isABC123
      ? [
          {
            id: 1,
            system: "Sistema de frenos",
            status: "warning",
            description:
              "Pastillas de freno delanteras con desgaste al 70%. Se recomienda reemplazo."
          },
          {
            id: 2,
            system: "Sistema eléctrico",
            status: "ok",
            description: "Funcionamiento normal. Batería en buen estado."
          }
        ]
      : [
          {
            id: 1,
            system: "Motor",
            status: "ok",
            description: "Rendimiento óptimo después de la reparación."
          }
        ]
  };
};

export default function ServiceStatusPage() {
  const searchParams = useSearchParams();
  const licensePlate = searchParams.get("plate") || "";
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPrinting, setIsPrinting] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check for user preference on component mount
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    }
  };

  useEffect(() => {
    if (!licensePlate) return;

    setIsLoading(true);
    // Simular carga de datos
    setTimeout(() => {
      setData(generateMockData(licensePlate));
      setIsLoading(false);
    }, 800);
  }, [licensePlate]);

  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 300);
  };

  if (!licensePlate) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm max-w-md border border-gray-200 dark:border-gray-700">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2 dark:text-white">
            No se proporcionó patente
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            No se ha especificado ninguna patente o número de seguimiento para
            consultar.
          </p>
          <Link href="/scan">
            <Button>Realizar una consulta</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center p-8">
          <Clock className="h-12 w-12 text-primary animate-spin mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2 dark:text-white">
            Cargando información
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Obteniendo datos del servicio...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 h-16 flex items-center">
        <div className="container px-4 mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Wrench className="h-8 w-8 text-primary" />
            <span className="text-primary font-medium text-xl">FreeWheels</span>
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <Link href="/scan">
              <Button
                variant="outline"
                size="sm"
                className="gap-1 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <ChevronLeft className="h-4 w-4" />
                Nueva consulta
              </Button>
            </Link>
            <Button
              variant="outline"
              size="sm"
              className="gap-1 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              onClick={handlePrint}
              disabled={isPrinting}
            >
              {isPrinting ? (
                <>
                  <Clock className="h-4 w-4 animate-spin" />
                  Generando...
                </>
              ) : (
                <>
                  <FileDown className="h-4 w-4" />
                  Descargar PDF
                </>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div ref={contentRef} className="print:p-0">
        <main className="container mx-auto px-4 py-8">
          {/* Encabezado con estado */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Car className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold dark:text-white">
                    {data.vehicle.make} {data.vehicle.model} (
                    {data.vehicle.year})
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-sm font-medium dark:text-gray-300">
                    {data.vehicle.licensePlate}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Servicio #{data.service.id}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    data.service.status === "en progreso"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                      : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                  }`}
                >
                  {data.service.status === "en progreso"
                    ? "En progreso"
                    : "Completado"}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Actualizado:{" "}
                  {data.service.status === "en progreso"
                    ? "Hace 2 horas"
                    : "16/03/2023"}
                </div>
              </div>
            </div>
          </div>

          {/* Barra de progreso principal */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold dark:text-white">
                Progreso general
              </h3>
              <p className="text-lg font-bold dark:text-white">
                {data.service.progress}%
              </p>
            </div>
            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3 mb-4">
              <div
                className={`h-3 rounded-full ${
                  data.service.status === "en progreso"
                    ? "bg-primary"
                    : "bg-green-500"
                }`}
                style={{ width: `${data.service.progress}%` }}
              ></div>
            </div>
            <div className="flex flex-wrap justify-between text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Inicio: {data.service.startDate}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {data.service.status === "en progreso"
                  ? `Finalización estimada: ${data.service.estimatedCompletion}`
                  : `Finalizado: ${data.service.estimatedCompletion}`}
              </div>
            </div>
          </div>

          {/* Grid principal */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Tarjeta de información del vehículo */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <Car className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold dark:text-white">
                  Información del Vehículo
                </h3>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 relative h-48 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                  <img
                    src={data.vehicle.image || "/placeholder.svg"}
                    alt={`${data.vehicle.make} ${data.vehicle.model}`}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="md:w-2/3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: "Marca", value: data.vehicle.make },
                      { label: "Modelo", value: data.vehicle.model },
                      { label: "Año", value: data.vehicle.year },
                      { label: "Patente", value: data.vehicle.licensePlate },
                      { label: "VIN", value: data.vehicle.vin },
                      {
                        label: "Último servicio",
                        value: data.vehicle.lastService
                      }
                    ].map((item, index) => (
                      <div key={index} className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.label}
                        </p>
                        <p className="font-medium dark:text-white">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta del proveedor */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold dark:text-white">
                  Proveedor de Servicio
                </h3>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img
                    src={data.service.provider.image || "/placeholder.svg"}
                    alt={data.service.provider.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium dark:text-white">
                    {data.service.provider.name}
                  </p>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${
                            i < Math.floor(data.service.provider.rating)
                              ? "text-yellow-400"
                              : "text-gray-300 dark:text-gray-600"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {data.service.provider.rating}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {data.service.provider.address}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {data.service.provider.phone}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Técnico asignado
                </p>
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-600 overflow-hidden">
                    <img
                      src={data.service.technician.image || "/placeholder.svg"}
                      alt={data.service.technician.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium dark:text-white">
                      {data.service.technician.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {data.service.technician.speciality}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button
                  variant="outline"
                  className="flex-1 gap-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  <Phone className="h-4 w-4" />
                  Llamar
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 gap-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  <MessageSquare className="h-4 w-4" />
                  Mensaje
                </Button>
              </div>
            </div>
          </div>

          {/* Progreso del servicio */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold dark:text-white">
                Etapas del Servicio
              </h3>
            </div>

            <div className="space-y-6">
              {data.steps.map((step: any, index: number) => (
                <div key={step.id} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`h-8 w-8 rounded-full flex items-center justify-center ${
                        step.status === "completed"
                          ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                          : step.status === "in-progress"
                          ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                          : "bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500"
                      }`}
                    >
                      {step.status === "completed" ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : step.status === "in-progress" ? (
                        <Tool className="h-4 w-4" />
                      ) : (
                        <Clock className="h-4 w-4" />
                      )}
                    </div>
                    {index < data.steps.length - 1 && (
                      <div
                        className={`h-12 w-0.5 my-1 ${
                          step.status === "completed"
                            ? "bg-green-100 dark:bg-green-900/30"
                            : "bg-gray-100 dark:bg-gray-700"
                        }`}
                      ></div>
                    )}
                  </div>

                  <div className="flex-1 pb-6">
                    <div className="flex justify-between flex-wrap gap-2">
                      <p className="font-medium dark:text-white">{step.name}</p>
                      {step.date && (
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {step.date}
                        </p>
                      )}
                    </div>
                    {step.status === "in-progress" && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Este paso está actualmente en progreso
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resultados del diagnóstico */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold dark:text-white">
                Resultados del Diagnóstico
              </h3>
            </div>

            <div className="space-y-4">
              {data.diagnostics.map((item: any) => (
                <div
                  key={item.id}
                  className={`p-4 rounded-lg border ${
                    item.status === "ok"
                      ? "border-green-100 bg-green-50 dark:border-green-900/30 dark:bg-green-900/10"
                      : "border-yellow-100 bg-yellow-50 dark:border-yellow-900/30 dark:bg-yellow-900/10"
                  }`}
                >
                  <div className="flex gap-3">
                    <div className="mt-0.5">
                      {item.status === "ok" ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500 dark:text-green-400" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium mb-1 dark:text-white">
                        {item.system}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Acciones adicionales */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <Share2 className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold dark:text-white">
                Acciones
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="gap-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                onClick={handlePrint}
                disabled={isPrinting}
              >
                {isPrinting ? (
                  <>
                    <Clock className="h-4 w-4 animate-spin" />
                    Generando...
                  </>
                ) : (
                  <>
                    <FileDown className="h-4 w-4" />
                    Descargar PDF
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                className="gap-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <Printer className="h-4 w-4" />
                Imprimir
              </Button>
              <Button
                variant="outline"
                className="gap-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <Share2 className="h-4 w-4" />
                Compartir
              </Button>
            </div>
          </div>
        </main>
      </div>

      {/* Estilos para impresión */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .container {
            max-width: 100% !important;
            padding: 0 !important;
          }
          [ref="contentRef"],
          [ref="contentRef"] * {
            visibility: visible;
          }
          [ref="contentRef"] {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          @page {
            size: A4;
            margin: 10mm;
          }
        }
      `}</style>
    </div>
  );
}
