'use client'

import React, { createContext } from 'react'
import { useBreackpointDevice } from '@/presentation/hooks/useBreakpointDevice'

export const BreakpointDeviceContext = createContext<ReturnType<typeof useBreackpointDevice> | null>(null)

export const BreakpointProvider = ({ children }: { children: React.ReactNode }) => {
  const breakpoints = useBreackpointDevice()
  return (
    <BreakpointDeviceContext.Provider value={breakpoints}>
      {children}
    </BreakpointDeviceContext.Provider>
  );
}