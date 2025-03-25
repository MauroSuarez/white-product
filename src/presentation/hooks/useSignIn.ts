'use client'

import { useMutation } from '@tanstack/react-query'
import { useAuthStore } from '@/infraestructure/stores/authStore'
import { fetchSignIn } from '@/core/domain/services/fetchAuth'

function useSignIn(position: number = 50) {
  const { setUser, setToken } = useAuthStore()

  return useMutation({
    mutationFn: fetchSignIn,
    onSuccess: (data) => {
      console.log(data, 'BY HOOK')
      setUser(data.user)
      setToken(data.access_token)
    },
    onError: (error: Error) => {
      // Puedes manejar errores aquí o dejar que se manejen donde se use el hook
      console.error('Login error:', error.message)
    },
  })
}

export { useSignIn }