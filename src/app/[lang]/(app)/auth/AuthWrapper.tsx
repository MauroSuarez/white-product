
import React, { useEffect } from 'react'
import { useAuthStore } from "@/infraestructure/stores/authStore"

type AuthWrapperProps = () => {
  authAction?: () => void
  children: React.ReactNode
}

const AuthWrapper = ({
  authAction,
  children,
}: AuthWrapperProps) => {
  const user = useAuthStore((state) => state)
  return (
    <div>estoy logueado</div>
  )
}

export { AuthWrapper}
