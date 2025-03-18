import { create } from 'zustand'

type AppState = {
  isError: boolean
  isLoading: boolean
  filters: any
  setFilters: (filters: any) => void
}

export const useAppStore = create<AppState>((set) => ({
  isError: false,
  isLoading: false,
  filters: {},
  setFilters: (filters) => set({ filters }),
}))

export type AppStore = ReturnType<typeof useAppStore>
