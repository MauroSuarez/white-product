'use client'

import { useEffect, useState } from "react"
import { CustomSheet } from "@/presentation/components/custom-sheet"
import { Button } from "@/presentation/ds/button"
import clsx from "clsx"

const TOTAL_STEPS = 3
const SUBSTEPS_PER_STEP = 3

export default function Onboarding() {
  const [isOpenSheet, setIsOpenSheet] = useState(true)
  const [step, setStep] = useState(0)
  const [subStep, setSubStep] = useState(0)
  const [direction, setDirection] = useState<"forward" | "backward">("forward")

  const goNext = () => {
    console.log("A ver")
    setDirection("forward")
    setStep(step + 1)
    // if (subStep < SUBSTEPS_PER_STEP - 1) {
    //   setSubStep(subStep + 1)
    // } else if (step < TOTAL_STEPS - 1) {
    //   setStep(step + 1)
    //   setSubStep(0)
    // }
  }

  const goBack = () => {
    setDirection("backward")
    setStep(step - 1)
    // if (subStep > 0) {
    //   setSubStep(subStep - 1)
    // } else if (step > 0) {
    //   setStep(step - 1)
    //   setSubStep(SUBSTEPS_PER_STEP - 1)
    // }
  }

  const currentStepProgress = ((step + 1) / TOTAL_STEPS) * 100
  const currentSubStepProgress = ((subStep + 1) / SUBSTEPS_PER_STEP) * 100

  return (
    <div className="p-10 h-screen">
      <CustomSheet direction={direction} id={step} isOpen={isOpenSheet} isOpenChange={() => setIsOpenSheet(!isOpenSheet)} footer={(
        <>
          <Button
            variant="outline"
            onClick={goBack}
            disabled={step === 0 && subStep === 0}
          >
            Anterior
          </Button>
          <Button
            onClick={goNext}
            disabled={step === TOTAL_STEPS - 1 && subStep === SUBSTEPS_PER_STEP - 1}
          >
            Siguiente
          </Button>
      </>
      )}>
        <div className="p-6">
          <div className={`w-full h-screen ${step === 1 ? 'bg-primary' : 'bg-green-200'}`}>
            Contenido {step}
          </div>
        </div>
      </CustomSheet>
    </div>
  )
}
