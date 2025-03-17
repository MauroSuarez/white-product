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
  open: boolean
  items?: MenuItem[]
  onClick?: (item: MenuItem) => void
}

const DropDown: React.FC<DropDownProps> = ({
  open = false,
  items = [],
  onClick
}) => {
  return (
    <DropdownMenu open={open}>
      <DropdownMenuContent className="w-[12rem]">
        {items.map((item: MenuItem, key: number) => {
          return (
            <React.Fragment key={`items-menu-${key}`}>
              {item?.separator ? (
                <DropdownMenuSeparator />
              ) : (
                <DropdownMenuItem onClick={() => onClick && onClick(item)}>
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
