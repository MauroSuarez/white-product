"use client";

import { useRef } from "react";
import { Car, Wrench, Clock, AlertCircle, Share2 } from "lucide-react";
import AppLayout from "../../AppLayout";

import { ActionButtons } from "@/presentation/components/status/ActionButtons";
import { DiagnosticResults } from "@/presentation/components/status/DiagnosticResults";
import { LoadingState } from "@/presentation/components/status/LoadingState";
import { ProgressBar } from "@/presentation/components/status/ProgressBar";
import { ServiceProviderCard } from "@/presentation/components/status/ServiceProviderCard";
import { ServiceSteps } from "@/presentation/components/status/ServiceSteps";
import { StatusCard } from "@/presentation/components/status/StatusCard";
import { VehicleHeader } from "@/presentation/components/status/VehicleHeader";
import { ErrorState } from "@/presentation/components/status/ErrorState";
import { useVehicleStatus } from "@/presentation/hooks/useVehcleStatus";
import { useTheme } from "next-themes";

// Definimos el tipo para los datos del vehículo
interface VehicleData {
  vehicle: {
    make: string;
    model: string;
    year: string;
    licensePlate: string;
    vin: string;
    lastService: string;
    image: string;
  };
  service: {
    id: string;
    status: string;
    startDate: string;
    estimatedCompletion: string;
    progress: number;
    provider: {
      name: string;
      rating: number;
      address: string;
      phone: string;
      image: string;
    };
    technician: {
      name: string;
      speciality: string;
      image: string;
    };
  };
  steps: {
    id: number;
    name: string;
    status: string;
    date: string;
  }[];
  diagnostics: {
    id: number;
    system: string;
    status: string;
    description: string;
  }[];
}

// Mock data generator
const generateMockData = (licensePlate: string): VehicleData | null => {
  const isABC123 = licensePlate.replace(/\s/g, "").toUpperCase() === "ABC123";

  if (!isABC123 && licensePlate.replace(/\s/g, "").toUpperCase() !== "XYZ789") {
    return null;
  }

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
  const { theme, toggleTheme } = useTheme();
  const contentRef = useRef<HTMLDivElement>(null);

  // Corregimos la llamada al hook useVehicleStatus con el tipo correcto
  const { licensePlate, data, isLoading, error } =
    useVehicleStatus<VehicleData>({
      mockDataFn: generateMockData
    });

  const handlePrint = () => {
    window.print();
  };

  if (!licensePlate) {
    return (
      <ErrorState
        title="No se proporcionó patente"
        message="No se ha especificado ninguna patente o número de seguimiento para consultar."
        backLink="/my-services"
        backText="Realizar una consulta"
        icon="error"
      />
    );
  }

  if (isLoading || !data) {
    return (
      <LoadingState
        message="Cargando información"
        submessage="Obteniendo datos del servicio..."
      />
    );
  }

  return (
    <AppLayout type="services">
      <section>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          {/* Main Content */}
          <div ref={contentRef} className="print:p-0">
            <main className="container mx-auto px-4 py-8">
              {/* Encabezado con estado */}
              <VehicleHeader
                make={data.vehicle.make}
                model={data.vehicle.model}
                year={data.vehicle.year}
                licensePlate={data.vehicle.licensePlate}
                serviceId={data.service.id}
                statusType={
                  data.service.status === "en progreso"
                    ? "progress"
                    : "completed"
                }
                lastUpdated={
                  data.service.status === "en progreso"
                    ? "Hace 2 horas"
                    : "16/03/2023"
                }
              />

              {/* Barra de progreso principal */}
              <ProgressBar
                progress={data.service.progress}
                startDate={data.service.startDate}
                endDate={data.service.estimatedCompletion}
                isCompleted={data.service.status !== "en progreso"}
              />

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
                          {
                            label: "Patente",
                            value: data.vehicle.licensePlate
                          },
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
                <StatusCard
                  icon={<Wrench className="h-5 w-5 text-primary" />}
                  title="Proveedor de Servicio"
                >
                  <ServiceProviderCard
                    provider={data.service.provider}
                    technician={data.service.technician}
                  />
                </StatusCard>
              </div>

              {/* Progreso del servicio */}
              <StatusCard
                icon={<Clock className="h-5 w-5 text-primary" />}
                title="Etapas del Servicio"
              >
                <ServiceSteps steps={data.steps} />
              </StatusCard>

              {/* Resultados del diagnóstico */}
              <StatusCard
                icon={<AlertCircle className="h-5 w-5 text-primary" />}
                title="Resultados del Diagnóstico"
              >
                <DiagnosticResults items={data.diagnostics} />
              </StatusCard>

              {/* Acciones adicionales */}
              <StatusCard
                icon={<Share2 className="h-5 w-5 text-primary" />}
                title="Acciones"
              >
                <ActionButtons onPrint={handlePrint} />
              </StatusCard>
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
      </section>
    </AppLayout>
  );
}
