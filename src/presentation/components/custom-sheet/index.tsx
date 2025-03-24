
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
  direction: string
  isOpenChange: () => void
  children: React.ReactNode
  footer: React.ReactNode
  id: number
}


const CustomSheet = ({
  isOpen = true,
  direction = 'forward',
  id,
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
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${id}`}
              initial={{
                opacity: 0,
                x: direction === "forward" ? 40 : -40,
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: direction === "forward" ? -40 : 40,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                {children}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
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
