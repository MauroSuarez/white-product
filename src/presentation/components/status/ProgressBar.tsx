"use client";

import { Calendar, Clock } from "lucide-react";
import { Typography } from "@/presentation/ds/typography";

interface ProgressBarProps {
  progress: number;
  startDate?: string;
  endDate?: string;
  isCompleted?: boolean;
  title?: string;
}

export function ProgressBar({
  progress,
  startDate,
  endDate,
  isCompleted = false,
  title = "Progreso general"
}: ProgressBarProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-2">
        <Typography variant="h3">{title}</Typography>
        <p className="text-lg font-bold dark:text-white">{progress}%</p>
      </div>
      <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3 mb-4">
        <div
          className={`h-3 rounded-full ${
            isCompleted ? "bg-green-500" : "bg-primary"
          }`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {(startDate || endDate) && (
        <div className="flex flex-wrap justify-between text-sm text-gray-500 dark:text-gray-400">
          {startDate && (
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              Inicio: {startDate}
            </div>
          )}
          {endDate && (
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {isCompleted
                ? `Finalizado: ${endDate}`
                : `Finalización estimada: ${endDate}`}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
