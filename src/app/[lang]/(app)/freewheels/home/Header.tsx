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
import { CustomModal } from '@/presentation/components/custom-modal'
import { AuthForm } from '../../auth/Form'
import { AuthController } from '@/application/controllers/authController'

export type HeaderProps = {
  // children: React.ReactNode
}

const authController = new AuthController()

const Header: React.FC<HeaderProps> = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [typeForm, setTypeForm] = useState<string>('signin')
  const { isSmall } = usePositionScroll()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleTypeForm = (type: string) => {
    setTypeForm(type)
  }

  const handleSubmitAuth = async (data: any) => {
    setIsLoading(true)
    try {
      const { success, error } = await authController.handleSignin(data)
      setIsLoading(false)
    } catch (error) {
      const err = error as Error
      // setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="sticky top-0 z-20 bg-background">
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
              
              <Button onClick={handleModal} variant="default" className="hidden md:flex h-10">
                <Icon name='PlusIcon' className="text-background" />
                Empezar
              </Button>
            </div>

          </div>

        </header>
      </div>

      <CustomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${typeForm === 'reset' ? 'Recupear contraseña' : 'Inicia sesión o registrate'}`}
      >
        <AuthForm isLoading={isLoading} onSubmit={handleSubmitAuth} handleTypeForm={handleTypeForm} typeForm={typeForm} />
      </CustomModal>
    </>
  )
}

export { Header }
