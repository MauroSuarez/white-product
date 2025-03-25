import { useState, useEffect } from 'react'

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'
type ScreenSize = {
  device: 'mobile' | 'tablet' | 'desktop'
  breakpoint: Breakpoint
  width: number
}

export function useBreackpointDevice() {
  const [screen, setScreen] = useState<ScreenSize>({
    device: 'mobile',
    breakpoint: 'sm',
    width: 0
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const updateScreen = () => {
      const width = window.innerWidth
      let device: ScreenSize['device']
      let breakpoint: Breakpoint

      if (width < 768) {
        device = 'mobile'
        breakpoint = 'sm'
      } else if (width >= 768 && width < 1024) {
        device = 'tablet'
        breakpoint = 'md'
      } else {
        device = 'desktop'
        breakpoint = width >= 1280 ? (width >= 1536 ? '2xl' : 'xl') : 'lg'
      }

      setScreen({ device, breakpoint, width })
    }

    updateScreen()
    window.addEventListener('resize', updateScreen)

    return () => window.removeEventListener('resize', updateScreen)
  }, [])

  return screen
}