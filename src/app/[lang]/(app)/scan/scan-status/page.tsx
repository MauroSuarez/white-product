"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Car,
  CheckCircle2,
  AlertCircle,
  Wrench,
  FileText,
  Clock,
  ChevronLeft,
  ShieldAlert,
  Fuel,
  Moon,
  Sun,
  Download,
  User,
  FileSearch,
  BadgeCheck,
  Calendar,
  Gauge,
  Share2,
  Printer
} from "lucide-react";
import { Button } from "@/presentation/ds/button";
import { Typography } from "@/presentation/ds/typography";
import { FadeIn } from "@/presentation/components/fade-in";
import Link from "next/link";

// Mock data (asegúrate de que esté correctamente definido)
const mockVehicleData = {
  ABC123: {
    vehicle: {
      make: "Toyota",
      model: "Corolla",
      year: "2019",
      licensePlate: "ABC 123",
      vin: "H4GCMB2833A1E8A56",
      fuelType: "Nafta",
      color: "Blanco",
      image: "/placeholder-car.jpg"
    },
    owner: {
      name: "Juan Pérez",
      id: "DNI 30.123.456"
    },
    services: [
      {
        date: "15/02/2023",
        type: "Mantenimiento completo",
        workshop: "Taller Mecánico Express",
        km: 45000,
        nextServiceKm: 55000,
        details: [
          "Cambio de aceite y filtro",
          "Rotación de neumáticos",
          "Revisión de frenos"
        ]
      }
    ],
    fines: [
      {
        date: "10/01/2023",
        description: "Exceso de velocidad",
        amount: "$12,500",
        status: "Pagada"
      }
    ],
    status: {
      overall: "Buen estado",
      mechanical: "Bueno",
      documents: "Al día",
      fines: "1 multa pagada"
    }
  }
};

export default function ScanStatusPage() {
  const searchParams = useSearchParams();
  const licensePlate = searchParams.get("plate")?.toUpperCase() || "";
  const [activeTab, setActiveTab] = useState("services");
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPrinting, setIsPrinting] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Detectar preferencia de tema
  useEffect(() => {
    const themePreference =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", themePreference);
    setTheme(themePreference ? "dark" : "light");
  }, []);

  // Cargar datos del vehículo
  useEffect(() => {
    if (!licensePlate) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const timer = setTimeout(() => {
      setData(
        mockVehicleData[licensePlate as keyof typeof mockVehicleData] || null
      );
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [licensePlate]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.theme = newTheme;
    setTheme(newTheme);
  };

  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 300);
  };

  // Estados de carga y error
  if (!licensePlate) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
        <div className="text-center bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 max-w-md border border-gray-200 dark:border-gray-700">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <Typography variant="h3" className="mb-3">
            No se proporcionó patente
          </Typography>
          <Typography variant="p" className="text-muted-foreground mb-6">
            Por favor, ingresa una patente válida para continuar.
          </Typography>
          <Link href="/scan">
            <Button className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Volver a verificación
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
        <div className="text-center">
          <Clock className="h-12 w-12 text-primary animate-spin mx-auto mb-4" />
          <Typography variant="h3" className="mb-2">
            Cargando información
          </Typography>
          <Typography variant="p" className="text-muted-foreground">
            Verificando {licensePlate}...
          </Typography>
          <div className="w-48 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-4 mx-auto">
            <div
              className="h-full bg-primary animate-pulse"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
        <div className="text-center bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 max-w-md border border-gray-200 dark:border-gray-700">
          <AlertCircle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
          <Typography variant="h3" className="mb-3">
            No se encontraron datos
          </Typography>
          <Typography variant="p" className="text-muted-foreground mb-6">
            No hay información disponible para la patente {licensePlate}
          </Typography>
          <Link href="/scan">
            <Button variant="outline" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Intentar con otra patente
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
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
                  <Download className="h-4 w-4" />
                  Exportar
                </>
              )}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Encabezado con estado */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Car className="h-5 w-5 text-primary" />
                <Typography variant="h2">
                  {data.vehicle.make} {data.vehicle.model} ({data.vehicle.year})
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-sm font-medium dark:text-gray-300">
                  {data.vehicle.licensePlate}
                </div>
                <Typography variant="small" className="text-muted-foreground">
                  Estado general: {data.status.overall}
                </Typography>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2">
                <div className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                  Verificación completa
                </div>
              </div>
              <Typography
                variant="small"
                className="text-muted-foreground mt-1"
              >
                Actualizado: {new Date().toLocaleDateString()}
              </Typography>
            </div>
          </div>
        </div>

        {/* Pestañas de navegación */}
        <div className="flex overflow-x-auto scrollbar-hide mb-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 p-1 shadow-inner">
          <button
            className={`px-4 py-2 font-medium text-sm flex items-center gap-2 rounded-md transition-colors ${
              activeTab === "services"
                ? "bg-primary text-white shadow-sm"
                : "text-muted-foreground hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("services")}
          >
            <Wrench className="h-4 w-4" />
            Servicios
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm flex items-center gap-2 rounded-md transition-colors ${
              activeTab === "fines"
                ? "bg-primary text-white shadow-sm"
                : "text-muted-foreground hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("fines")}
          >
            <ShieldAlert className="h-4 w-4" />
            Multas
          </button>
          <button
            className={`px-4 py-2 font-medium text-sm flex items-center gap-2 rounded-md transition-colors ${
              activeTab === "details"
                ? "bg-primary text-white shadow-sm"
                : "text-muted-foreground hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("details")}
          >
            <FileText className="h-4 w-4" />
            Detalles
          </button>
        </div>

        {/* Contenido de las pestañas */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700 mb-6">
          {activeTab === "services" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Wrench className="h-5 w-5 text-primary" />
                <Typography variant="h3">Historial de Servicios</Typography>
                <span className="ml-auto bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  {data.services.length} registros
                </span>
              </div>

              {data.services.length > 0 ? (
                <div className="space-y-6">
                  {data.services.map((service: any, index: number) => (
                    <div
                      key={index}
                      className="border-b dark:border-gray-700 pb-6 last:border-0 last:pb-0"
                    >
                      <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                        <div>
                          <Typography variant="p" className="font-medium">
                            {service.type}
                          </Typography>
                          <Typography
                            variant="small"
                            className="text-muted-foreground"
                          >
                            Taller: {service.workshop}
                          </Typography>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{service.date}</span>
                          </div>
                          <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs">
                            {service.km.toLocaleString()} km
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        {service.details.map((detail: string, i: number) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <Typography variant="small">{detail}</Typography>
                          </div>
                        ))}
                      </div>

                      {service.nextServiceKm && (
                        <div className="mt-4 pt-4 border-t dark:border-gray-700">
                          <div className="flex items-center justify-between">
                            <Typography
                              variant="small"
                              className="text-muted-foreground"
                            >
                              Próximo servicio recomendado:
                            </Typography>
                            <Typography
                              variant="p"
                              className="font-medium text-red-600 dark:text-red-400"
                            >
                              {service.nextServiceKm.toLocaleString()} km
                            </Typography>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                            <div
                              className="bg-primary h-2 rounded-full"
                              style={{
                                width: `${Math.min(
                                  100,
                                  (service.km / service.nextServiceKm) * 100
                                )}%`
                              }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                    <Wrench className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <Typography variant="p" className="text-muted-foreground">
                    No se encontraron servicios registrados
                  </Typography>
                </div>
              )}
            </div>
          )}

          {activeTab === "fines" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <ShieldAlert className="h-5 w-5 text-primary" />
                <Typography variant="h3">Historial de Multas</Typography>
                <span className="ml-auto bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  {data.fines.length} registros
                </span>
              </div>

              {data.fines.length > 0 ? (
                <div className="space-y-4">
                  {data.fines.map((fine: any, index: number) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <div className="flex justify-between items-start flex-wrap gap-4">
                        <div>
                          <Typography variant="p" className="font-medium">
                            {fine.description}
                          </Typography>
                          <Typography
                            variant="small"
                            className="text-muted-foreground"
                          >
                            {fine.date}
                          </Typography>
                        </div>
                        <div className="flex items-center gap-4">
                          <Typography variant="p" className="font-medium">
                            {fine.amount}
                          </Typography>
                          <div
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              fine.status === "Pagada"
                                ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                                : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"
                            }`}
                          >
                            {fine.status}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                    <ShieldAlert className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <Typography variant="p" className="text-muted-foreground">
                    No se encontraron multas registradas
                  </Typography>
                </div>
              )}
            </div>
          )}

          {activeTab === "details" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-primary" />
                <Typography variant="h3">Detalles del Vehículo</Typography>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-5">
                  <Typography
                    variant="h4"
                    className="font-medium mb-4 flex items-center gap-2"
                  >
                    <Car className="h-5 w-5 text-primary" />
                    Datos del Vehículo
                  </Typography>

                  <div className="space-y-4">
                    {[
                      { label: "Marca", value: data.vehicle.make, icon: null },
                      {
                        label: "Modelo",
                        value: data.vehicle.model,
                        icon: null
                      },
                      {
                        label: "Año",
                        value: data.vehicle.year,
                        icon: <Calendar className="h-4 w-4" />
                      },
                      { label: "Color", value: data.vehicle.color, icon: null },
                      {
                        label: "Combustible",
                        value: data.vehicle.fuelType,
                        icon: <Fuel className="h-4 w-4" />
                      },
                      {
                        label: "VIN",
                        value: data.vehicle.vin,
                        icon: <FileSearch className="h-4 w-4" />
                      }
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <Typography
                          variant="small"
                          className="text-muted-foreground flex items-center gap-2"
                        >
                          {item.icon && item.icon}
                          {item.label}:
                        </Typography>
                        <Typography
                          variant="small"
                          className="font-medium text-right"
                        >
                          {item.value}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-5">
                  <Typography
                    variant="h4"
                    className="font-medium mb-4 flex items-center gap-2"
                  >
                    <User className="h-5 w-5 text-primary" />
                    Datos del Titular
                  </Typography>

                  <div className="space-y-4 mb-6">
                    {[
                      {
                        label: "Nombre",
                        value: data.owner.name,
                        icon: <User className="h-4 w-4" />
                      },
                      {
                        label: "Documento",
                        value: data.owner.id,
                        icon: <FileSearch className="h-4 w-4" />
                      }
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <Typography
                          variant="small"
                          className="text-muted-foreground flex items-center gap-2"
                        >
                          {item.icon}
                          {item.label}:
                        </Typography>
                        <Typography
                          variant="small"
                          className="font-medium text-right"
                        >
                          {item.value}
                        </Typography>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <Typography
                      variant="h4"
                      className="font-medium flex items-center gap-2"
                    >
                      <BadgeCheck className="h-5 w-5 text-primary" />
                      Estado General
                    </Typography>

                    {Object.entries(data.status).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center"
                      >
                        <Typography
                          variant="small"
                          className="text-muted-foreground capitalize"
                        >
                          {key.replace(/([A-Z])/g, " $1").trim()}:
                        </Typography>
                        <Typography variant="small" className="font-medium">
                          {value as string}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sección de recomendaciones */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30 rounded-lg p-6 border border-blue-100 dark:border-blue-900/30 shadow-sm">
          <Typography
            variant="h3"
            className="text-lg font-semibold mb-4 flex items-center gap-2"
          >
            <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Recomendaciones importantes
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-blue-100 dark:border-blue-900/30 flex items-start gap-3">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <Typography variant="small" className="font-medium mb-1">
                  Verificar documentación
                </Typography>
                <Typography variant="small" className="text-muted-foreground">
                  Solicitar comprobantes de servicios realizados
                </Typography>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-blue-100 dark:border-blue-900/30 flex items-start gap-3">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                <Wrench className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <Typography variant="small" className="font-medium mb-1">
                  Próximo servicio
                </Typography>
                <Typography variant="small" className="text-muted-foreground">
                  {Math.min(
                    ...data.services.map((s: any) => s.nextServiceKm)
                  )?.toLocaleString() || "N/A"}{" "}
                  km
                </Typography>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-blue-100 dark:border-blue-900/30 flex items-start gap-3">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                <ShieldAlert className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <Typography variant="small" className="font-medium mb-1">
                  Inspección mecánica
                </Typography>
                <Typography variant="small" className="text-muted-foreground">
                  Realizar revisión pre-compra
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Acciones adicionales */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700 mt-6">
          <div className="flex items-center gap-3 mb-6">
            <Share2 className="h-5 w-5 text-primary" />
            <Typography variant="h3">Acciones</Typography>
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
                  <Download className="h-4 w-4" />
                  Exportar
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
  );
}
