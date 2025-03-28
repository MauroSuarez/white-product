'use client'

import { useEffect, useState } from "react"

export function useDebounce(value: string = '', delay: number = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    // Configurar un temporizador para actualizar el valor debounceado después del delay
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Cancelar el temporizador si el valor cambia (o se desmonta el componente)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay]) // Solo se vuelve a ejecutar si el valor o el delay cambian

  return debouncedValue
}