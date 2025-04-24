'use client'

import { useCallback } from "react"
import { FadeIn } from "@/presentation/components/fade-in"
import SetUp from "./containers/SetUp"

export default function Onboarding() {
  const handleSubmit = useCallback(async (data: any) => {
    console.log('FORM:', data)
  }, [])

  return (
    <FadeIn
      mode="wait"
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
      <SetUp handleSubmit={handleSubmit} />
    </FadeIn>
  )
}