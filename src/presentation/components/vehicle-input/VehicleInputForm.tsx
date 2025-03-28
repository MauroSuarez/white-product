"use client";

import type { FormEvent } from "react";
import { Car, X, Clock, Search, AlertCircle } from "lucide-react";
import { Button } from "@/presentation/ds/button";

interface VehicleInputFormProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  isLoading: boolean;
  error: string;
  onSubmit: (e: FormEvent) => void;
  placeholder?: string;
  buttonText?: string;
  label?: string;
  description?: string;
}

export function VehicleInputForm({
  inputValue,
  setInputValue,
  isLoading,
  error,
  onSubmit,
  placeholder = "Ejemplo: ABC 123",
  buttonText = "Verificar vehículo",
  label = "Patente del vehículo",
  description = "Ingresá primero las letras en mayúscula y los números separados por un espacio"
}: VehicleInputFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-6">
        <label
          htmlFor="vehicleInput"
          className="block text-gray-900 dark:text-white font-medium mb-3"
        >
          {label}
        </label>
        <div className="relative">
          <Car className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          <input
            id="vehicleInput"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={placeholder}
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
        {description && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            {description}
          </p>
        )}
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
            {buttonText}
          </>
        )}
      </Button>
    </form>
  );
}
