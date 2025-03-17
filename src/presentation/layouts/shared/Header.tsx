'use client'

import { useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/presentation/ds/button"
import { Icon } from "@/presentation/ds/icon"
import { Avatar, AvatarFallback, AvatarImage } from "@/presentation/ds/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/presentation/ds/dropdown-menu"
import { Wrench, User } from "lucide-react"
import Link from "next/link"
import { Typography } from "@/presentation/ds/typography"
import { usePositionScroll } from '@/presentation/hooks/usePositionScroll'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/presentation/ds/dialog"
import { Input } from "@/presentation/ds/input"

const Header = () => {
  const { isSmall } = usePositionScroll()
  const { theme, setTheme } = useTheme()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLoginClick = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <header className={`border-b border-grey-50 transition-all duration-300 ${
          isSmall ? 'h-16' : 'h-28'
        } flex items-center`}>
      <div className="container mx-auto flex justify-between px-4">

        <div className="flex items-center">
          <div className="text-primary"><Wrench className="h-10 w-10" /></div>
        </div>

        <div className="flex items-center space-x-4">
          <Link href={'/es/aboutus'}>
            <Button variant="ghost" className="hidden md:flex h-10">
              Acerca de nosotros
            </Button>
          </Link>

          <Link href={'/es/workshop'}>
            <Button variant="default" className="hidden md:flex h-10">
              Subí tu WorkShop
              <Wrench className='h-5 w-5' />
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="rounded-full border border-gray-300 p-2 h-10">
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
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[12rem]">
              <DropdownMenuItem onClick={handleLoginClick}>Regístrate</DropdownMenuItem>
              <DropdownMenuItem onClick={handleLoginClick}>Iniciar sesión</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}>
                <div className="flex flex-wrap justify-between w-full">
                  <Typography>Tema</Typography>
                  {theme === "light" ? (
                    <div className="text-foreground"><Icon name="MoonIcon" /></div>
                  ) : (
                    <div className="text-foreground"><Icon name="SunIcon" /></div>
                  )}
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>Acerca de nosotros</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Iniciar sesión</DialogTitle>
            <DialogDescription>Ingresa tus credenciales para acceder a tu cuenta.</DialogDescription>
          </DialogHeader>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input type="email" id="email" placeholder="Ingresa tu email" className="mt-1 w-full" />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <Input type="password" id="password" placeholder="Ingresa tu contraseña" className="mt-1 w-full" />
            </div>

            <Button type="submit" className="w-full">
              Iniciar sesión
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </header>
  )
}

export { Header }
