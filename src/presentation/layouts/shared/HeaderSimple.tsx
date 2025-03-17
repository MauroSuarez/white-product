'use client'

import { useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/presentation/ds/button"
import { Icon } from "@/presentation/ds/icon"
import { Wrench, User } from "lucide-react"
import Link from "next/link"
import { Typography } from "@/presentation/ds/typography"
import { usePositionScroll } from '@/presentation/hooks/usePositionScroll'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/presentation/ds/dialog"
import { Input } from "@/presentation/ds/input"

const HeaderSimple = () => {
  const { isSmall } = usePositionScroll()
  const { theme, setTheme } = useTheme()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLoginClick = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
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
  )
}

export { HeaderSimple }
