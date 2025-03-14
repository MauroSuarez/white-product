'use client'

import React, { useState, useEffect } from 'react'

function usePositionScroll(position: number = 50) {
  const [isSmall, setIsSmall] = useState(false)

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > position) {
      setIsSmall(true)
    } else {
      setIsSmall(false)
    }
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

  return { isSmall }
}

export { usePositionScroll }