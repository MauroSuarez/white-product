'use client'

import React, { useState, useEffect } from 'react'

interface CountdownProps {
  seconds?: number
  onComplete?: () => void // Ahora es requerido
  className?: string
  restartKey?: number | string // Key para forzar reinicio
}

const CountDown = ({
  seconds = 60, 
  onComplete, 
  className = '',
  restartKey
}: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState(seconds)

  useEffect(() => {
    setTimeLeft(seconds) // Reinicia cuando cambia seconds o restartKey
    
    // No iniciar si el tiempo es 0 o negativo
    if (seconds <= 0) {
      onComplete && onComplete()
      return
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = prev - 1
        
        if (newTime <= 0) {
          clearInterval(timer)
          onComplete && onComplete()
          return 0
        }
        
        return newTime
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [seconds, restartKey, onComplete])

  return (
    <span className={`countdown ${className}`}>
      {timeLeft}s
    </span>
  )
}

export { CountDown }
