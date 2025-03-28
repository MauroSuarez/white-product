"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AppLayout from "../AppLayout";
import { RecentSearches } from "@/presentation/components/vehicle-input/RecentSearches";
import { VehicleInputForm } from "@/presentation/components/vehicle-input/VehicleInputForm";
import { useMobileDetection } from "@/presentation/hooks/useMobileDetection";
import { useVehicleSearch } from "@/presentation/hooks/useVehicleSearch";

// Mock data service
const mockServices = {
  ABC123: {
    id: "SRV-2023-0458",
    licensePlate: "ABC123",
    status: "en progreso",
    vehicle: "Toyota Corolla",
    lastUpdate: "Hace 2 horas"
  },
  XYZ789: {
    id: "SRV-2023-0459",
    licensePlate: "XYZ789",
    status: "completado",
    vehicle: "Honda Civic",
    lastUpdate: "Hace 1 día"
  }
};

export default function ServicesPage() {
  const isMobile = useMobileDetection();

  const {
    inputValue,
    setInputValue,
    isLoading,
    error,
    searches,
    handleSearch,
    handleRecentSearch
  } = useVehicleSearch({
    mockData: mockServices,
    redirectPath: "/my-services/service-status",
    storageKey: "serviceSearches"
  });

  return (
    <AppLayout type="empty">
      <section>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <main className="container mx-auto px-4 py-8 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-6xl mx-auto">
              {/* Título y descripción */}
              <div className="md:col-span-4 flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
                  Consulta
                  <br />
                  de
                  <br />
                  servicio
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Verifica el estado actual de tu vehículo
                </p>
              </div>

              {/* Formulario de búsqueda */}
              <div className="md:col-span-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                  <VehicleInputForm
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    isLoading={isLoading}
                    error={error}
                    onSubmit={handleSearch}
                    placeholder="Ej: ABC123 o XYZ789"
                    buttonText="Consultar estado"
                    label="Número de patente o seguimiento"
                    description=""
                  />
                </div>
              </div>

              {/* Búsquedas recientes y ayuda */}
              <div className="md:col-span-4">
                <RecentSearches
                  searches={searches}
                  onSelectSearch={handleRecentSearch}
                />

                {/* Ayuda */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                  <h2 className="text-gray-900 dark:text-white font-medium mb-2">
                    ¿Necesitas ayuda?
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Nuestro equipo está disponible para asistirte
                  </p>
                  <Link
                    href="#"
                    className="text-primary hover:underline flex items-center font-medium"
                  >
                    Contacta con soporte
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </AppLayout>
  );
}
