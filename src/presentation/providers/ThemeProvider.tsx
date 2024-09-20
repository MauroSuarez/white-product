"use client";

import * as React from "react";
import { ThemeProvider } from "next-themes";

type ThemeAppProps = {
  children?: React.ReactNode;
};

export function ThemeAppProvider({ children }: ThemeAppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}