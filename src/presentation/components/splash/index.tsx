'use client'

import { useEffect, useState } from 'react'
import { useAppStore } from '@/infraestructure/stores/appStore'
import { BrandOutlineAppIcon } from '../svg/BrandOutlineApp'
// import { BrandAppIcon } from '../svg/BrandApp'
import { APPLICATION } from '@/config/constants'
import { AnimatePresence, motion } from 'framer-motion'

const Splash = () => {
  const { showSplash, setShowSplash } = useAppStore()
  const [matrixValues, setMatrixValues] = useState("matrix(1, 0, 0, 1, 0, 0)")

  const timerOffSplash = () => {
    setTimeout(() => {
      setShowSplash(false)
    }, 3000)
  }

  useEffect(() => {
    showSplash
      timerOffSplash()
  }, [showSplash])

  const transformations = [
    "matrix(1, 0, 0, 1, 0, 0)",
    "matrix(-1, 0, 0, 1, 0, 0)",
    // "matrix(0.866, 0.5, -0.5, 0.866, 0, 0)",
    // "matrix(0.866, -0.5, 0.5, 0.866, 0, 0)"
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
  
  const splashVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100,
        damping: 10
      }
    },
    exit: { 
      opacity: 0, 
      y: 50,
      transition: { 
        duration: 0.5,
        ease: 'easeInOut'
      } 
    }
  }

  if(!showSplash) return <></>

  return (
    <AnimatePresence>
      <motion.div
        key="splash-screen"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={splashVariants}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        }}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: 'spring', 
            stiffness: 200,
            damping: 15,
            delay: 0.2
          }}
        >
          <div>
            <BrandOutlineAppIcon
              // transform={matrixValues}
              className='0.3s ease-out'
              //transform="matrix(-1,0,0,1,0,0)"
              transform={matrixValues}
              width={150}
              height={150}
            />
          </div>
          <div className="flex space-x-1 mt-4 justify-center">
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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export { Splash }
