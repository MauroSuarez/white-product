import { create } from 'zustand'
import { User } from '@/core/domain/entities/User'

type AuthState = {
  user: User | null
  isAuthenticated: boolean
  setUser: (user: User) => void
  clearUser: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: true }),
  clearUser: () => set({ user: null, isAuthenticated: false }),
}))