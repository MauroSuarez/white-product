'use client'

import { useEffect, useState } from 'react'
import { fetchWorkshopExistsUserId } from "@/core/domain/services/fetchWorkshop"
import { useCustomQuery } from "./useCustomQuery"
import { TUserRol } from '@/core/domain/entities/UserRol'
import { User } from '@/core/domain/entities/User'

export function useRolUser(user: User | null, isLoggedIn: boolean) {
  const [userRol, setUserRol] = useState<TUserRol>('GUEST')
  const { data: existsWs = [], isLoading: isLoadingWS } = useCustomQuery(
    () => fetchWorkshopExistsUserId(user?.id!),
    ['fetchWorkshopExistsUserId', user?.id],
    { enabled: !!user?.id}
  )

  useEffect(() => {
    if(user && isLoggedIn) {
      if(!existsWs)
        setUserRol('AUTHENTICATED')
      else
        setUserRol('FREEWHEELS')
    } else {
      setUserRol('GUEST')
    }
  }, [user, existsWs])

  return { userRol }
}