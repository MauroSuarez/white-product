'use client'

import { useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/presentation/ds/button"
import { Icon } from "@/presentation/ds/icon"
import { Wrench } from "lucide-react"
import Link from "next/link"
import { Typography } from "@/presentation/ds/typography"
import { usePositionScroll } from '@/presentation/hooks/usePositionScroll'
import { Input } from "@/presentation/ds/input"
import { AppController } from "@/application/controllers/appController"
import { DropDown } from "@/presentation/components/dropdown-menu"
import { MenuItem } from "@/application/use-cases/menuUseCase"

const appController = new AppController()

const Header = () => {
  const { isSmall } = usePositionScroll()
  const { theme, setTheme } = useTheme()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const menuItems = appController.getMenu()

  const formatMenu = () => menuItems.map((item) => {
    if(item.action === 'theme') {
      return { label: 'Tema', action: 'theme', icon: theme === "light" ? 'MoonIcon' : 'SunIcon'}
    }

    return item
  }) as MenuItem[]

  const handleItemClick = (item: MenuItem) => {
    if(item.action === 'theme') {
      console.log("ENTRE")
      theme == "dark" ? setTheme("light") : setTheme("dark")
    }
    
    // console.log(item, 'ITEM')
  }

  return (
    <header className={`border-b border-grey-50 transition-all duration-300 ${isSmall ? 'h-16' : 'h-28'} flex items-center`}>
      <div className="w-full px-10 mx-auto flex justify-between">

        <div className="flex items-center">
          <div className="text-primary"><Wrench className="h-10 w-10" /></div>
        </div>

        <div className="flex items-center space-x-4">

          <div className="flex items-center border rounded-full shadow-sm overflow-hidden min-w-[500px] w-auto">
            <Input
              type="text"
              placeholder="¿A dónde vas?"
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

          <DropDown items={formatMenu()} onClick={handleItemClick} />

        </div>
      </div>
    </header>
  )
}

export { Header }
