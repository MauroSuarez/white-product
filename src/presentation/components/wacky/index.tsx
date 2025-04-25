'use client'

import { useEffect, useState } from 'react'
import { WackyBrandpIcon } from '../svg/BrandWacky'

type WackyProps = {
  animated?: boolean
  width?: number
  height?: number
  className?: string
  color?: string
}

const Wacky = ({
  color = '#f07316',
  animated = true,
  width = 150,
  height = 60,
  className = '0.3s ease-out',
  ...props
}: WackyProps) => {
  const [showWacky, setShowWacky] = useState(true)
  const [matrixValues, setMatrixValues] = useState("matrix(1, 0, 0, 1, 0, 0)")

  const timerOffSplash = () => {
    setTimeout(() => {
      setShowWacky(false)
    }, 3000)
  }

  useEffect(() => {
    showWacky
      timerOffSplash()
  }, [showWacky])

  const transformations = [
    "matrix(1, 0, 0, 1, 0, 0)",
    "matrix(-1, 0, 0, 1, 0, 0)",
  ]

  useEffect(() => {
    // Animación de la matriz cada segundo
    const matrixInterval = setInterval(() => {
      setMatrixValues(prev => {
        const currentIndex = transformations.indexOf(prev);
        const nextIndex = (currentIndex + 1) % transformations.length;
        return transformations[nextIndex];
      });
    }, 500)
    
    return () => {
      clearInterval(matrixInterval);
    };
  }, [timerOffSplash])

  return (
    <WackyBrandpIcon
      className={className}
      transform={animated ? matrixValues : undefined}
      width={width}
      height={height}
      color={color}
      {...props}
    />
  );
}

export { Wacky }
