
import React, { FC } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/presentation/ds/dialog"

type ModalProps = {
  title?: string
  description?: string
  isOpen: boolean
  onOpenChange: () => void
  children: React.ReactNode
}

const Modal: FC<ModalProps> = ({
  title,
  description,
  isOpen = false,
  onOpenChange,
  children
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <>
          {children}
        </>
      </DialogContent>
    </Dialog>
  )
}

export { Modal }
