import { create } from 'zustand'
import { User } from '@/core/domain/entities/User'

export type AuthState = {
  user: User | null
  isLoggedIn: boolean
  setUser: (user: User) => void
  clearUser: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoggedIn: false,
  setUser: (user) => set({ user, isLoggedIn: true }),
  clearUser: () => set({ user: null, isLoggedIn: false }),
}))

export type AuthStore = ReturnType<typeof useAuthStore>