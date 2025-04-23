'use client'

import React, { useState, useEffect } from 'react'
import { BrandOutlineAppIcon } from '../svg/BrandOutlineApp'
import { BrandAppIcon } from '../svg/BrandApp'
import { APPLICATION } from '@/config/constants'

const Splash = () => {
  const [showSplash, setShowSplash] = useState(true)
  
  const timerOff = () => {
    setTimeout(() => {
      setShowSplash(false)
    }, 3000)
  }

  useEffect(() => {
    if (showSplash) timerOff()
  }, [showSplash])
  
  if (!showSplash) return <></>

  return (
    <div className='h-screen w-full flex items-center justify-center space-y-4'>
      <div className='flex flex-col items-center justify-center w-[400px] h-[400px]'>
        <div>
          <BrandAppIcon className="animate-[bounce_0.9s_ease_infinite]" width={150} height={150} />
        </div>
        <div className="flex space-x-1 mt-4">
          {APPLICATION.appName.split('').map((letter, index) => (
            <span 
              key={index}
              className="inline-block animate-[bounce_0.9s_ease_infinite] text-primary font-bold"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Splash }
