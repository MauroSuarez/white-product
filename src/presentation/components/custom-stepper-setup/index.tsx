'use client'

import { useState } from 'react'
import { Button } from "@/presentation/ds/button"
import { CustomSheet } from "../custom-sheet"
import { FadeIn } from "../fade-in"
import { Header } from "./Header"
import { Footer } from './Footer'
import { FormContainer } from '../form/FormContainer'
import { SetUpDTO, SetUpSchema } from '@/application/validators/setUpSchema'

type CustomStepperSetUpProps = {
  isOpenSheet?: boolean
  goNext?: () => void
  goBack?: () => void
  handleOpenChange?: () => void
  currentMainStep: number
  currentSubStep: number
  steps: Array<any>
}

const CustomStepperSetUp = ({
  isOpenSheet = false,
  goNext,
  goBack,
  handleOpenChange,
  currentMainStep,
  currentSubStep,
  steps
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

  const handleSubmit = (data: SetUpDTO) => {
    console.log('Método de pago seleccionado:', data)
    // Lógica para procesar el formulario
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
            <FormContainer
              schema={SetUpSchema}
              onSubmit={handleSubmit}
              formProps={{ id: 'setup-form' }}
            >
              {(methods) => (
                <div className={`w-full h-screen`}>
                  <div className="space-y-4">
                    {steps[currentMainStep].subSteps[currentSubStep].content(methods)}
                    <p>step: {currentMainStep}, substep: {currentSubStep}, cantSubstep: {steps[currentMainStep].subSteps?.length}</p>
                  </div>
                </div>
              )}
            </FormContainer>
          </FadeIn>
        </div>
      </CustomSheet>
    </div>
  )
}

export { CustomStepperSetUp }
