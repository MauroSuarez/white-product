'use client'

import React, { FunctionComponent, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { useScrollView } from './useScrollView'
import ModalDefault from './defaultModal'

type CustomModalProps = {
  isOpen: boolean;
  title?: string;
  step?: number;
  onBackStep?: (step: number) => void;
  onClose?: () => void;
  canClickBackdrop?: boolean;
  showFullscreenWhenMobile?: boolean;
  showHeader?: boolean;
  desktopAlignment?: 'top' | 'right' | 'middle' | 'left' | 'bottom';
  mobileAlignment?: 'top' | 'middle' | 'bottom';
  classes?: string;
  classesContainer?: string;
  subTitle?: string;
  children?: React.ReactNode
}

const CustomModal: FunctionComponent<CustomModalProps> = (props) => {
  const { isOpen, onClose } = props

  const { hideScroll, restoreScroll } = useScrollView()

  useEffect(() => {
    isOpen ? hideScroll() : restoreScroll()
  }, [isOpen, hideScroll, restoreScroll])

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="z-[999999999] inset-0 m-0 fixed"
          aria-labelledby="modal-title"
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            onClick={onClose}
            className="fixed inset-0 bg-gray-900"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5, transition: { ease: 'easeIn', duration: 0.25 } }}
            exit={{ opacity: 0, transition: { ease: 'easeOut', duration: 0.4 } }}
          />
          <motion.div
            className="w-full h-full flex p-8 border-2 border-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { ease: 'easeIn', duration: 0.4 } }}
            exit={{ opacity: 0, transition: { ease: 'easeOut', duration: 0.2 } }}
          >
            <ModalDefault {...props} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export { CustomModal }
