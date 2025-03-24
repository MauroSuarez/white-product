'use client'

import React from 'react'
import { useState } from "react"
import { useTheme } from "next-themes"
import { User, Wrench, ScanSearch } from "lucide-react"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { usePositionScroll } from '@/presentation/hooks/usePositionScroll'
import { MenuController } from "@/application/controllers/menuController"
import { MenuItem } from "@/application/use-cases/menuUseCase"
import { Typography } from '@/presentation/ds/typography'
import { CustomModal } from '@/presentation/components/custom-modal'
import { AuthController } from '@/application/controllers/authController'
import { AuthForm } from '../auth/Form'
import { HeaderDefault } from './HeaderDefault'
import { HeaderBasic } from './HeaderBasic'
import { useAuthStore } from '@/infraestructure/stores/authStore'

// import { cn } from "@/presentation/utils/uiHelpers"
// {cn("mb-1 font-medium leading-none tracking-tight", className)}

const authController = new AuthController()
const menuController = new MenuController()

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
  const { user, clearUser } = useAuthStore()
  const { isSmall } = usePositionScroll()
  const { theme, setTheme } = useTheme()
  const [isLoading, setIsLoading] = useState(false)
  const [typeForm, setTypeForm] = useState<string>('signin')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const menuItems = menuController.getMenu()

  const ComponentHeader = headers[type]

  const formatMenu = () => menuItems.map((item) => {
    if(item.action === 'theme') {
      return { label: 'Tema', action: 'theme', icon: theme === "light" ? 'MoonIcon' : 'SunIcon'}
    }

    return item
  }) as MenuItem[]

  const handleItemClick = (item: MenuItem) => {
    console.log(item, 'ITEM')
    if(item.action === 'theme')
      theme == "dark" ? setTheme("light") : setTheme("dark")

    if(item.path)
      router.push(`/es/${item.path}`)

    if(item.action === 'signin' || item.action === 'signup')
      setIsModalOpen(!isModalOpen)

    if(item.action === 'logout') {
      clearUser()
      window.location.reload()
    }
  }

  const handleChangeMode = (path: any) => {
    console.log(path)
    router.push(path)
  }

  const handleTypeForm = (type: string) => {
    setTypeForm(type)
  }

  const handleSubmitAuth = async (data: any) => {
    setIsLoading(true)
    try {
      const { success, error } = await authController.handleSignin(data)
      setIsLoading(false)
      setIsModalOpen(false)
      window.location.reload()
    } catch (error) {
      const err = error as Error
      // setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = (value: string) => {
    console.log(value)
  }

  const heightHeaderBar = type === 'default' ? isSmall ? 'h-16' : 'h-28' : type ===  'detail' ? 'h-16' : 'h-auto py-4'

  return (
    <>
      <header className={`border-b border-grey-50 transition-all duration-300 ${heightHeaderBar} flex items-center`}>
        <div className="w-full px-10 mx-auto flex justify-between">

          <Link href={'/es'} className="flex items-center">
            <div className="flex items-center justify-center flex-wrap transition-all duration-300">
              <div className="text-primary justify-center flex w-full"><Wrench className="h-10 w-10" /></div>
              {!isSmall && <Typography className={`w-auto flex text-primary`}>FreeWheels</Typography>}
            </div>
          </Link>

          <div className="flex items-center space-x-4">

            {children ?? (
              <ComponentHeader
                user={user}
                itemsMenu={formatMenu() || []}
                handleItemClick={handleItemClick}
                handleChangeMode={handleChangeMode}
              />
            )}

          </div>

        </div>
      </header>

      <CustomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${typeForm === 'reset' ? 'Recupear contraseña' : typeForm === 'signin' ? 'Inicia sesión' : 'Registrate'}`}
      >
        <AuthForm isLoading={isLoading} onSubmit={handleSubmitAuth} handleTypeForm={handleTypeForm} typeForm={typeForm} />
      </CustomModal>
    </>
  )
}

export { Header }
