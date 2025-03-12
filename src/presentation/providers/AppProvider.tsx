"use client"

import * as React from "react"
import { ThemeProvider } from "next-themes"

type AppProps = {
  children?: React.ReactNode
}

export function ThemeAppProvider({ children }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}