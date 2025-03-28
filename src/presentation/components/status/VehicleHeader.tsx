"use client";

import { Car } from "lucide-react";
import { Typography } from "@/presentation/ds/typography";

interface VehicleHeaderProps {
  make: string;
  model: string;
  year: string;
  licensePlate: string;
  status?: string;
  serviceId?: string;
  statusLabel?: string;
  statusType?: "progress" | "completed" | "warning" | "error";
  lastUpdated?: string;
}

export function VehicleHeader({
  make,
  model,
  year,
  licensePlate,
  status,
  serviceId,
  statusLabel = "Estado general",
  statusType = "completed",
  lastUpdated
}: VehicleHeaderProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Car className="h-5 w-5 text-primary" />
            <Typography variant="h2">
              {make} {model} ({year})
            </Typography>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-sm font-medium dark:text-gray-300">
              {licensePlate}
            </div>
            {serviceId ? (
              <Typography variant="small" className="text-muted-foreground">
                Servicio #{serviceId}
              </Typography>
            ) : (
              <Typography variant="small" className="text-muted-foreground">
                {statusLabel}: {status}
              </Typography>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2">
            <div
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                statusType === "progress"
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                  : statusType === "warning"
                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                  : statusType === "error"
                  ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                  : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
              }`}
            >
              {statusType === "progress"
                ? "En progreso"
                : statusType === "warning"
                ? "Atención requerida"
                : statusType === "error"
                ? "Problema detectado"
                : "Verificación completa"}
            </div>
          </div>
          <Typography variant="small" className="text-muted-foreground mt-1">
            Actualizado: {lastUpdated || new Date().toLocaleDateString()}
          </Typography>
        </div>
      </div>
    </div>
  );
}
