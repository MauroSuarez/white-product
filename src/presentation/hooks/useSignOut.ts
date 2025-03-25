'use client'

import { useMutation } from '@tanstack/react-query'
import { useAuthStore } from '@/infraestructure/stores/authStore'
import { fetchSignOut } from '@/core/domain/services/fetchAuth'

function useSignOut() {
  const { clearUser } = useAuthStore()

  return useMutation({
    mutationFn: fetchSignOut,
    onSuccess: () => {
      console.log('Logout')
      clearUser()
    },
    onError: (error: Error) => {
      // Puedes manejar errores aquí o dejar que se manejen donde se use el hook
      console.error('Login error:', error.message)
    },
  })
}

export { useSignOut }