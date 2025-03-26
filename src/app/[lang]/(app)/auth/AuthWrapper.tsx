
import React, { useEffect } from 'react'
import { useAuthStore } from "@/infraestructure/stores/authStore"

type AuthWrapperProps = () => {
  action?: () => void
  children: React.ReactNode
}

const AuthWrapper = ({
  action,
  children,
}: AuthWrapperProps) => {
  const { user, isLoggedIn, setIsAuthModal } = useAuthStore()
  return (
    <div>estoy logueado</div>
  )
}

export { AuthWrapper}
