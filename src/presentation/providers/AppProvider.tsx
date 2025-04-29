'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { useBreackpointDevice } from '../hooks/useBreakpointDevice'
import { useAppStore } from '@/infraestructure/stores/appStore'
import { useAuthPrivateRoute } from '../hooks/useAuthPrivateRoute'

interface AppContextProps {
  isInitialized: boolean
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

interface AppProviderProps {
  children: React.ReactNode
}

function AppProvider({ children }: AppProviderProps): JSX.Element {
  const [isInitialized, setIsInitialized] = useState(false)
  const { setLoading, addError, updateConfig, setBreakpoint } = useAppStore()
  const breakpoints = useBreackpointDevice()

  useAuthPrivateRoute()

  const initializeApp = () => {
    setLoading(true, 'Inicializando aplicación...')
    
    try {
      setIsInitialized(true)
    } catch (error) {
      console.error('Initialization error:', error)
      addError({
        message: 'Error al inicializar la aplicación',
        code: 'INIT_ERROR'
      })
    } finally {
      setLoading(false)
    }
  }

  // Efecto para inicializar al montar
  useEffect(() => {
    initializeApp()
  }, [])

  useEffect(() => {
    setBreakpoint(breakpoints)
  }, [breakpoints])

  return (
    <AppContext.Provider value={{ isInitialized }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext debe usarse dentro de un AppContextProvider')
  }
  return context
}

export { AppProvider }