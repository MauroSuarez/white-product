"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRecentSearches } from "./useRecentSearches";

interface UseVehicleSearchOptions {
  mockData: Record<string, any>;
  redirectPath: string;
  storageKey?: string;
  maxRecentSearches?: number;
}

export function useVehicleSearch({
  mockData,
  redirectPath,
  storageKey = "recentSearches",
  maxRecentSearches = 3
}: UseVehicleSearchOptions) {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { searches, addSearch } = useRecentSearches(
    storageKey,
    maxRecentSearches
  );

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!inputValue.trim()) return;

    setIsLoading(true);
    setError("");

    // Simular búsqueda con delay
    setTimeout(() => {
      const normalizedInput = inputValue.replace(/\s/g, "").toUpperCase();
      const result = mockData[normalizedInput];

      if (result) {
        // Crear objeto de búsqueda reciente
        const searchData: RecentSearch = {
          plate: normalizedInput,
          vehicle: result.vehicle?.make
            ? `${result.vehicle.make} ${result.vehicle.model}`
            : result.vehicle,
          status: result.status?.overall || result.status,
          lastUpdate: result.lastUpdate || "Reciente"
        };

        addSearch(searchData);
        router.push(`${redirectPath}?plate=${normalizedInput}`);
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

  const handleRecentSearch = (plate: string) => {
    setInputValue(plate);
    setTimeout(() => {
      router.push(`${redirectPath}?plate=${plate}`);
    }, 300);
  };

  return {
    inputValue,
    setInputValue,
    isLoading,
    error,
    searches,
    handleSearch,
    handleSimulatedScan,
    handleRecentSearch
  };
}
