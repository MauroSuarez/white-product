'use client'

import { useCallback, useState } from "react"
import { useRouter } from "next/navigation"
import { SetupOnboarding } from "./containers/step-one/SetupOnboarding"
import { AboutUsWorkShop } from "./containers/step-one/AboutUsWorkShop"
import { ChoiseCategory } from "./containers/step-one/ChoiseCategory"
import { SetUpDTO, SetUpSchema } from "@/application/validators/setUpSchema"
import { FormContainer } from "@/presentation/components/form/FormContainer"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { FormSetup } from "./FormSetup"
import { ZodType } from "zod"
import { FadeIn } from "@/presentation/components/fade-in"

type OnboardingStepsProps = {
  title?: string
  subSteps: {
    content: (methods: any) => JSX.Element
    schema?: ZodType
  }[]
}

export default function Onboarding() {
  const router = useRouter()
  // const [isOpenSheet, setIsOpenSheet] = useState(true)
  const [currentMainStep, setCurrentMainStep] = useState(0)
  const [currentSubStep, setCurrentSubStep] = useState(0)
  const [isNextDisabled, setIsNextDisabled] = useState(false)
  const [direction, setDirection] = useState<"forward" | "backward">("forward")

  const handleValidNext = (value: boolean) => setIsNextDisabled(value)

  const handleNext = () => {
    setDirection("forward")
    goNext && goNext()
  }

  const handleBack = () => {
    setIsNextDisabled(false)
    setDirection("backward")
    goBack && goBack()
  }

  const steps: OnboardingStepsProps[] = [
    {
      title: 'Paso 1',
      subSteps: [
        { content: ({methods}) => <SetupOnboarding {...methods} /> },
        { content: ({methods}) => <AboutUsWorkShop {...methods} /> },
        { content: ({methods}) => <ChoiseCategory handleNext={(value) => handleValidNext(value)} /> }
      ]
    },
    {
      title: 'Paso 2',
      subSteps: [
        { content: (methods: any) => <AboutUsWorkShop {...methods} /> },
        // { title: 'Subpaso 2.2', content: 'Contenido del subpaso 2.2' },
        // { title: 'Subpaso 2.3', content: 'Contenido del subpaso 2.3' },
        // { title: 'Subpaso 2.4', content: 'Contenido del subpaso 2.4' }
      ]
    },
    {
      title: 'Paso 3',
      subSteps: [
        // { title: 'Subpaso 3.1', content: 'Contenido del subpaso 3.1' },
        // { title: 'Subpaso 3.2', content: 'Contenido del subpaso 3.2' },
        // { title: 'Subpaso 3.3', content: 'Contenido del subpaso 3.3' }
      ]
    }
  ]

  const handleSubmit = useCallback(async (data: any) => {
    console.log('Método de pago seleccionado:', data)
  }, [])

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
    router.push('/es/freewheels')
  }

  const isShow = (currentMainStep === 0 && currentSubStep > 0) || (currentMainStep > 0)
  return (
    <FadeIn
      initial={{ y: 100, opacity: 0 }} // Empieza 100px abajo y transparente
      animate={{ y: 0, opacity: 1 }}   // Termina en su posición normal
      exit={{ y: -100, opacity: 0 }}   // Al salir, se mueve hacia arriba
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5
      }}
    >
      <FormContainer
        schema={SetUpSchema}
        onSubmit={handleSubmit}
        formProps={{ id: 'setup-form' }}
      >
        {(methods) => (
          <div className="h-screen max-h-screen flex flex-col p-10">
            <Header isShow={isShow} handleOpenChange={handleOpenChange} />
            <FormSetup
              direction={direction}
              currentMainStep={currentMainStep}
              currentSubStep={currentSubStep}
              steps={steps}
            />
            <Footer
              isNextDisabled={isNextDisabled}
              currentMainStep={currentMainStep}
              currentSubStep={currentSubStep}
              steps={steps}
              handleNext={handleNext}
              handleBack={handleBack}
            />
          </div>
        )}
      </FormContainer>
    </FadeIn>
  )
}