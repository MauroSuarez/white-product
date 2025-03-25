'use client'

// import { Icon } from '@/presentation/ds/icon'
// import React, { useState, useRef, FunctionComponent, useEffect } from 'react'

// type DropdownMenuProps = {
//   children: React.ReactNode
//   items: any[]
//   disabled?: boolean
//   classes?: string
//   onBlur?: React.FocusEventHandler<HTMLDivElement>
//   onToggle?: (open: boolean) => void
// }

// export interface IDropDown {
//   text: string
//   href?: string
//   onClick?(): void
//   isVisible?: boolean
//   isDisabled?: boolean
// }

// const DropDown: FunctionComponent<{
//   items: IDropDown[]
//   onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
// }> = ({ items, onBlur }) => {
//   const filteredItems = items.filter((item) => item.isVisible)

//   return (
//     <div
//       onBlur={onBlur}
//       className="absolute border border-gray-300 right-7 top-12 block w-[300px] bg-white rounded-md shadow-md z-20"
//     >
//       {filteredItems.map((item: IDropDown, idx, arr) => {
//         const isFirst = idx === 0
//         const isLast = idx === arr.length - 1
//         return (
//           <a
//             key={idx}
//             data-testid={`dropdown-item-${idx}`}
//             href={item.isDisabled ? undefined : item.href || undefined}
//             target={item.isDisabled ? undefined : item.href && '_blank'}
//             rel="noreferrer"
//             aria-disabled={item.isDisabled}
//             className={`${
//               item.isDisabled
//                 ? 'cursor-default opacity-40'
//                 : 'hover:bg-neutral-800 hover:text-neutral-100'
//             } text-body-sm relative px-4 h-9 flex items-center bg-white z-20 ${
//               isFirst ? 'rounded-tl-md rounded-tr-md' : ''
//             } ${isLast ? 'rounded-bl-md rounded-br-md' : ''}`}
//             onClick={() => {
//               if (!item.isDisabled && item.onClick) item.onClick()
//             }}
//           >
//             {item.text}
//           </a>
//         )
//       })}
//     </div>
//   )
// }

// const DropdownMenu: FunctionComponent<DropdownMenuProps> = ({
//   children = undefined,
//   items = [],
//   classes = '',
//   disabled = false,
//   onBlur,
//   onToggle,
// }) => {
//   const [open, setOpen] = useState<boolean>(false)
//   const wrapperRef = useRef<HTMLDivElement>(null)

//   const defaultClass = 'focus:outline-none relative'

//   const clickHandler = (e: React.MouseEvent) => {
//     if ((e.target as HTMLAnchorElement).getAttribute('aria-disabled') === 'true') return

//     setOpen(!open)
//     onToggle && onToggle(!open)
//   }

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (wrapperRef.current && !wrapperRef.current.contains(event.target as HTMLButtonElement)) {
//         setOpen(false)
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside)
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [])

//   return (
//     <div
//       onClick={clickHandler}
//       className={`${defaultClass} ${disabled ? 'cursor-default' : ''}`}
//       ref={wrapperRef}
//     >
//       {children}
//       {open && <DropDown items={items} onBlur={onBlur} />}
//     </div>
//   )
// }

// export { DropdownMenu }

import React from "react"
import { MenuItem } from "@/application/use-cases/menuUseCase"
import { Button } from "@/presentation/ds/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/presentation/ds/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/presentation/ds/avatar"
import { Icon } from "@/presentation/ds/icon"
import { Typography } from "@/presentation/ds/typography"
import { Wrench, User } from "lucide-react"

export type DropDownProps = {
  items?: MenuItem[]
  onClick?: (item: MenuItem) => void
  children?: React.ReactNode
}

const DropDown: React.FC<DropDownProps> = ({
  items = [],
  onClick,
  children
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[12rem]">
        {items.map((item: MenuItem, key: number) => {
          return (
            <React.Fragment key={`items-menu-${key}`}>
              {item?.separator ? (
                <DropdownMenuSeparator />
              ) : (
                <DropdownMenuItem onClick={() => item.onClick()}>
                  <div className="flex flex-wrap justify-between w-full items-center">
                    <Typography>
                      {item?.label}
                    </Typography>
                    {item.icon && (
                      <div className="text-foreground"><Icon name={item.icon} /></div>
                    )}
                  </div>
                </DropdownMenuItem>
              )}
            </React.Fragment>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { DropDown }
