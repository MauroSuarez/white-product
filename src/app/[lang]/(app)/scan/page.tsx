"use client";

import { useState, useEffect } from "react";
import {
  Scan,
  QrCode,
  Keyboard,
  Search,
  Car,
  Clock,
  X,
  AlertCircle,
  CheckCircle2,
  Wrench,
  FileText,
  Moon,
  Sun
} from "lucide-react";
import { Button } from "@/presentation/ds/button";
import { Typography } from "@/presentation/ds/typography";
import { FadeIn } from "@/presentation/components/fade-in";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AppLayout from "../AppLayout";

// Mock data para vehículos
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
  },
  XYZ789: {
    vehicle: {
      make: "Ford",
      model: "Fiesta",
      year: "2020",
      licensePlate: "XYZ 789",
      vin: "1HGCM82633A123456",
      fuelType: "Nafta",
      color: "Rojo",
      image: "/placeholder-car.jpg"
    },
    services: [],
    fines: [],
    status: {
      overall: "Nuevo",
      mechanical: "Excelente",
      documents: "Al día",
      fines: "Sin multas"
    }
  }
};

export default function ScanPage() {
  const [inputMethod, setInputMethod] = useState<"scan" | "manual">("manual");
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const plate = inputValue.replace(/\s/g, "").toUpperCase();
    if (!plate) return;

    setIsLoading(true);
    setError("");

    setTimeout(() => {
      const vehicle = mockVehicleData[plate as keyof typeof mockVehicleData];

      if (vehicle) {
        router.push(`/scan/scan-status?plate=${plate}`);
      } else {
        setError("No se encontró información para esta patente");
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleSimulatedScan = () => {
    setIsLoading(true);
    setTimeout(() => {
      setInputValue("ABC 123");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <AppLayout type="empty">
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <main className="container mx-auto px-4 py-8 md:py-16">
          {isMobile ? (
            // Versión móvil
            <div className="max-w-md mx-auto">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {inputMethod === "scan"
                    ? "Escanear patente"
                    : "Verificación de vehículo"}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Verifica servicios, multas y estado general de un vehículo
                </p>
              </div>

              {/* Selector de método */}
              <div className="flex border rounded-lg overflow-hidden mb-6 shadow-sm dark:border-gray-700">
                <button
                  className={`flex-1 py-3 font-medium flex items-center justify-center gap-2 ${
                    inputMethod === "scan"
                      ? "bg-primary text-white"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  }`}
                  onClick={() => setInputMethod("scan")}
                >
                  <Scan className="h-5 w-5" />
                  Escanear
                </button>
                <button
                  className={`flex-1 py-3 font-medium flex items-center justify-center gap-2 ${
                    inputMethod === "manual"
                      ? "bg-primary text-white"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  }`}
                  onClick={() => setInputMethod("manual")}
                >
                  <Keyboard className="h-5 w-5" />
                  Manual
                </button>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6 border border-gray-200 dark:border-gray-700">
                <form onSubmit={handleSubmit}>
                  {inputMethod === "scan" ? (
                    <div className="space-y-4">
                      <div
                        className="relative h-64 w-full rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center bg-gray-50 dark:bg-gray-700/50 cursor-pointer"
                        onClick={handleSimulatedScan}
                      >
                        {isLoading ? (
                          <div className="flex flex-col items-center">
                            <Clock className="h-10 w-10 mb-2 text-primary animate-spin" />
                            <p className="text-gray-900 dark:text-white">
                              Escaneando patente...
                            </p>
                          </div>
                        ) : (
                          <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                              <QrCode className="h-8 w-8 text-primary" />
                            </div>
                            <p className="font-medium mb-2 text-gray-900 dark:text-white">
                              Escanea la patente
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Toca para simular escaneo (Demo: ABC 123)
                            </p>
                          </div>
                        )}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-64 h-16 border-2 border-primary rounded-md opacity-50"></div>
                        </div>
                      </div>
                      <div className="text-center text-sm text-gray-500 dark:text-gray-400 my-4">
                        o
                      </div>
                      <div className="relative">
                        <Car className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          placeholder="Ingresa la patente manualmente"
                          className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        />
                        {inputValue && (
                          <button
                            type="button"
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                            onClick={() => setInputValue("")}
                          >
                            <X className="h-5 w-5" />
                          </button>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <label
                        htmlFor="licensePlate"
                        className="block text-gray-900 dark:text-white font-medium mb-2"
                      >
                        Patente del vehículo
                      </label>
                      <div className="relative">
                        <Car className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          id="licensePlate"
                          type="text"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          placeholder="Ejemplo: ABC 123"
                          className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                          required
                        />
                        {inputValue && (
                          <button
                            type="button"
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                            onClick={() => setInputValue("")}
                          >
                            <X className="h-5 w-5" />
                          </button>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Ingresá primero las letras en mayúscula y los números
                        separados por un espacio
                      </p>
                    </div>
                  )}

                  {error && (
                    <div className="text-red-500 dark:text-red-400 text-sm mt-4 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full py-3 bg-primary hover:bg-primary/90 text-white flex items-center justify-center mt-6"
                    disabled={isLoading || !inputValue.trim()}
                  >
                    {isLoading ? (
                      <>
                        <Clock className="h-5 w-5 mr-2 animate-spin" />
                        Verificando...
                      </>
                    ) : (
                      <>
                        <Search className="h-5 w-5 mr-2" />
                        Verificar vehículo
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Información adicional */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Servicios</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <FileText className="h-4 w-4 text-blue-500" />
                    <span>Documentación</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Wrench className="h-4 w-4 text-yellow-500" />
                    <span>Mantenimiento</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Versión desktop
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-6xl mx-auto">
              {/* Título y descripción */}
              <div className="md:col-span-5 flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
                  Verificación
                  <br />
                  de vehículo
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Ingresa la patente para verificar servicios, multas y estado
                  general del vehículo
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>Historial de servicios</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <FileText className="h-5 w-5 text-blue-500" />
                    <span>Estado documentación</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Wrench className="h-5 w-5 text-yellow-500" />
                    <span>Próximo mantenimiento</span>
                  </div>
                </div>
              </div>

              {/* Formulario de verificación */}
              <div className="md:col-span-7">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 border border-gray-200 dark:border-gray-700">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label
                        htmlFor="licensePlate"
                        className="block text-gray-900 dark:text-white font-medium mb-3"
                      >
                        Patente del vehículo
                      </label>
                      <div className="relative">
                        <Car className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                        <input
                          id="licensePlate"
                          type="text"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          placeholder="Ejemplo: ABC 123 (letras mayúsculas)"
                          className="w-full px-4 py-3.5 pl-12 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-lg"
                          required
                        />
                        {inputValue && (
                          <button
                            type="button"
                            className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                            onClick={() => setInputValue("")}
                          >
                            <X className="h-5 w-5" />
                          </button>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Ingresá primero las letras en mayúscula y los números
                        separados por un espacio
                      </p>
                    </div>

                    {error && (
                      <div className="text-red-500 dark:text-red-400 text-sm mb-6 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        {error}
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full py-3.5 bg-primary hover:bg-primary/90 text-white flex items-center justify-center text-lg"
                      disabled={isLoading || !inputValue.trim()}
                    >
                      {isLoading ? (
                        <>
                          <Clock className="h-6 w-6 mr-3 animate-spin" />
                          Verificando...
                        </>
                      ) : (
                        <>
                          <Search className="h-6 w-6 mr-3" />
                          Verificar vehículo
                        </>
                      )}
                    </Button>
                  </form>
                </div>

                {/* Demo de escaneo para desktop */}
                <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                  <h2 className="text-gray-900 dark:text-white font-medium mb-3 flex items-center gap-2">
                    <Scan className="h-5 w-5 text-primary" />
                    ¿Prefieres escanear?
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Usa nuestra app móvil para escanear la patente
                    automáticamente
                  </p>
                  <Button
                    variant="outline"
                    className="w-full gap-2"
                    onClick={handleSimulatedScan}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Clock className="h-5 w-5 animate-spin" />
                    ) : (
                      <QrCode className="h-5 w-5" />
                    )}
                    Simular escaneo (Demo)
                  </Button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </AppLayout>
  );
}
