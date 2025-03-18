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
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/presentation/ds/dropdown-menu"
import { Typography } from '@/presentation/ds/typography'

const appController = new AppController()

export type HeaderProps = {
  // children: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({
  
}) => {
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
    setIsMenuOpen(true)
    // setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <header className={`border-b border-grey-50 transition-all duration-300 ${isSmall ? 'h-16' : 'h-28'} flex items-center`}>
        <div className="w-full px-10 mx-auto flex justify-between">

          <div className="flex items-center flex-nowrap">
            <div className="text-primary flex w-full"><Wrench className="h-10 w-10" /></div>
            <Typography className='w-full flex text-primary ml-2'>FreeWheels</Typography>
          </div>

          <div className="flex items-center space-x-4">

            <div className="flex items-center border rounded-full shadow-sm overflow-hidden min-w-[500px] w-auto">
              <Input
                type="text"
                placeholder="¿Qué estas buscando?"
                className={`flex ${isSmall ? 'h-10' : 'h-12'} items-center px-4 py-4 border-none focus:ring-0 focus:outline-none`}
              />
              <button className={`text-white ${isSmall ? 'px-2 py-2' : 'px-6 py-2'} mr-1 transition-all duration-300 rounded-full bg-primary`}>
                <Icon name="MagnifyingGlassIcon" className="text-background w-5 h-5" />
              </button>
            </div>

            <Link href={'/es/about-us'}>
              <Button variant="ghost" className="hidden md:flex h-10">
                Acerca de nosotros
              </Button>
            </Link>

            <Link href={'/es/freewheels/home'}>
              <Button variant="default" className="hidden md:flex h-10">
                Subí tu FreeWheels
                <Wrench className='h-5 w-5' />
              </Button>
            </Link>

            <Button variant="ghost" onClick={handleMenu} className="rounded-full border border-gray-300 p-2 h-10">
              <div className="flex items-center space-x-2">
                <Icon name="HamburgerMenuIcon" className="h-5 w-5" />
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.pngd" alt="@shadcn" />
                  <AvatarFallback>
                    <User />
                  </AvatarFallback>
                </Avatar>
              </div>
            </Button>

            <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DropdownMenuContent className='z-50'>
                {formatMenu().map((item: MenuItem, key: number) => {
                  return (
                    <React.Fragment key={`items-menu-${key}`}>
                      {item?.separator ? (
                        <DropdownMenuSeparator />
                      ) : (
                        <DropdownMenuItem onClick={(e) => {
                            e.preventDefault()
                            handleItemClick(item)
                          }}>
                          <div className="flex flex-wrap justify-between w-full items-center">
                            <Typography>
                              {item?.label}
                            </Typography>
                            {item.icon && (
                              <div className="text-foreground"><Icon name={item.icon} /></div>
                            )}
                          </div>
                        </DropdownMenuItem>
                      )}
                    </React.Fragment>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>

          </div>
        </div>
      </header>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} title="Iniciá sesión o registrate" onOpenChange={() => setIsModalOpen(false)}>
          <div />
        </Modal>
      )}
    </>
  )
}

export { Header }
