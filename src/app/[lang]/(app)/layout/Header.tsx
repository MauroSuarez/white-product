'use client'

import React, { useEffect, useState, useMemo, useContext } from 'react'
import { useTheme } from "next-themes"
import { Bell, ScanSearch, Wrench } from "lucide-react"
import { useRouter } from 'next/navigation'
import { usePositionScroll } from '@/presentation/hooks/usePositionScroll'
import { Typography } from '@/presentation/ds/typography'
import { CustomModal } from '@/presentation/components/custom-modal'
import { AuthForm, TypeAuthForm } from '../auth/Form'
import { HeaderDefault } from './HeaderDefault'
import { useAuthStore } from '@/infraestructure/stores/authStore'
import { fetchSignIn, fetchSignOut, fetchSignUp } from '@/core/domain/services/fetchAuth'
import { useCurrentPath } from '@/presentation/hooks/useCurrentPath'
import { useCustomQuery } from '@/presentation/hooks/useCustomQuery'
import { ISignIn, ISignUp } from '@/core/domain/entities/Auth'
import { APPLICATION } from '@/config/constants'
import { Icon } from '@/presentation/ds/icon'
import { fetchWorkshopExistsUserId } from '@/core/domain/services/fetchWorkshop'
import { BreakpointDeviceContext } from '@/presentation/providers/BreakPointDeviceProvider'
import { useCustomMutation } from '@/presentation/hooks/useCustomMutation'
import { toast } from "@/presentation/hooks/useToast"
import { CustomAlert } from '@/presentation/components/custom-alert'

// import { cn } from "@/presentation/utils/uiHelpers"
// {cn("mb-1 font-medium leading-none tracking-tight", className)}


export type HeaderTypeProps = 'basic' | 'default' | 'detail' | 'empty' | 'freewheel'

export type HeaderProps = {
  type?: HeaderTypeProps
  children?: React.ReactNode
}

// type HeaderComponent = React.FC<any>

// type HeaderDictionary = {
//   [key in HeaderTypeProps]: HeaderComponent
// }

// const headers: HeaderDictionary = {
//   'empty': () => <></>,
//   'basic': HeaderBasic,
//   'default': HeaderDefault,
//   'detail': () => <></>,
//   'freewheel': () => <></>,
// }

const Header: React.FC<HeaderProps> = ({
  type = 'default',
  children
}) => {
  const router = useRouter()
  const { user, isLoggedIn, token, clearUser, isAuthModal, setIsAuthModal, setUser, setToken } = useAuthStore()
  const currentPath = useCurrentPath()
  const { isSmall } = usePositionScroll()
  const { theme, setTheme } = useTheme()
  const [typeForm, setTypeForm] = useState<TypeAuthForm>('reset')  
  const { data: existsWs = [], isLoading: isLoadingWS } = useCustomQuery(
    () => fetchWorkshopExistsUserId(user?.id!),
    ['fetchWorkshopExistsUserId', user?.id],
    { enabled: !!user?.id}
  )
  const signInMutation = useCustomMutation(fetchSignIn, ['signin'], { enabled: false })
  const signOutMutation = useCustomMutation(fetchSignOut, ['signOut'], { enabled: false })
  const signUpMutation = useCustomMutation(fetchSignUp, ['signUp'], { enabled: false })
  const contextDevice = useContext(BreakpointDeviceContext)

  const isLoading = signInMutation.isPending || signOutMutation.isPending

  const handleFormSignIn = async (data: ISignIn) => {
    signInMutation.mutateAsync(data)
      .then((resp: any) => {
        setUser(resp?.user)
        setToken(resp?.access_token)
        toast({
          variant: "default",
          title: "Bienvenido de nuevo",
          // description: "There was a problem with your request.",
        })
        setIsAuthModal(false)
      }).catch((e) => {})
      .finally(() => {})
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
    signOutMutation.mutateAsync()
      .then(() => {
        clearUser()
        toast({
          variant: "default",
          title: "Hasta luego, nos vemos pronto",
          // description: "There was a problem with your request.",
        })
        handleNavigate('')
      })
  }

  const handleSearch = (searchQuery: string) => {
    console.log(searchQuery)
    handleNavigate(`/search?q=${encodeURIComponent(searchQuery)}`)
  }

  const handleNavigate = (path?: string) => {
    router.push(`/es/${path}`)
  }

  const handleChangeTheme = () => theme == "dark" ? setTheme("light") : setTheme("dark")


  const handleTypeForm = (type: TypeAuthForm) => {
    setTypeForm(type)
  }

  useEffect(() => {
    // if(!user && currentPath === '/es/freewheels/home')
    //   handleNavigate('')
  }, [])

  // const ComponentHeader = headers[type]

  const menu = useMemo(() => {
    const boothItem = { label: 'Tema', icon: theme === "light" ? 'MoonIcon' : 'SunIcon', onClick: handleChangeTheme, visible: true }
    if(type === 'basic') return []
    if (isLoggedIn) {
      return [
        { label: 'Mensajes', path: '/messages', visible: true },
        { label: 'Mi agenda', path: '/reservations', visible: true },
        { label: 'Favoritos', path: '/favorites', visible: true },
        { separator: true },
        { label: 'Poné tu FreeWheels', path: '/freewheels', visible: true },
        { label: 'Invita un FreeWheels', path: '/invite', visible: true },
        { label: 'Cuenta', path: '/account', visible: true },
        { separator: true },
        { ...boothItem },
        { label: 'Acerca de nosotros', path: '/about-us', onClick: (path?: string) => handleNavigate(path), visible: true },
        { label: 'Centro de ayuda', path: '/contact', onClick: undefined, visible: false },
        { label: 'Cerrar sesión', onClick: handleLogout, visible: true },
      ]
    } else {
      return [
        { label: 'Iniciar sesión', onClick: () => { setIsAuthModal(true), setTypeForm('signin') }, visible: true },
        { label: 'Registrate', onClick: () => { setIsAuthModal(true), setTypeForm('signup') }, visible: true },
        { separator: true },
        { label: 'Poné tu FreeWheels', path: '/freewheels', onClick: (path?: string) => handleNavigate(path), visible: true },
        { label: 'Invita un FreeWheels', path: '/invite', visible: true },
        { separator: true },
        { ...boothItem },
        { label: 'Acerca de nosotros', path: '/about-us', onClick: (path: string) => handleNavigate(path), visible: true },
        { label: 'Centro de ayuda', path: '/contact', onClick: () => {}, visible: true },
      ]
    }
  }, [isLoggedIn, theme])

  const buttons = useMemo(() => {
    return {
      'empty': [],
      'basic': [
        { label: 'Empezar', variant: 'default', icon: <Icon name='PlusIcon' className="h-6 w-6 ml-2 text-background" />, classes: 'hidden md:flex h-10 min-w-[100px]', path: '/scan', onClick: !isLoggedIn ? () => setIsAuthModal(true) : () => handleNavigate('/freewheels/onboarding'), visible: true },
      ],
      'default': [
        { label: 'Acerca de nosotros', variant: 'ghost', classes: 'hidden sm:hidden md:hidden lg:block h-10 min-w-[100px]', path: '/about-us', onClick: (path: string) => handleNavigate(path), visible: type !== 'default' },
        { label: 'Patetene Scan', variant: 'gradient', icon: <ScanSearch className='h-6 w-6 ml-2' />, classes: 'hidden md:flex h-10 min-w-[100px]', path: '/scan', onClick: (path: string) => handleNavigate(path), visible: true },
        { label: `Abrí tu ${APPLICATION.appName}`, variant: 'default', icon: <Wrench className='h-6 w-6 ml-2' />, classes: 'hidden md:flex h-10', path: '/freewheels', onClick: (path: string) => handleNavigate(path), visible: existsWs?.length === 0 },
        { label: `Modo ${APPLICATION.appName}`, variant: 'outline', classes: 'hidden md:flex h-10', path: '/freewheels/home', onClick: (path: string) => handleNavigate(path), visible: existsWs?.length > 0 && isLoggedIn }
      ],
      'detail': [],
      'freewheel': [
        { icon: <Bell className="h-12 w-12 text-foreground" />, onClick: () => {}, visible: true, classes: 'rounded-full h-14 w-14', variant: 'ghost' }
      ],
    }
  }, [isLoggedIn, existsWs])

  const texts = useMemo(() => {
    return {
      'empty': [],
      'basic': [
        { label: '¿Todo listo para poner tu FreeWheels?', variant: 'h5', classes: 'font-semibold', visible: true },
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

  const menuAdmin = useMemo(() => {
    return {
      'empty': [],
      'detail': [],
      'basic': [],
      'default': [],
      'freewheel': [
        { label: 'Hoy', variant: 'muted', visible: true },
        { label: 'Reservas', variant: 'muted', visible: true },
        { label: 'FreeWheels', variant: 'muted', visible: true },
        { label: 'Mensajes', variant: 'muted', visible: true },
      ],
    }
  }, [])

  const heightHeaderBar = type === 'default' ? isSmall ? 'h-16' : 'h-28' : type ===  'detail' ? 'h-16' : 'h-auto py-4'

  return (
    <>
      <header className={`border-b border-grey-50 transition-all duration-300 ${heightHeaderBar} flex w-full items-center`}>
        <div className="mx-10 items-center flex w-full">

          <div onClick={() => handleNavigate('')} className="flex justify-start w-1/5">
            <div className="flex items-center justify-center flex-wrap transition-all duration-300 cursor-pointer">
              <div className="text-primary justify-center flex w-full"><Wrench className="h-10 w-10 md:h-10 md:w-10 lg:w-10 md:h-10" /></div>
              {!isSmall && <Typography className={`w-auto flex text-primary hidden md:block lg:block`}>{APPLICATION.appName}</Typography>}
            </div>
          </div>

          {children ?? (
            <HeaderDefault
              isLoading={isLoadingWS}
              user={user || undefined}
              itemsButtons={buttons[type] || []}
              itemsTexts={texts[type] || []}
              itemsMenu={menu || []}
              itemsAdminMenu={menuAdmin[type] || []}
              handleSearch={search[type] ? handleSearch : undefined}
            />
          )}
        </div>
      </header>

      <CustomModal
        isOpen={isAuthModal}
        onClose={() => setIsAuthModal(false)}
        title={`${typeForm === 'reset' ? 'Recupear contraseña' : typeForm === 'signin' ? 'Inicia sesión' : 'Registrate'}`}
      >
        <AuthForm
          isLoading={isLoading}
          handleSignIn={handleFormSignIn}
          handleSignUp={handleFormSignUp}
          handleResetPassword={handleFormResetPassword}
          handleTypeForm={handleTypeForm}
          typeForm={typeForm}
          alert={(
            <CustomAlert
              variant={'default'}
              icon='CheckCircledIcon'
              className='border border-success bg-success/30'
              title='Un éxito, salio todo bien!'
              description='Te enviamos un email de confirmación'
            />
          )}
        />
      </CustomModal>
    </>
  )
}

export { Header }
