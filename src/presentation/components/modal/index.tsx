'use client'

import React, { FC } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/presentation/ds/dialog"

type ModalProps = {
  title?: string
  description?: string
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

const Modal: FC<ModalProps> = ({
  title,
  description = 'descripcion',
  isOpen = false,
  onOpenChange,
  children
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <>
          {children}
        </>
      </DialogContent>
    </Dialog>
  )
}

export { Modal }
