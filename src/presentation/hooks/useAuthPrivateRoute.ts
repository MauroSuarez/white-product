// hooks/useAuthRedirect.ts
'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useAuthStore } from '@/infraestructure/stores/authStore'

const PREFIX = '/es'

// Definición de rutas privadas
const PRIVATE_ROUTES = [
  '/dashboard',
  // '/account/profile',
  '/account/settings',
  '/freewheels/onboarding',
  // Agrega más rutas según necesites
]

export const useAuthPrivateRoute = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { isLoggedIn, token, user } = useAuthStore()

  useEffect(() => {
    // Verificar si la ruta actual es privada
    const isPrivateRoute = PRIVATE_ROUTES.some(route => 
      pathname?.startsWith(`${PREFIX}${route}`)
    );

    if (isPrivateRoute && !(isLoggedIn && token && user)) {
      console.log("No esta logueado")
      // Redirigir al home si no está autenticado
      router.push('/')
    }
  }, [pathname, isLoggedIn, token, user, router])

  // Opcional: Devolver estado de autenticación para usarlo en componentes
  return { isAuthenticated: isLoggedIn && token && user }
}
