'use client'

import React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/presentation/ds/dropdown-menu"


export type DropDownProps = {
  items?: Array<any>
  children?: React.ReactNode
}

const DropDown: React.FC<DropDownProps> = ({
  items = [],
  children
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[12rem]">
        {items.map((item, key: number) => {
          return item.visible ? (
            <React.Fragment key={`item-header-${key}`}>
              {typeof item.format === 'function' ? item.format({ label: item?.label, path: item?.path }) : item.label}
            </React.Fragment>
          ) : null}
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { DropDown }
