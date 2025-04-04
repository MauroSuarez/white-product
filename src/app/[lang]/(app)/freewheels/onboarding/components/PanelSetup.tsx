'use client'

import { Typography } from "@/presentation/ds/typography"
import { cn } from "@/presentation/utils/uiHelpers"

type PanelSetupProps = {
  title?: string
  description?: string
  children?: React.ReactNode
  className?: string
  classNameContainer?: string
}

const PanelSetup = ({
  title,
  description,
  children,
  className,
  classNameContainer
}: PanelSetupProps) => {
  return (
    <>
      <div className="flex-wrap w-full justify-center flex h-auto">
        <div className="flex flex-col space-y-4">
          <Typography variant={'h2'} className="text-left w-full font-semibold border-none">
            {title}
          </Typography>
          {description && (
            <Typography variant={'muted'} className="text-left w-full font-semibold border-none">
              {description}
            </Typography>
          )}
        </div>
      </div>
      <div className={cn(`flex w-full flex-wrap mt-4 justify-center`, classNameContainer)}>
        {children}
      </div>
    </>
  )
}

export { PanelSetup }
