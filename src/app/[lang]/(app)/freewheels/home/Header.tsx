'use client'

import React from 'react'
import { useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/presentation/ds/button"
import { Icon } from "@/presentation/ds/icon"
import { User, Wrench } from "lucide-react"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { usePositionScroll } from '@/presentation/hooks/usePositionScroll'
import { Typography } from '@/presentation/ds/typography'

export type HeaderProps = {
  // children: React.ReactNode
}

const Header: React.FC<HeaderProps> = () => {
  const router = useRouter()
  const { isSmall } = usePositionScroll()
  const { theme, setTheme } = useTheme()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
