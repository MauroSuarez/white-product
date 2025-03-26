import React, { FunctionComponent } from 'react'

import { Icon } from '@/presentation/ds/icon'
import { Separator } from '@/presentation/ds/separator'
import { Typography } from '@/presentation/ds/typography'
import { Button } from '@/presentation/ds/button'

export type ModalProps = {
  isOpen: boolean
  title?: string
  step?: number
  onBackStep?: (step: number) => void
  onClose?: () => void
  canClickBackdrop?: boolean
  showFullscreenWhenMobile?: boolean
  showHeader?: boolean
  desktopAlignment?: 'top' | 'right' | 'middle' | 'left' | 'bottom'
  mobileAlignment?: 'top' | 'middle' | 'bottom'
  className?: string
  classNameContainer?: string
  subTitle?: string
  children?: React.ReactNode
}

const ModalDefault: FunctionComponent<ModalProps> = ({
  title,
  step = 0,
  onBackStep,
  desktopAlignment = 'middle',
  mobileAlignment = 'middle',
  showFullscreenWhenMobile = false,
  showHeader = true,
  onClose,
  children,
  className = '',
  classNameContainer = '',
}) => {
  const onShowPreviousStep = (): void => {
    onBackStep && onBackStep(step)
  }

  return (
    <div
      className={`relative bg-background border border-gray-300 shadow-sm sm:rounded-md
        ${showFullscreenWhenMobile ? 'w-full h-full' : 'w-auto h-auto'}
        ${
          showFullscreenWhenMobile
            ? ''
            : mobileAlignment === 'top'
            ? 'self-start'
            : mobileAlignment === 'bottom'
            ? 'self-end'
            : 'self-center'
        }
        ${
          desktopAlignment === 'top'
            ? 'sm:self-start sm:mx-auto'
            : desktopAlignment === 'bottom'
            ? 'sm:self-end sm:mx-auto'
            : desktopAlignment === 'left'
            ? 'sm:my-auto'
            : desktopAlignment === 'right'
            ? 'sm:my-auto sm:ml-auto sm:mr-0'
            : 'sm:self-center sm:mx-auto'
        }
        ${classNameContainer}
      `}
    >
      {showHeader && (
        <div className="w-full flex justify-between items-center space-x-4 h-[56px] sm:h-[64px]">
          <div className="flex justify-between sm:justify-start">
            {step > 0 && (
              <Button type="button" variant="link" onClick={onShowPreviousStep} className="mr-6">
                <Icon name="ChevronLeftIcon" />
              </Button>
            )}
            <div className="hidden sm:block ml-4">
              <Typography component="h1" className="font-bold">
                {title}
              </Typography>
            </div>
            <div className="sm:hidden text-center">
              <Typography component="h3" className="font-bold">
                {title}
              </Typography>
            </div>
          </div>
          <Button type="button" variant="link" onClick={onClose}>
            <Icon name="Cross1Icon"  />
          </Button>
        </div>
      )}
      <Separator />
      <div
        className={`${
          showHeader
            ? 'h-[calc(100%_-_57px)] sm:h-[calc(100%_-_65px)]' // height: full - (header + separator)
            : 'h-[calc(100%_-_1px)]' // height: full - separator
        } ${className} px-4 pb-4`}
      >
        {children}
      </div>
    </div>
  )
}

export default ModalDefault
