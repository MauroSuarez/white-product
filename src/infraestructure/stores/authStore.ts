import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User } from '@/core/domain/entities/User'

export type AuthState = {
  user: User | null
  token: string | null
  isLoggedIn: boolean
  isAuthModal: boolean
  setIsAuthModal: (isAuthModal: boolean) => void
  setUser: (user: User) => void
  setToken: (token: string) => void
  clearUser: () => void
}

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      user: null,
      token: null,
      isLoggedIn: false,
      isAuthModal: false,
      setIsAuthModal: (isAuthModal) => set({ isAuthModal }),
      setUser: (user) => set({ user, isLoggedIn: true }),
      setToken: (token) => set({ token }),
      clearUser: () => set({ user: null, token: null, isLoggedIn: false }),
    }),
    {
      name: 'auth-storage',
    }
  )
)

export type AuthStore = ReturnType<typeof useAuthStore>