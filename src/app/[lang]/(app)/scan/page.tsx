"use client";

import { useState } from "react";
import { CheckCircle2, FileText, Wrench, QrCode } from "lucide-react";
import { Button } from "@/presentation/ds/button";
import AppLayout from "../AppLayout";
import { InputMethodSelector } from "@/presentation/components/vehicle-input/InputMethodSelector";
import { ScanInput } from "@/presentation/components/vehicle-input/ScanInput";
import { VehicleInputForm } from "@/presentation/components/vehicle-input/VehicleInputForm";
import { useMobileDetection } from "@/presentation/hooks/useMobileDetection";
import { useVehicleSearch } from "@/presentation/hooks/useVehicleSearch";

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
  const isMobile = useMobileDetection();
  const [inputMethod, setInputMethod] = useState<"scan" | "manual">("manual");

  const {
    inputValue,
    setInputValue,
    isLoading,
    error,
    handleSearch,
    handleSimulatedScan
  } = useVehicleSearch({
    mockData: mockVehicleData,
    redirectPath: "/scan/scan-status"
  });

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
              <InputMethodSelector
                inputMethod={inputMethod}
                setInputMethod={setInputMethod}
              />

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6 border border-gray-200 dark:border-gray-700">
                {inputMethod === "scan" ? (
                  <div className="space-y-4">
                    <ScanInput
                      isLoading={isLoading}
                      onScan={handleSimulatedScan}
                    />
                    <div className="text-center text-sm text-gray-500 dark:text-gray-400 my-4">
                      o
                    </div>
                    <div className="relative">
                      <VehicleInputForm
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        isLoading={isLoading}
                        error={error}
                        onSubmit={handleSearch}
                        placeholder="Ingresa la patente manualmente"
                        buttonText="Verificar vehículo"
                      />
                    </div>
                  </div>
                ) : (
                  <VehicleInputForm
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    isLoading={isLoading}
                    error={error}
                    onSubmit={handleSearch}
                    placeholder="Ejemplo: ABC 123"
                    buttonText="Verificar vehículo"
                  />
                )}
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
                  <VehicleInputForm
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    isLoading={isLoading}
                    error={error}
                    onSubmit={handleSearch}
                    placeholder="Ejemplo: ABC 123 (letras mayúsculas)"
                    buttonText="Verificar vehículo"
                  />
                </div>

                {/* Demo de escaneo para desktop */}
                <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                  <h2 className="text-gray-900 dark:text-white font-medium mb-3 flex items-center gap-2">
                    <QrCode className="h-5 w-5 text-primary" />
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
                    <QrCode className="h-5 w-5" />
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
