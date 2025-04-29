'use client'

// import { useMemo } from "react"
import { useMutation, useQueryClient } from '@tanstack/react-query'

function useCustomMutation(
  fetchService: (mutationBody: any) => any,
  keys: Array<any>,
  config?: any
) {
  const queryClient = useQueryClient()

  const useMutationResult = useMutation({
    mutationKey: keys,
    mutationFn: fetchService,
    onSuccess: (data, variables) => {
      // Invalidar queries automáticamente
      if (config.invalidateQueries) {
        config.invalidateQueries.forEach((queryKey: any) => {
          queryClient.invalidateQueries({ queryKey })
        })
      }
      // Callback opcional
      config.onSuccess?.(data, variables)
    },
    onError: (error, variables) => {
      config.onError?.(error, variables)
    },
    ...config // Otras opciones (retry, gcTime, etc.)
  })

  return useMutationResult
}

export { useCustomMutation }
