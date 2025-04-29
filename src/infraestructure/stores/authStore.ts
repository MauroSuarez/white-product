import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { TUsers, TAuth } from '@/core/domain/entities/User'
// import { setCookie, deleteCookie, getCookie } from 'cookies-next'

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
  user: IUser | null
  token: string | null
  isLoggedIn: boolean
  redirect?: string
  authModal: TAuthModal
  setAuthModal: (authModal: TAuthModal) => void
  setUser: (user: IUser) => void
  setToken: (token: string) => void
  clearUser: () => void
  // initialize: () => void
}

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      user: null,
      token: null,
      isLoggedIn: false,
      authModal: { open: false, type: 'signin' },
      setAuthModal: (authModal) => set({ authModal }),
      setUser: (user) => {
        set({ user, isLoggedIn: true })
      },
      setToken: (token) => {
        // setCookie('auth-token', token, { maxAge: 60 * 60 * 24 })
        set({ token })
      },
      clearUser: () => {
        // deleteCookie('auth-token')
        set({ user: null, token: null, isLoggedIn: false })
      },
      initialize: () => {
        // const token = getCookie('auth-token')
        // if (token) {
        //   set({ isLoggedIn: true, token })
        // }
      }
    }),
    {
      name: 'auth-storage',
    }
  )
)

export type AuthStore = ReturnType<typeof useAuthStore>
