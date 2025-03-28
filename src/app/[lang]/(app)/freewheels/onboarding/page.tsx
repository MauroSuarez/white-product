'use client'

import { useState } from "react"
import { CustomSheet } from "@/presentation/components/custom-sheet"
import { Button } from "@/presentation/ds/button"
import { FadeIn } from "@/presentation/components/fade-in"

export default function Onboarding() {
  const [isOpenSheet, setIsOpenSheet] = useState(true)
  const [currentMainStep, setCurrentMainStep] = useState(0)
  const [currentSubStep, setCurrentSubStep] = useState(0)
  const [direction, setDirection] = useState<"forward" | "backward">("forward")

  const steps = [
    {
      title: 'Paso 1',
      subSteps: [
        { title: 'Subpaso 1.1', content: 'Contenido del subpaso 1.1' },
        { title: 'Subpaso 1.2', content: 'Contenido del subpaso 1.2' },
        { title: 'Subpaso 1.3', content: 'Contenido del subpaso 1.3' }
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

  return (
    <div className="p-10 h-screen">
      <CustomSheet
        isOpen={isOpenSheet}
        // id={`${currentMainStep}-${currentSubStep}`}
        isOpenChange={() => setIsOpenSheet(!isOpenSheet)}
        footer={(
          <>
            <Button
              variant="outline"
              onClick={goBack}
              disabled={currentMainStep === 0 && currentSubStep === 0}
            >
              Anterior
            </Button>
            <Button
              onClick={goNext}
              disabled={currentMainStep === steps.length - 1 && currentSubStep === steps[currentMainStep].subSteps.length - 1}
            >
              Siguiente
            </Button>
          </>
        )}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          {steps.map((step, index) => (
            <div 
              key={index}
              style={{
                flex: 1,
                textAlign: 'center',
                padding: '10px',
                borderBottom: currentMainStep === index ? '3px solid blue' : '1px solid gray',
                fontWeight: currentMainStep === index ? 'bold' : 'normal',
                color: currentMainStep === index ? 'blue' : 'gray'
              }}
            >
              {step.title}
            </div>
          ))}
        </div>
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
            <div className={`w-full h-screen`}>
              <div className="space-y-4">
                <h3>{steps[currentMainStep].subSteps[currentSubStep].title}</h3>
                <p>{steps[currentMainStep].subSteps[currentSubStep].content}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </CustomSheet>
    </div>
  )
}
