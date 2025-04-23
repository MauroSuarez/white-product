'use client'

import { useState, useEffect } from 'react'

type GeolocationCoordinates = {
  latitude: number
  longitude: number
  accuracy?: number
  altitude?: number | null
  altitudeAccuracy?: number | null
  heading?: number | null
  speed?: number | null
}

type GeolocationPosition = {
  coords: GeolocationCoordinates
  timestamp: number
}

type GeolocationError = {
  code: number
  message: string
  PERMISSION_DENIED: number
  POSITION_UNAVAILABLE: number
  TIMEOUT: number
}

type UseGeolocationOptions = {
  enableHighAccuracy?: boolean
  timeout?: number
  maximumAge?: number
  autoRequest?: boolean
}

type UseGeolocationResult = {
  position: GeolocationPosition | null
  error: GeolocationError | null
  isLoading: boolean
  requestPermission: () => void
}

export const useGeolocation = (options: UseGeolocationOptions = {}): UseGeolocationResult => {
  const [position, setPosition] = useState<GeolocationPosition | null>(null)
  const [error, setError] = useState<GeolocationError | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const requestPermission = () => {
    setIsLoading(true)
    setError(null)

    if (!navigator.geolocation) {
      setError({
        code: 0,
        message: 'Geolocalización no soportada por tu navegador',
        PERMISSION_DENIED: 1,
        POSITION_UNAVAILABLE: 2,
        TIMEOUT: 3
      })
      setIsLoading(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          coords: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
            accuracy: pos.coords.accuracy,
            altitude: pos.coords.altitude,
            altitudeAccuracy: pos.coords.altitudeAccuracy,
            heading: pos.coords.heading,
            speed: pos.coords.speed
          },
          timestamp: pos.timestamp
        })
        setIsLoading(false)
      },
      (err) => {
        setError({
          code: err.code,
          message: getErrorMessage(err.code),
          PERMISSION_DENIED: 1,
          POSITION_UNAVAILABLE: 2,
          TIMEOUT: 3
        })
        setIsLoading(false)
      },
      {
        enableHighAccuracy: options.enableHighAccuracy ?? true,
        timeout: options.timeout ?? 15000,
        maximumAge: options.maximumAge ?? 0
      }
    )
  }

  useEffect(() => {
    if (options.autoRequest ?? true) {
      requestPermission()
    }
  }, [options.autoRequest])

  const getErrorMessage = (code: number): string => {
    switch (code) {
      case 1: return 'Permiso denegado por el usuario'
      case 2: return 'La posición no está disponible'
      case 3: return 'Tiempo de espera agotado'
      default: return 'Error desconocido al obtener la ubicación'
    }
  }

  return { position, error, isLoading, requestPermission }
}