import { ScreenSize } from '@/presentation/hooks/useBreakpointDevice'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type AppError = {
  id: string
  message: string
  code?: string
  timestamp: Date
}

type AppConfig = {
  mainIcon: string | React.ReactNode
  mainLink: string
  appName: string
}

interface AppState {
  // Breakpoints y layout
  breakpoint: ScreenSize
  setBreakpoint: (size: ScreenSize) => void
  // isMobile: boolean
  // sidebarOpen: boolean
  // toggleSidebar: () => void
  
  // Manejo de errores
  errors: AppError[]
  addError: (error: Omit<AppError, 'id' | 'timestamp'>) => void
  removeError: (id: string) => void
  clearErrors: () => void
  
  // Loading states
  loading: boolean
  loadingMessage?: string
  setLoading: (loading: boolean, message?: string) => void
  
  // Configuración general
  config: AppConfig
  updateConfig: (newConfig: Partial<AppConfig>) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Breakpoints (se actualiza con un useEffect en el layout)
      breakpoint: {} as ScreenSize, // Default value for breakpoint
      setBreakpoint: (size: ScreenSize) => set({
        breakpoint: size
      }),
      // Sidebar state
      // sidebarOpen: false,
      // toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      
      // Manejo de errores
      errors: [],
      addError: (error) => set((state) => ({
        errors: [
          ...state.errors,
          {
            ...error,
            id: Math.random().toString(36).substring(2, 9),
            timestamp: new Date()
          }
        ]
      })),
      removeError: (id) => set((state) => ({
        errors: state.errors.filter(e => e.id !== id)
      })),
      clearErrors: () => set({ errors: [] }),
      
      // Loading states
      loading: false,
      loadingMessage: undefined,
      setLoading: (loading, message) => set({
        loading,
        loadingMessage: message
      }),
      
      // Configuración de la app
      config: {
        mainIcon: '', // Puede ser un string o ReactNode
        mainLink: '/',
        appName: 'FreeWheels'
      },
      updateConfig: (newConfig) => set((state) => ({
        config: { ...state.config, ...newConfig }
      })),
    }),
    {
      name: 'app-storage', // nombre para el localStorage
      partialize: (state) => ({
        config: state.config,
      }) // Solo persiste estos campos
    }
  )
)

export type AppStore = ReturnType<typeof useAppStore>
