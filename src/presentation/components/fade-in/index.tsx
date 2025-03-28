'use client'

import { motion, AnimatePresence, MotionProps, HTMLMotionProps } from 'framer-motion'
import React from 'react'

type ValidHTMLElements = keyof JSX.IntrinsicElements

interface FadeInProps extends Omit<HTMLMotionProps<'div'>, 'style'> {
  mode?: "wait" | "sync" | "popLayout" | undefined
  children: React.ReactNode
  style?: React.CSSProperties
  as?: ValidHTMLElements
}

const FadeIn: React.FC<FadeInProps> = ({
  mode,
  children,
  style = {},
  transition = {},
  initial = {},
  animate = {},
  as = 'div',
  ...props
}) => {
  const defaultInitial = { opacity: 0, ...initial }
  const defaultAnimate = { opacity: 1, ...animate }
  const defaultTransition = { duration: 0.5, ease: "easeInOut", ...transition }

  const MotionComponent = motion[as] as React.ComponentType<MotionProps & React.HTMLAttributes<HTMLElement>>

  return (
    <AnimatePresence mode={mode}>
      <MotionComponent
        initial={defaultInitial}
        animate={defaultAnimate}
        transition={defaultTransition}
        style={style}
        {...props}
      >
        {children}
      </MotionComponent>
    </AnimatePresence>
  )
}

export { FadeIn }