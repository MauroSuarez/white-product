'use client'

import React from 'react'
import { useTheme } from "next-themes"
import { Bell, ScanSearch, Wrench } from "lucide-react"
import { useRouter } from 'next/navigation'
import { usePositionScroll } from '@/presentation/hooks/usePositionScroll'
import { Typography } from '@/presentation/ds/typography'
import { CustomModal } from '@/presentation/components/custom-modal'
import { AuthForm, TypeAuthForm } from '../auth/Form'
import { HeaderDefault } from './HeaderDefault'
import { useAuthStore } from '@/infraestructure/stores/authStore'
import { fetchResetPassword, fetchSignIn, fetchSignOut, fetchSignUp } from '@/core/domain/services/fetchAuth'
import { useCurrentPath } from '@/presentation/hooks/useCurrentPath'
import { useCustomQuery } from '@/presentation/hooks/useCustomQuery'
import { ISignIn, ISignUp } from '@/core/domain/entities/Auth'
import { APPLICATION } from '@/config/constants'
import { Icon } from '@/presentation/ds/icon'
import { fetchWorkshopExistsUserId } from '@/core/domain/services/fetchWorkshop'
import { BreakpointDeviceContext } from '@/presentation/providers/BreakPointDeviceProvider'
import { useCustomMutation } from '@/presentation/hooks/useCustomMutation'
import { NotificationDot } from '@/presentation/components/notification-dot'
import { useDebounce } from '@/presentation/hooks/useDebounce'
import { toast } from "@/presentation/hooks/useToast"


import { TUserRol } from "@/core/domain/entities/UserRol"
import { BrandLogo } from '@/presentation/components/brand-logo'
import { SearchBox } from '@/presentation/components/searchbox'

export type HeaderItemProps<T> = {
  id: string
  visible?: boolean
  label?: string
  path?: string
  format?: (value: T, allValues?: T[]) => React.ReactNode
}

export type HeaderProps<T> = {
  userRol: TUserRol
  headerItems?: HeaderItemProps<T>[]
  showSearchBar?: boolean
  handleSearch?: (searchQuery: string) => void
  brandLogo?: 'primary' | 'secondary'
  isLoading?: boolean
}

export function Header<T>({
  userRol,
  headerItems = [],
  showSearchBar = true,
  handleSearch,
  brandLogo,
  isLoading = false,
}: HeaderProps<T>) {
  const { isSmall } = usePositionScroll()
  
  const handleOnSearch = (searchQuery: string) => {
    handleSearch && handleSearch(searchQuery.trim())
  };

  const heightHeaderBar = isSmall ? 'h-16' : 'h-28'
  const containerButtons = showSearchBar ? 'w-2/5' : 'w-full'
  return (
    <>
      <header className={`border-b border-grey-50 transition-all duration-300 ${heightHeaderBar} flex w-full items-center`}>
        <div className="mx-10 items-center flex w-full">

          <div className="flex justify-start w-1/5 border border-red-500">
            <BrandLogo
              variant='secondary'
              onClick={() => {}}
            />
          </div>

          {showSearchBar && (
            <div className='flex justify-center w-2/5 border border-blue-500'>
              <SearchBox
                handleSearch={handleOnSearch}
                placeHolder='¿Qué servicio estas buscando para tu vehículo?'
                classNameBox={isSmall ? 'h-10' : 'h-12'}
                classNameIcon={isSmall ? 'px-2 py-2' : 'px-6 py-2'}
              />
            </div>
          )}

          <div className={`flex justify-end items-center ${containerButtons} space-x-2 sm:space-x-4 border border-black`}>
            {headerItems.map((item: any, i: number) => {
              return item.visible ? (
                <React.Fragment key={`item-header-${i}`}>
                  {typeof item.format === 'function' ? item.format({ label: item?.label, path: item?.path }) : item.label}
                </React.Fragment>
              ) : null}
            )}
          </div>

        </div>
      </header>
    </>
  )
}
