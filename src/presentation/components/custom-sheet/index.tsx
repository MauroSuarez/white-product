
'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/presentation/ds/sheet"
import { Button } from "@/presentation/ds/button"
import { cn } from "@/presentation/utils/uiHelpers"

type CustomSheetProps = {
  isOpen: boolean
  isOpenChange: () => void
  children: React.ReactNode
  header?: React.ReactNode  
  footer?: React.ReactNode | JSX.Element
  title?: string
  description?: string
}

const CustomSheet = ({
  isOpen = true,
  isOpenChange,
  children,
  header,
  footer,
  title,
  description
}: CustomSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={isOpenChange}>
      <SheetContent side={'bottom'} className={cn(`h-screen max-h-screen flex flex-col ${header ? '[&>button]:hidden' : ''}`)}>
        <SheetHeader>
          {header ? header : (
            <>
              <SheetTitle>{title}</SheetTitle>
              <SheetDescription>
                {description}
              </SheetDescription>
            </>
          )}
        </SheetHeader>

        {/* Content */}
        {children}
        
        {/* Footer */}
        {footer ? (
          <div className="p-6">
            {footer}
          </div>
        ) : (
          <SheetFooter>
            <SheetClose asChild>
              <Button variant={'ghost'}>Cerrar</Button>
            </SheetClose> 
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}

export { CustomSheet }
