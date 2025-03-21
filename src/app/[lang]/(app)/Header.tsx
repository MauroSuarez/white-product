'use client'

import React from 'react'
import { useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/presentation/ds/button"
import { Icon } from "@/presentation/ds/icon"
import { User, Wrench, ScanSearch } from "lucide-react"
import Link from "next/link"
import { useRouter } from 'next/navigation'
// import { Typography } from "@/presentation/ds/typography"
import { usePositionScroll } from '@/presentation/hooks/usePositionScroll'
import { Input } from "@/presentation/ds/input"
import { MenuController } from "@/application/controllers/menuController"
import { DropDown as DropdownMenu } from "@/presentation/components/dropdown-menu"
import { MenuItem } from "@/application/use-cases/menuUseCase"
import { Modal } from "@/presentation/components/modal"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Typography } from '@/presentation/ds/typography'
import { CustomModal } from '@/presentation/components/custom-modal'
// import { AuthForm } from './Form'

const menuController = new MenuController()

export type HeaderProps = {
  // children: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({}) => {
  const router = useRouter()
  const { isSmall } = usePositionScroll()
  const { theme, setTheme } = useTheme()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const menuItems = menuController.getMenu()

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
    
    // console.log(item, 'ITEM')
  }

  const handleSubmitAuth = (data: any) => {
    console.log(data, "form data")
  }

  return (
    <>
      <header className={`border-b border-grey-50 transition-all duration-300 ${isSmall ? 'h-16' : 'h-28'} flex items-center`}>
        <div className="w-full px-10 mx-auto flex justify-between">

          <Link href={'/es'} className="flex items-center">
            <div className="flex items-center flex-nowrap">
              <div className="text-primary flex w-full"><Wrench className="h-10 w-10" /></div>
              <Typography className='w-full flex text-primary ml-2'>FreeWheels</Typography>
            </div>
          </Link>

          <div className="flex items-center space-x-4">

            <Link href={'/es/about-us'}>
              <Button variant="ghost" className="hidden md:flex h-10">
                Acerca de nosotros
              </Button>
            </Link>

            <div className="flex items-center border rounded-full shadow-sm overflow-hidden min-w-[450px] w-auto">
              <Input
                type="text"
                placeholder="¿Qué servicio estas buscando para tu vehículo?"
                className={`flex ${isSmall ? 'h-10' : 'h-12'} items-center px-4 py-4 border-none focus:ring-0 focus:outline-none`}
              />
              <button className={`text-white ${isSmall ? 'px-2 py-2' : 'px-6 py-2'} mr-1 transition-all duration-300 rounded-full bg-primary`}>
                <Icon name="MagnifyingGlassIcon" className="text-background w-5 h-5" />
              </button>
            </div>

            <Link href={'/es/scan'}>
              <Button variant="gradient" className="hidden md:flex h-10 min-w-[100px]">
                Patente Scan
                <ScanSearch className='h-6 w-6 ml-2' />
              </Button>
            </Link>

            <Link href={'/es/freewheels/home'}>
              <Button variant="default" className="hidden md:flex h-10">
                Subí tu FreeWheels
                <Wrench className='h-5 w-5' />
              </Button>
            </Link>

            <DropdownMenu items={menuItems} onClick={handleItemClick}>
              <div className="rounded-full px-4 border border-gray-300 items-center h-12 flex justify-center cursor-pointer">
                <div className="flex justify-center space-x-2 items-center">
                  <Icon name="HamburgerMenuIcon" className="h-5 w-5 text-foreground" />
                  <Avatar className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <AvatarImage src="https://github.com/shadcn.pngd" alt="@shadcn" />
                    <AvatarFallback>
                      <User className="h-5 w-5 dark:text-background" />
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </DropdownMenu>

          </div>
        </div>
      </header>

      <CustomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title='Inicia sesión o registrate'
      >
        {/* <AuthForm handleSubmit={handleSubmitAuth} type='signin' /> */}
      </CustomModal>
    </>
  )
}

export { Header }
