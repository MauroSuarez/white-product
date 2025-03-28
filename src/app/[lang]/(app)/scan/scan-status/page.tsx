"use client";

import { useState } from "react";
import {
  Car,
  CheckCircle2,
  FileText,
  Wrench,
  ShieldAlert,
  Fuel,
  FileSearch,
  User,
  BadgeCheck,
  Calendar,
  Share2,
  AlertCircle
} from "lucide-react";
import AppLayout from "../../AppLayout";

import { Typography } from "@/presentation/ds/typography";
import { ActionButtons } from "@/presentation/components/status/ActionButtons";
import { LoadingState } from "@/presentation/components/status/LoadingState";
import { StatusCard } from "@/presentation/components/status/StatusCard";
import { TabNavigation } from "@/presentation/components/status/TabNavigation";
import { VehicleDetailsCard } from "@/presentation/components/status/VehicleDetailsCard";
import { VehicleHeader } from "@/presentation/components/status/VehicleHeader";
import { useTheme } from "next-themes";
import { useVehicleStatus } from "@/presentation/hooks/useVehcleStatus";

// Mock data para vehículos
const mockVehicleData: Record<string, any> = {
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

// Función para obtener datos del vehículo
const getVehicleData = (licensePlate: string) => {
  const normalizedPlate = licensePlate.replace(/\s/g, "").toUpperCase();
  return mockVehicleData[normalizedPlate] || null;
};

export default function ScanStatusPage() {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("services");
  const [isPrinting, setIsPrinting] = useState(false);

  // Corregimos la llamada al hook useVehicleStatus
  const { licensePlate, data, isLoading, error } = useVehicleStatus<
    (typeof mockVehicleData)[keyof typeof mockVehicleData]
  >({
    mockDataFn: getVehicleData
  });

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
      <ErrorState
        title="No se proporcionó patente"
        message="Por favor, ingresa una patente válida para continuar."
        backLink="/scan"
        backText="Volver a verificación"
        icon="error"
      />
    );
  }

  if (isLoading) {
    return (
      <LoadingState
        message="Cargando información"
        submessage={`Verificando ${licensePlate}...`}
        progress={70}
      />
    );
  }

  if (!data) {
    return (
      <ErrorState
        title="No se encontraron datos"
        message={`No hay información disponible para la patente ${licensePlate}`}
        backLink="/scan"
        backText="Intentar con otra patente"
        icon="warning"
      />
    );
  }

  const tabs = [
    {
      id: "services",
      label: "Servicios",
      icon: <Wrench className="h-4 w-4" />
    },
    {
      id: "fines",
      label: "Multas",
      icon: <ShieldAlert className="h-4 w-4" />
    },
    {
      id: "details",
      label: "Detalles",
      icon: <FileText className="h-4 w-4" />
    }
  ];

  return (
    <AppLayout type="services">
      <section>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <main className="container mx-auto px-4 py-8">
            {/* Encabezado con estado */}
            <VehicleHeader
              make={data.vehicle.make}
              model={data.vehicle.model}
              year={data.vehicle.year}
              licensePlate={data.vehicle.licensePlate}
              status={data.status.overall}
              statusLabel="Estado general"
              statusType="completed"
              lastUpdated={new Date().toLocaleDateString()}
            />

            {/* Pestañas de navegación */}
            <TabNavigation
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />

            {/* Contenido de las pestañas */}
            <StatusCard
              icon={
                activeTab === "services" ? (
                  <Wrench className="h-5 w-5 text-primary" />
                ) : activeTab === "fines" ? (
                  <ShieldAlert className="h-5 w-5 text-primary" />
                ) : (
                  <FileText className="h-5 w-5 text-primary" />
                )
              }
              title={
                activeTab === "services"
                  ? "Historial de Servicios"
                  : activeTab === "fines"
                  ? "Historial de Multas"
                  : "Detalles del Vehículo"
              }
            >
              {activeTab === "services" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
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
                            {service.details.map(
                              (detail: string, i: number) => (
                                <div key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <Typography variant="small">
                                    {detail}
                                  </Typography>
                                </div>
                              )
                            )}
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <VehicleDetailsCard
                      title="Datos del Vehículo"
                      icon={<Car className="h-5 w-5 text-primary" />}
                      details={[
                        {
                          label: "Marca",
                          value: data.vehicle.make,
                          icon: null
                        },
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
                        {
                          label: "Color",
                          value: data.vehicle.color,
                          icon: null
                        },
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
                      ]}
                    />

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
            </StatusCard>

            {/* Sección de recomendaciones */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30 rounded-lg p-6 border border-blue-100 dark:border-blue-900/30 shadow-sm mb-6">
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
                    <Typography
                      variant="small"
                      className="text-muted-foreground"
                    >
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
                    <Typography
                      variant="small"
                      className="text-muted-foreground"
                    >
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
                    <Typography
                      variant="small"
                      className="text-muted-foreground"
                    >
                      Realizar revisión pre-compra
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            {/* Acciones adicionales */}
            <StatusCard
              icon={<Share2 className="h-5 w-5 text-primary" />}
              title="Acciones"
            >
              <ActionButtons onPrint={handlePrint} />
            </StatusCard>
          </main>
        </div>
      </section>
    </AppLayout>
  );
}
