"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";

type Props = {
  children?: React.ReactNode;
};

export function ThemeAppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}