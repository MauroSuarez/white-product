"use client";

import { Clock } from "lucide-react";
import { Typography } from "@/presentation/ds/typography";

interface LoadingStateProps {
  message?: string;
  submessage?: string;
  progress?: number;
}

export function LoadingState({
  message = "Cargando información",
  submessage = "Verificando datos...",
  progress = 70
}: LoadingStateProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="text-center">
        <Clock className="h-12 w-12 text-primary animate-spin mx-auto mb-4" />
        <Typography variant="h3" className="mb-2">
          {message}
        </Typography>
        <Typography variant="p" className="text-muted-foreground">
          {submessage}
        </Typography>
        {progress > 0 && (
          <div className="w-48 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-4 mx-auto">
            <div
              className="h-full bg-primary animate-pulse"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}
