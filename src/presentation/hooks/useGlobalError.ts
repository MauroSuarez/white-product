import { useAppStore } from "@/infraestructure/stores/appStore"

export const useGlobalError = () => {
  const addError = useAppStore((state) => state.addError)
  const removeError = useAppStore((state) => state.removeError)
  const clearErrors = useAppStore((state) => state.clearErrors)
  const errors = useAppStore((state) => state.errors)

  const handleError = (error: unknown) => {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido'
    addError({
      message: errorMessage,
      code: (error as any)?.code
    })
  }

  return {
    errors,
    handleError,
    removeError,
    clearErrors
  }
}