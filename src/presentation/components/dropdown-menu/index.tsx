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
}

const DropDown: React.FC<DropDownProps> = ({
  items = [],
  onClick
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="rounded-full border border-gray-300 p-2 h-10">
          <div className="flex items-center space-x-2">
            <Icon name="HamburgerMenuIcon" className="h-5 w-5" />
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.pngd" alt="@shadcn" />
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
          </div>
        </Button>
      </DropdownMenuTrigger>
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
