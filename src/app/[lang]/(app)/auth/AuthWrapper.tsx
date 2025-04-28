'use client'

import React, { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react'
import Link from 'next/link'
import { useAuthStore } from "@/infraestructure/stores/authStore"

type NextLinkProps = ComponentPropsWithoutRef<typeof Link>

interface AuthWrapperProps<T extends ElementType> {
  as?: T
  children: ReactNode
  onClick?: () => void
  className?: string
  authRequired?: boolean
  onUnauthenticated?: () => void
  // Props específicas para Link
  href?: string
}//  & (T extends typeof Link ? NextLinkProps : ComponentPropsWithoutRef<T>)


const AuthWrapper = <T extends ElementType | typeof Link = 'button'>({
  as,
  children,
  onClick,
  className = '',
  authRequired = false,
  onUnauthenticated,
  href,
  ...props
}: AuthWrapperProps<T>) => {
  const { user, isLoggedIn, setAuthModal } = useAuthStore()

  const Component = as || 'button'

  const handleClick = (e?: React.MouseEvent) => {
    if (authRequired && !user && !isLoggedIn) {
      e?.preventDefault()
      setAuthModal({
        open: true,
        type: 'signin'
      })
    }
    onClick?.()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  // Si es un Link de Next.js
  // if (Component === Link) {
  //   return (
  //     <Link
  //       href={href || '#'}
  //       onClick={(e) => !handleClick(e) && e.preventDefault()}
  //       className={className}
  //       {...props as NextLinkProps}
  //     >
  //       {children}
  //     </Link>
  //   )
  // }

  // Para otros elementos
  return (
    <Component
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={className}
      role={as === 'button' ? undefined : 'button'}
      tabIndex={as === 'button' ? undefined : 0}
      {...props as ComponentPropsWithoutRef<T>}
    >
      {children}
    </Component>
  )
}

export { AuthWrapper}
