'use client'

import { useState } from 'react'
import { Button } from "@/presentation/ds/button"
import { CustomSheet } from "../custom-sheet"
import { FadeIn } from "../fade-in"
import { Header } from "./Header"
import { Footer } from './Footer'
import { FormContainer } from '../form/FormContainer'
import { SetUpDTO, SetUpSchema } from '@/application/validators/setUpSchema'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/presentation/ds/sheet"
import { cn } from '@/presentation/utils/uiHelpers'
import { BrandLogo } from '../brand-logo'
import { useFormContext } from 'react-hook-form'

type CustomStepperSetUpProps = {
  isOpenSheet?: boolean
  goNext?: () => void
  goBack?: () => void
  handleOpenChange?: () => void
  currentMainStep: number
  currentSubStep: number
  steps: Array<any>
  children: React.ReactNode
}

const CustomStepperSetUp = ({
  isOpenSheet = false,
  goNext,
  goBack,
  handleOpenChange,
  currentMainStep,
  currentSubStep,
  steps,
  children
}: CustomStepperSetUpProps) => {
  const [direction, setDirection] = useState<"forward" | "backward">("forward")

  const handleNext = () => {
    setDirection("forward")
    goNext && goNext()
  }

  const handleBack = () => {
    setDirection("backward")
    goBack && goBack()
  }

  return (
    <div className="p-10 h-screen">
      <CustomSheet
        isOpen={isOpenSheet}
        isOpenChange={handleOpenChange || (() => {})}
        header={
          <Header
            currentMainStep={currentMainStep}
            currentSubStep={currentSubStep}
            handleOpenChange={handleOpenChange || (() => {})}
          />
        }
        footer={
          <Footer
            steps={steps}
            currentMainStep={currentMainStep}
            currentSubStep={currentSubStep}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        }
      >
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6">
          <FadeIn
            key={`stepper-${currentMainStep}-${currentSubStep}`}
            initial={{
              opacity: 0,
              x: direction === "forward" ? 40 : -40,
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              x: direction === "forward" ? -40 : 40,
            }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </FadeIn>
        </div>
      </CustomSheet>
    </div>
  )
}

export { CustomStepperSetUp }
