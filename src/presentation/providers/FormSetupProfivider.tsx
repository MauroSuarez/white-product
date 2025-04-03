'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import { z } from 'zod'
import { FormContainer, FormContainerProps } from '../components/form/FormContainer'


interface FormStepperContextProps {
  currentStep: number
  totalSteps: number
  goToNextStep: () => Promise<void>
  goToPrevStep: () => void
  jumpToStep: (step: number) => Promise<void>
  isLastStep: boolean
  isFirstStep: boolean
  formData: any
  updateFormData: (data: any) => void
}

const FormStepperContext = createContext<FormStepperContextProps | undefined>(undefined)

interface FormStepperProviderProps<T extends z.ZodType<any, any>> 
  extends Omit<FormContainerProps<T>, 'children'> {
  children: React.ReactNode
  totalSteps: number
}

export function FormStepperProvider<T extends z.ZodType<any, any>>({
  children,
  totalSteps,
  onSubmit,
  ...formProps
}: FormStepperProviderProps<T>) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<z.infer<T>>(formProps.defaultValues || {})

  const isLastStep = currentStep === totalSteps - 1
  const isFirstStep = currentStep === 0

  const updateFormData = useCallback((data: any) => {
    setFormData(prev => ({ ...prev, ...data }))
  }, [])

  const goToNextStep = useCallback(async () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1)
    }
  }, [currentStep, totalSteps])

  const goToPrevStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }, [currentStep])

  const jumpToStep = useCallback(async (step: number) => {
    if (step >= 0 && step < totalSteps) {
      setCurrentStep(step)
    }
  }, [totalSteps])

  const handleSubmit = useCallback((data: z.infer<T>) => {
    updateFormData(data)
    onSubmit(data)
  }, [onSubmit, updateFormData])

  return (
    <FormStepperContext.Provider
      value={{
        currentStep,
        totalSteps,
        goToNextStep,
        goToPrevStep,
        jumpToStep,
        isLastStep,
        isFirstStep,
        formData,
        updateFormData,
      }}
    >
      <FormContainer {...formProps} onSubmit={handleSubmit}>
        {(methods) => (
          <>{children}</>
        )}
      </FormContainer>
    </FormStepperContext.Provider>
  )
}

export function useFormStepper() {
  const context = useContext(FormStepperContext)
  if (!context) {
    throw new Error('useFormStepper must be used within a FormStepperProvider')
  }
  return context
}