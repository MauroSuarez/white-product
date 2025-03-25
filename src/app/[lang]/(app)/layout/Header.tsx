'use client'

import React, { useState, useMemo } from 'react'
import { useTheme } from "next-themes"
import { ScanSearch, Wrench } from "lucide-react"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { usePositionScroll } from '@/presentation/hooks/usePositionScroll'
import { Typography } from '@/presentation/ds/typography'
import { CustomModal } from '@/presentation/components/custom-modal'
import { AuthForm, TypeAuthForm } from '../auth/Form'
import { HeaderDefault } from './HeaderDefault'
import { HeaderBasic } from './HeaderBasic'
import { useAuthStore } from '@/infraestructure/stores/authStore'
import { useSignIn } from '@/presentation/hooks/useSignIn'
import { useCurrentPath } from '@/presentation/hooks/useCurrentPath'
import { useSignOut } from '@/presentation/hooks/useSignOut'
import { ISignIn, ISignUp } from '@/core/domain/interfaces/Auth'
import { APPLICATION } from '@/config/constants'
import { Icon } from '@/presentation/ds/icon'

// import { cn } from "@/presentation/utils/uiHelpers"
// {cn("mb-1 font-medium leading-none tracking-tight", className)}


export type HeaderTypeProps = 'basic' | 'default' | 'detail' | 'empty' | 'freewheel'

export type HeaderProps = {
  type?: HeaderTypeProps
  children?: React.ReactNode
}

type HeaderComponent = React.FC<any>

type HeaderDictionary = {
  [key in HeaderTypeProps]: HeaderComponent
}

const headers: HeaderDictionary = {
  'empty': () => <></>,
  'basic': HeaderBasic,
  'default': HeaderDefault,
  'detail': () => <></>,
  'freewheel': () => <></>,
}

const Header: React.FC<HeaderProps> = ({
  type = 'default',
  children
}) => {
  const router = useRouter()
  const { user, isLoggedIn, clearUser } = useAuthStore()
  const currentPath = useCurrentPath()
  const { isSmall } = usePositionScroll()
  const { theme, setTheme } = useTheme()
  const { mutate: signin, isSuccess: isSuccessSignIn, isPending: isPendingSignin, error } = useSignIn()
  const { mutate: logout, isPending: isPedingLogout } = useSignOut()
  const [typeForm, setTypeForm] = useState<TypeAuthForm>('signin')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const isLoading = isPendingSignin || isPedingLogout

  const handleFormSignIn = async (data: ISignIn) => {
    signin(data)
    if(currentPath === '/es/freewheels')
      router.push('/es/freewhels/onboarding')
  }

  const handleFormSignUp = async (data: ISignUp) => {
    // signin(data)
    // if(currentPath === '/es/freewheels')
    //   router.push('/es/freewhels/onboarding')
  }

  const handleFormResetPassword = async (email: string) => {
    // signin(data)
    // if(currentPath === '/es/freewheels')
    //   router.push('/es/freewhels/onboarding')
  }

  const handleLogout = () => {
    logout()
  }

  const handleSearch = (value: string) => {
    console.log(value)
  }

  const handleNavigate = (path?: string) => {
    router.push(`/es/${path}`)
  }

  const handleChangeTheme = () => theme == "dark" ? setTheme("light") : setTheme("dark")


  const handleTypeForm = (type: TypeAuthForm) => {
    setTypeForm(type)
  }

  // const ComponentHeader = headers[type]

  const menu = useMemo(() => {
    const boothItem = { label: 'Tema', icon: theme === "light" ? 'MoonIcon' : 'SunIcon', onClick: handleChangeTheme }
    if (isLoggedIn) {
      return [
        { label: 'Mensajes', path: '/messages' },
        { label: 'Mi agenda', path: '/reservations' },
        { label: 'Favoritos', path: '/favorites' },
        { separator: true },
        { label: 'Poné tu FreeWheels', path: '/freewheels' },
        { label: 'Invita un FreeWheels', path: '/invite' },
        { label: 'Cuenta', path: '/account' },
        { separator: true },
        { ...boothItem },
        { label: 'Acerca de nosotros', path: '/about-us', onClick: (path?: string) => handleNavigate(path) },
        { label: 'Centro de ayuda', path: '/contact', onClick: undefined },
        { label: 'Cerrar sesión', onClick: handleLogout },
      ]
    } else {
      return [
        { label: 'Iniciar sesión', onClick: () => setIsModalOpen(true) },
        { label: 'Registrate', onClick: () => setIsModalOpen(true) },
        { separator: true },
        { label: 'Poné tu FreeWheels', path: '/freewheels', onClick: (path?: string) => handleNavigate(path) },
        { label: 'Invita un FreeWheels', path: '/invite' },
        { separator: true },
        { ...boothItem },
        { label: 'Acerca de nosotros', path: '/about-us', onClick: (path: string) => handleNavigate(path) },
        { label: 'Centro de ayuda', path: '/contact', onClick: () => {} },
      ]
    }
  }, [isLoggedIn, theme])

  const buttons = useMemo(() => {
    return {
      'empty': [],
      'basic': [
        { label: 'Empezar', variant: 'default', icon: <Icon name='PlusIcon' className="h-6 w-6 ml-2 text-background" />, classes: 'hidden md:flex h-10 min-w-[100px]', path: '/scan', onClick: () => setIsModalOpen(true), visible: true },
      ],
      'default': [
        { label: 'Patetene Scan', variant: 'gradient', icon: <ScanSearch className='h-6 w-6 ml-2' />, classes: 'hidden md:flex h-10 min-w-[100px]', path: '/scan', onClick: (path: string) => handleNavigate(path), visible: true },
        { label: `Abrí tu ${APPLICATION.appName}`, variant: 'default', icon: <Wrench className='h-6 w-6 ml-2' />, classes: 'hidden md:flex h-10', path: '/freewheels', onClick: (path: string) => handleNavigate(path), visible: true },
        { label: `Modo ${APPLICATION.appName}`, variant: 'ghost', classes: 'hidden md:flex h-10', path: '/freewheels', onClick: (path: string) => handleNavigate(path), visible: true }
      ],
      'detail': [],
      'freewheel': [],
    }
  }, [isLoggedIn])

  const texts = useMemo(() => {
    return {
      'empty': [],
      'basic': [
        { label: '¿Todo listo para poner tu FreeWheels?', variant: 'h4', visible: true },
      ],
      'default': [],
      'detail': [],
      'freewheel': [],
    }
  }, [isLoggedIn])

  const search = {
    'empty': false,
    'basic': false,
    'default': true,
    'detail': true,
    'freewheel': false,
  }

  const heightHeaderBar = type === 'default' ? isSmall ? 'h-16' : 'h-28' : type ===  'detail' ? 'h-16' : 'h-auto py-4'

  return (
    <>
      <header className={`border-b border-grey-50 transition-all duration-300 ${heightHeaderBar} flex items-center`}>
        <div className="w-full px-10 mx-auto flex justify-between">

          <Link href={'/es'} className="flex items-center">
            <div className="flex items-center justify-center flex-wrap transition-all duration-300">
              <div className="text-primary justify-center flex w-full"><Wrench className="h-10 w-10" /></div>
              {!isSmall && <Typography className={`w-auto flex text-primary`}>{APPLICATION.appName}</Typography>}
            </div>
          </Link>

          <div className="flex items-center space-x-4">

            {children ?? (
              <HeaderDefault
                user={user || undefined}
                itemsButtons={buttons[type] || []}
                itemsTexts={texts[type] || []}
                itemsMenu={menu || []}
                handleSearch={search[type] ? handleSearch : undefined}
              />
              // <ComponentHeader
              //   user={user}
              //   itemsButtons={buttons[type] || []}
              //   itemsMenu={menu || []}
              //   handleSearch={handleSearch}
              // />
            )}

          </div>

        </div>
      </header>

      <CustomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${typeForm === 'reset' ? 'Recupear contraseña' : typeForm === 'signin' ? 'Inicia sesión' : 'Registrate'}`}
      >
        <AuthForm
          isLoading={isLoading}
          handleSignIn={handleFormSignIn}
          handleSignUp={handleFormSignUp}
          handleResetPassword={handleFormResetPassword}
          handleTypeForm={handleTypeForm}
          typeForm={typeForm}
        />
      </CustomModal>
    </>
  )
}

export { Header }
