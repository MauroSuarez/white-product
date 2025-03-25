'use client'

import { useMutation } from '@tanstack/react-query'
import { useAuthStore } from '@/infraestructure/stores/authStore'
import { fetchSignUp } from '@/core/domain/services/fetchAuth'
import { toast } from "@/presentation/hooks/useToast"

function useSignUp() {
  const { setUser, setToken } = useAuthStore()

  return useMutation({
    mutationFn: fetchSignUp,
    onSuccess: (data) => {
      setUser(data.user)
      setToken(data.access_token)
      toast({
        variant: "default",
        title: "Bienvenido de nuevo",
        description: "There was a problem with your request.",
      })
    },
    onError: (error: Error) => {
      // Puedes manejar errores aquí o dejar que se manejen donde se use el hook
      console.error('Login error:', error.message)
    },
  })
}

export { useSignUp }