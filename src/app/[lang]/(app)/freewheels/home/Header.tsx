'use client'

import React from 'react'
import { useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/presentation/ds/button"
import { Icon } from "@/presentation/ds/icon"
import { User, Wrench } from "lucide-react"
import Link from "next/link"
import { useRouter } from 'next/navigation'
// import { Typography } from "@/presentation/ds/typography"
import { usePositionScroll } from '@/presentation/hooks/usePositionScroll'
import { Input } from "@/presentation/ds/input"
import { AppController } from "@/application/controllers/appController"
import { DropDown } from "@/presentation/components/dropdown-menu"
import { MenuItem } from "@/application/use-cases/menuUseCase"
import { Modal } from "@/presentation/components/modal"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "@/presentation/ds/dropdown-menu"
import { Typography } from '@/presentation/ds/typography'

const appController = new AppController()

export type HeaderProps = {
  // children: React.ReactNode
}

const Header: React.FC<HeaderProps> = () => {
  const router = useRouter()
  const { isSmall } = usePositionScroll()
  const { theme, setTheme } = useTheme()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems = appController.getMenu()

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

  const handleMenu = () => {
    console.log("A VER")
    // router.push(`/es/auth2/signin`)
    // setIsMenuOpen(true)
    // setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <header className={`transition-all duration-300 ${isSmall ? 'border-b border-grey-50' : ''} h-28 flex items-center`}>

        <div className="w-full px-10 mx-auto flex justify-between">

          <div className="flex items-center">
            <Link href={'/es'}>
              <div className="text-primary"><Wrench className="h-10 w-10" /></div>
            </Link>
          </div>

          <div className="flex items-center space-x-4">

            <Typography variant='h4'>
              ¿Todo listo para poner tu FreeWheels?
            </Typography>
            
            <Button variant="default" className="hidden md:flex h-10">
              <Icon name='PlusIcon' className="text-background" />
              Empezar
            </Button>
          </div>

        </div>

      </header>
    </>
  )
}

export { Header }
