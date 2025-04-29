'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { db } from '@/infraestructure/db'
import type { Session } from '@supabase/supabase-js'

export function useAuthInterceptor() {
  const [session, setSession] = useState<Session | null>(null)
  const router = useRouter()

  useEffect(() => {
    // 1. Obtener sesión activa al cargar
    db.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    // 2. Suscribirse a cambios de autenticación
    const { data: authListener } = db.auth.onAuthStateChange(
      async (event, newSession) => {
        setSession(newSession)
        
        if (event === 'SIGNED_OUT') {
          console.log('SIGNED_OUT')
          // router.push('/login') // Redirigir al cerrar sesión
        }

        if (event === 'TOKEN_REFRESHED') {
          console.log('Token renovado') // Opcional: para debug
        }
      }
    )

    // 3. Cleanup: Eliminar suscripción al desmontar
    return () => {
      authListener?.subscription.unsubscribe()
    }
  }, [router])

  // 4. Interceptor de errores globales
  useEffect(() => {
    const channel = db
      .channel('error-handler')
      .on('error', (error) => {
        if (error.code === 'PGRST301' || error.message.includes('JWT')) {
          console.log('Token expirado o inválido')
          // db.auth.signOut() // Cerrar sesión si el JWT expira
        }
      })
      .subscribe()

    return () => {
      channel.unsubscribe()
    }
  }, [])

  return { session }
}