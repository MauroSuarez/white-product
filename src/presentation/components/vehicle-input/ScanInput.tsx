"use client";

import { QrCode, Clock } from "lucide-react";

interface ScanInputProps {
  isLoading: boolean;
  onScan: () => void;
}

export function ScanInput({ isLoading, onScan }: ScanInputProps) {
  return (
    <div
      className="relative h-64 w-full rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center bg-gray-50 dark:bg-gray-700/50 cursor-pointer"
      onClick={onScan}
    >
      {isLoading ? (
        <div className="flex flex-col items-center">
          <Clock className="h-10 w-10 mb-2 text-primary animate-spin" />
          <p className="text-gray-900 dark:text-white">Escaneando patente...</p>
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
  );
}
