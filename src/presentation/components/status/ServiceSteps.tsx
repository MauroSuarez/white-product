"use client";

import { CheckCircle2, Clock, PenToolIcon } from "lucide-react";
import { Typography } from "@/presentation/ds/typography";

interface ServiceStep {
  id: number;
  name: string;
  status: "completed" | "in-progress" | "pending";
  date: string;
}

interface ServiceStepsProps {
  steps: ServiceStep[];
}

export function ServiceSteps({ steps }: ServiceStepsProps) {
  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <div key={step.id} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div
              className={`h-8 w-8 rounded-full flex items-center justify-center ${
                step.status === "completed"
                  ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                  : step.status === "in-progress"
                  ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                  : "bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500"
              }`}
            >
              {step.status === "completed" ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : step.status === "in-progress" ? (
                <PenToolIcon className="h-4 w-4" />
              ) : (
                <Clock className="h-4 w-4" />
              )}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-12 w-0.5 my-1 ${
                  step.status === "completed"
                    ? "bg-green-100 dark:bg-green-900/30"
                    : "bg-gray-100 dark:bg-gray-700"
                }`}
              ></div>
            )}
          </div>

          <div className="flex-1 pb-6">
            <div className="flex justify-between flex-wrap gap-2">
              <Typography variant="p" className="font-medium">
                {step.name}
              </Typography>
              {step.date && (
                <Typography variant="small" className="text-muted-foreground">
                  {step.date}
                </Typography>
              )}
            </div>
            {step.status === "in-progress" && (
              <Typography
                variant="small"
                className="text-muted-foreground mt-1"
              >
                Este paso está actualmente en progreso
              </Typography>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
