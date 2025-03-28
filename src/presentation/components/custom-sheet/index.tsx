
'use client'

import { AnimatePresence, motion } from "framer-motion"
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

type CustomSheetProps = {
  isOpen: boolean
  isOpenChange: () => void
  children: React.ReactNode
  footer: React.ReactNode
}

const CustomSheet = ({
  isOpen = true,
  isOpenChange,
  children,
  footer
}: CustomSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={isOpenChange}>
      <SheetContent side={'bottom'} className="h-screen max-h-screen flex flex-col [&>button]:hidden">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>

        {/* Content */}
        {children}
        
        {/* Footer */}
        <div className="p-6 border-t">
          {footer}
        </div>
        {/* <SheetFooter className="border border-blue-600">
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> 
          con piesidex
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  )
}

export { CustomSheet }
