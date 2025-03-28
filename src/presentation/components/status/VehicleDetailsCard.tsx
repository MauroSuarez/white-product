"use client";

import type { ReactNode } from "react";
import { Typography } from "@/presentation/ds/typography";

interface DetailItem {
  label: string;
  value: string;
  icon?: ReactNode;
}

interface VehicleDetailsCardProps {
  title: string;
  icon: ReactNode;
  details: DetailItem[];
}

export function VehicleDetailsCard({
  title,
  icon,
  details
}: VehicleDetailsCardProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-5">
      <Typography
        variant="h4"
        className="font-medium mb-4 flex items-center gap-2"
      >
        {icon}
        {title}
      </Typography>

      <div className="space-y-4">
        {details.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <Typography
              variant="small"
              className="text-muted-foreground flex items-center gap-2"
            >
              {item.icon && item.icon}
              {item.label}:
            </Typography>
            <Typography variant="small" className="font-medium text-right">
              {item.value}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
