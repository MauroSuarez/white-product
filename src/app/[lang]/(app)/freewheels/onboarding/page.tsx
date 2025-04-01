'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CustomStepperSetUp } from "@/presentation/components/custom-stepper-setup"
import { SetupOnboarding } from "./containers/step-one/SetupOnboarding"
import { AboutUsWorkShop } from "./containers/step-one/AboutUsWorkShop"
import { ChoiseCategory } from "./containers/step-one/ChoiseCategory"

export default function Onboarding() {
  const router = useRouter()
  const [isOpenSheet, setIsOpenSheet] = useState(true)
  const [currentMainStep, setCurrentMainStep] = useState(0)
  const [currentSubStep, setCurrentSubStep] = useState(0)

  const steps = [
    {
      title: 'Paso 1',
      subSteps: [
        { content: (methods: any) =><SetupOnboarding {...methods} /> },
        { content: (methods: any) =><AboutUsWorkShop {...methods} /> },
        { content: (methods: any) => <ChoiseCategory {...methods} /> }
      ]
    },
    {
      title: 'Paso 2',
      subSteps: [
        { title: 'Subpaso 2.1', content: 'Contenido del subpaso 2.1' },
        { title: 'Subpaso 2.2', content: 'Contenido del subpaso 2.2' },
        { title: 'Subpaso 2.3', content: 'Contenido del subpaso 2.3' },
        { title: 'Subpaso 2.4', content: 'Contenido del subpaso 2.4' }
      ]
    },
    {
      title: 'Paso 3',
      subSteps: [
        { title: 'Subpaso 3.1', content: 'Contenido del subpaso 3.1' },
        { title: 'Subpaso 3.2', content: 'Contenido del subpaso 3.2' },
        { title: 'Subpaso 3.3', content: 'Contenido del subpaso 3.3' }
      ]
    }
  ]

  const goNext = () => {
    if (currentSubStep < steps[currentMainStep].subSteps.length - 1) {
      setCurrentSubStep(currentSubStep + 1)
    } else if (currentMainStep < steps.length - 1) {
      setCurrentMainStep(currentMainStep + 1)
      setCurrentSubStep(0)
    }
  }

  const goBack = () => {
    if (currentSubStep > 0) {
      setCurrentSubStep(currentSubStep - 1)
    } else if (currentMainStep > 0) {
      setCurrentMainStep(currentMainStep - 1)
      setCurrentSubStep(steps[currentMainStep - 1].subSteps.length - 1)
    }
  }

  const handleOpenChange = () => {
    setIsOpenSheet(!isOpenSheet)
    router.push('/es/freewheels')
  }

  return (
    <CustomStepperSetUp
      handleOpenChange={handleOpenChange}
      goNext={goNext}
      goBack={goBack}
      currentMainStep={currentMainStep}
      currentSubStep={currentSubStep}
      isOpenSheet={isOpenSheet}
      steps={steps}
    />
  )
}
