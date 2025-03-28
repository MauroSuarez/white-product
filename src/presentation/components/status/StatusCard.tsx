"use client";

import type { ReactNode } from "react";
import { Typography } from "@/presentation/ds/typography";

interface StatusCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

export function StatusCard({ icon, title, children }: StatusCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <Typography variant="h3">{title}</Typography>
      </div>
      {children}
    </div>
  );
}
