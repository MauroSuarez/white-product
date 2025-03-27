"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
  Search,
  Car,
  Clock,
  ArrowRight,
  Scan,
  QrCode,
  Keyboard,
  Moon,
  Sun,
  History,
  Wrench
} from "lucide-react";
import { Button } from "@/presentation/ds/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Hook para detectar dispositivo móvil
const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Verificar al cargar
    checkMobile();

    // Verificar al cambiar tamaño de ventana
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

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

export default function ScanPage() {
  const isMobile = useMobileDetection();
  const [inputMethod, setInputMethod] = useState<"scan" | "manual">("manual");
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const router = useRouter();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Detectar preferencia de tema
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

  // Establecer método de entrada basado en dispositivo
  useEffect(() => {
    if (isMobile) {
      setInputMethod("scan");
    } else {
      setInputMethod("manual");
    }
  }, [isMobile]);

  // Cargar búsquedas recientes del localStorage
  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches");
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    } else {
      // Datos de ejemplo para la primera carga
      setRecentSearches(["ABC123"]);
    }
  }, []);

  const saveSearch = (plate: string) => {
    const updatedSearches = [
      plate,
      ...recentSearches.filter((s) => s !== plate)
    ].slice(0, 3);
    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simular búsqueda con delay
    setTimeout(() => {
      const normalizedInput = inputValue.trim().toUpperCase();
      const service = mockServices[normalizedInput];

      if (service) {
        saveSearch(normalizedInput);
        router.push(`/scan/service-status?plate=${normalizedInput}`);
      } else {
        setError(
          "No se encontró servicio para este vehículo o número de seguimiento"
        );
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleRecentSearch = (plate: string) => {
    setInputValue(plate);
    setTimeout(() => {
      router.push(`/scan/service-status?plate=${plate}`);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header - Simplificado */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 h-16 flex items-center">
        <div className="container px-4 mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Wrench className="h-8 w-8 text-primary" />
            <span className="text-primary font-medium text-xl">FreeWheels</span>
          </Link>
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
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-16">
        {isMobile ? (
          // Versión móvil con opción de escaneo
          <div className="max-w-md mx-auto">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                {inputMethod === "scan"
                  ? "Escanear patente"
                  : "Consulta de servicio"}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Verifica el estado actual de tu vehículo
              </p>
            </div>

            {/* Selector de método - Solo visible en móvil */}
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
                    <div className="relative h-64 w-full rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center bg-gray-50 dark:bg-gray-700/50">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                          <QrCode className="h-8 w-8 text-primary" />
                        </div>
                        <p className="font-medium mb-2 text-gray-900 dark:text-white">
                          Escanea la patente
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Apunta la cámara a la patente de tu vehículo para
                          escanearla automáticamente
                        </p>
                      </div>
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
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <label
                      htmlFor="trackingNumber"
                      className="block text-gray-900 dark:text-white font-medium mb-2"
                    >
                      Número de patente o seguimiento
                    </label>
                    <div className="relative">
                      <Car className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        id="trackingNumber"
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ej: ABC123 o XYZ789"
                        className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                )}

                {error && (
                  <div className="text-red-500 dark:text-red-400 text-sm mt-4 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
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
                      Buscando...
                    </>
                  ) : (
                    <>
                      <Search className="h-5 w-5 mr-2" />
                      Consultar estado
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Búsquedas recientes - Versión móvil */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <History className="h-5 w-5 text-primary mr-2" />
                <h2 className="text-gray-900 dark:text-white font-medium">
                  Búsquedas recientes
                </h2>
              </div>

              <div>
                {recentSearches.map((plate, index) => {
                  const service = mockServices[plate];
                  return service ? (
                    <div
                      key={index}
                      onClick={() => handleRecentSearch(plate)}
                      className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg mb-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white mb-1">
                            {plate} - {service.vehicle}
                          </div>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Car className="h-4 w-4 mr-2 text-primary" />
                            <div className="flex items-center">
                              <span>En progreso</span>
                              <span className="mx-2">•</span>
                              <span>{service.lastUpdate}</span>
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                      </div>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        ) : (
          // Versión desktop - Layout de 3 columnas
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
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="trackingNumber"
                        className="text-gray-900 dark:text-white font-medium"
                      >
                        Número de patente o seguimiento
                      </label>
                      <button
                        type="button"
                        className="text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 13.75V10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 6.25H10.0062"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="relative">
                      <Car className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        id="trackingNumber"
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ej: ABC123 o XYZ789"
                        className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="text-red-500 dark:text-red-400 text-sm mb-4 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full py-3 bg-primary hover:bg-primary/90 text-white flex items-center justify-center"
                    disabled={isLoading || !inputValue.trim()}
                  >
                    {isLoading ? (
                      <>
                        <Clock className="h-5 w-5 mr-2 animate-spin" />
                        Buscando...
                      </>
                    ) : (
                      <>
                        <Search className="h-5 w-5 mr-2" />
                        Consultar estado
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Búsquedas recientes y ayuda */}
            <div className="md:col-span-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <History className="h-5 w-5 text-primary mr-2" />
                  <h2 className="text-gray-900 dark:text-white font-medium">
                    Búsquedas recientes
                  </h2>
                </div>

                <div>
                  {recentSearches.map((plate, index) => {
                    const service = mockServices[plate];
                    return service ? (
                      <div
                        key={index}
                        onClick={() => handleRecentSearch(plate)}
                        className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg mb-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white mb-1">
                              {plate} - {service.vehicle}
                            </div>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <Car className="h-4 w-4 mr-2 text-primary" />
                              <div className="flex items-center">
                                <span>En progreso</span>
                                <span className="mx-2">•</span>
                                <span>{service.lastUpdate}</span>
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>

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
        )}
      </main>
    </div>
  );
}
