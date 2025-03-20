import { create } from 'zustand'

type AppState = {
  isError: boolean
  isLoading: boolean
}

export const useAppStore = create<AppState>((set) => ({
  isError: false,
  isLoading: false,
}))

export type AppStore = ReturnType<typeof useAppStore>
