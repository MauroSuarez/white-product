'use client'

import { useEffect, useState } from "react"
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

export default function Onboarding() {
  const [isOpenSheet, setIsOpenSheet] = useState(true)

  return (
    <div className="p-10 h-screen">
      <Sheet  open={isOpenSheet} onOpenChange={setIsOpenSheet}>
        <SheetContent side={'bottom'} className="h-screen max-h-screen flex flex-col [&>button]:hidden">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-4">
              {[...Array(30)].map((_, i) => (
                <p key={i}>Elemento #{i + 1}</p>
              ))}
            </div>
          </div>
          <div className="p-6 border-t">
            acá va el footer
          </div>
          {/* <SheetFooter className="border border-blue-600">
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose> 
            con piesidex
          </SheetFooter> */}
        </SheetContent>
      </Sheet>
    </div>
  )
}
