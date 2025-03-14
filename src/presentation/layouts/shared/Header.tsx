'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from "next-themes"
import { Button } from "@/presentation/ui/atoms/button"
import { Icon } from "@/presentation/ui/atoms/icon"
import { Avatar, AvatarFallback, AvatarImage } from "@/presentation/ui/atoms/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/presentation/ui/atoms/dropdown-menu"
import { Wrench } from "lucide-react"
import Link from "next/link"
import { Typography } from "@/presentation/ui/atoms/typography"

const Header = () => {
  const [isSmall, setIsSmall] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSmall(true)
      } else {
        setIsSmall(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            <Button variant="ghost" className="hidden md:flex">
              Acerca de nosotros
            </Button>
          </Link>

          <Link href={'/es/auth/signup'}>
            <Button variant="default" className="hidden md:flex">
              Subí tu WorkShop
              <Wrench />
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="rounded-full border border-gray-300 p-2">
                <div className="flex items-center space-x-2">
                  <Icon name="HamburgerMenuIcon" className="h-5 w-5" />
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.pngd" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[12rem]">
              <DropdownMenuItem>Regístrate</DropdownMenuItem>
              <DropdownMenuItem>Iniciar sesión</DropdownMenuItem>
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
    </header>
  )
}

export { Header }
