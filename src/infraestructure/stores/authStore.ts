import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { TUsers, TAuth } from '@/core/domain/entities/User'

export type TAuthModalType = 'signin' | 'signup' | 'reset'
export type TAuthModal = {
  open: boolean
  type: TAuthModalType
}

interface IUser {
  auth: TAuth
  user: TUsers
}

export type AuthState = {
  user: TAuth | null
  token: string | null
  isLoggedIn: boolean
  authModal: TAuthModal
  setAuthModal: (authModal: TAuthModal) => void
  setUser: (user: TAuth) => void
  setToken: (token: string) => void
  clearUser: () => void
}

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      user: null,
      token: null,
      isLoggedIn: false,
      authModal: { open: false, type: 'signin' },
      setAuthModal: (authModal) => set({ authModal }),
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