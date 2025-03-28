"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface UseVehicleStatusOptions<T> {
  mockDataFn: (licensePlate: string) => T | null;
  loadingDelay?: number;
}

export function useVehicleStatus<T>({
  mockDataFn,
  loadingDelay = 800
}: UseVehicleStatusOptions<T>) {
  const searchParams = useSearchParams();
  const licensePlate = searchParams.get("plate") || "";
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!licensePlate) {
      setIsLoading(false);
      setError("No se proporcionó patente");
      return;
    }

    setIsLoading(true);
    setError("");

    // Simular carga de datos
    const timer = setTimeout(() => {
      try {
        const result = mockDataFn(licensePlate);
        if (result) {
          setData(result);
        } else {
          setError("No se encontraron datos para esta patente");
        }
      } catch (err) {
        setError("Error al cargar los datos");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }, loadingDelay);

    return () => clearTimeout(timer);
  }, [licensePlate, mockDataFn, loadingDelay]);

  return { licensePlate, data, isLoading, error };
}
