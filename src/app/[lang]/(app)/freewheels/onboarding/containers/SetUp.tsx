'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { SetupOnboarding } from "./step-one/SetupOnboarding"
import { AboutUsWorkShop } from "./step-one/AboutUsWorkShop"
import { ChoiseCategory } from "./step-one/ChoiseCategory"
import { LocationAddress } from "./step-one/LocationAddress"
import { BasicData } from "./step-one/BasicData"
import { SetUpSchema } from "@/application/validators/setUpSchema"
import { FormContainer } from "@/presentation/components/form/FormContainer"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { FormSetup } from "./FormSetup"
import { ZodType } from "zod"
import { FadeIn } from "@/presentation/components/fade-in"
import { ConfirmLocationAddress } from "./step-one/ConfirmLocationAddress"
import { WorkShopDetail } from "./step-two/WorkShopDetail"
import { ChoiseServices } from "./step-two/ChoiseServices"
import { WorkShopPothos } from "./step-two/WorkShopPothos"
import { WorkShopSocialName } from "./step-two/WorkShopSocialName"
import { WorkShopDescription } from "./step-two/WorkShopDescription"
import { ReadyToPublish } from "./step-three/ReadyToPublish"
import { WorkShopSchedule } from "./step-three/WorkShopSchedule"

type OnboardingStepsProps = {
  title?: string
  subSteps: {
    content: (methods: any) => JSX.Element
    schema?: ZodType
  }[]
}

type SetUpProps = {
  handleSubmit: (data: any) => void
}

export default function SetUp({
  handleSubmit
}: SetUpProps) {
  const router = useRouter()
  const [currentMainStep, setCurrentMainStep] = useState(2)
  const [currentSubStep, setCurrentSubStep] = useState(1)
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
        { content: ({methods}) => <ChoiseCategory handleNext={(value) => handleValidNext(value)} /> },
        { content: ({methods}) => <LocationAddress handleNext={(value) => handleValidNext(value)} {...methods} /> },
        { content: ({methods}) => <ConfirmLocationAddress handleNext={(value) => handleValidNext(value)} {...methods} /> },
        { content: ({methods}) => <BasicData handleNext={(value) => handleValidNext(value)} {...methods} /> },
      ]
    },
    {
      title: 'Paso 2',
      subSteps: [
        { content: (methods: any) => <WorkShopDetail {...methods} /> },
        { content: (methods: any) => <ChoiseServices handleNext={(value) => handleValidNext(value)} {...methods} /> },
        { content: (methods: any) => <WorkShopPothos handleNext={(value) => handleValidNext(value)} {...methods} /> },
        { content: (methods: any) => <WorkShopSocialName handleNext={(value) => handleValidNext(value)} {...methods} /> },
        { content: (methods: any) => <WorkShopDescription handleNext={(value) => handleValidNext(value)} {...methods} /> },
      ]
    },
    {
      title: 'Paso 3',
      subSteps: [
        { content: (methods: any) => <ReadyToPublish {...methods} /> },
        { content: (methods: any) => <WorkShopSchedule handleNext={(value) => handleValidNext(value)} {...methods} /> },
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

  const handleOpenChange = () => router.push('/es/freewheels')

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
        {(methods) => {
          // console.log(methods.formState.errors, 'ERRORS')
          return (
          <div className="h-screen max-h-screen flex flex-col p-6">
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
        )}}
      </FormContainer>
    </FadeIn>
  )
}