"use client";

import { CheckCircle2, AlertCircle } from "lucide-react";
import { Typography } from "@/presentation/ds/typography";

interface DiagnosticItem {
  id: number;
  system: string;
  status: "ok" | "warning" | "error";
  description: string;
}

interface DiagnosticResultsProps {
  items: DiagnosticItem[];
}

export function DiagnosticResults({ items }: DiagnosticResultsProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className={`p-4 rounded-lg border ${
            item.status === "ok"
              ? "border-green-100 bg-green-50 dark:border-green-900/30 dark:bg-green-900/10"
              : item.status === "warning"
              ? "border-yellow-100 bg-yellow-50 dark:border-yellow-900/30 dark:bg-yellow-900/10"
              : "border-red-100 bg-red-50 dark:border-red-900/30 dark:bg-red-900/10"
          }`}
        >
          <div className="flex gap-3">
            <div className="mt-0.5">
              {item.status === "ok" ? (
                <CheckCircle2 className="h-5 w-5 text-green-500 dark:text-green-400" />
              ) : item.status === "warning" ? (
                <AlertCircle className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-500 dark:text-red-400" />
              )}
            </div>
            <div>
              <Typography variant="p" className="font-medium mb-1">
                {item.system}
              </Typography>
              <Typography variant="small" className="text-muted-foreground">
                {item.description}
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
