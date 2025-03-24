import React from "react"
import Link from "next/link"
import { Button } from "@/presentation/ds/button"
import { Input } from "@/presentation/ds/input"
import { Icon } from "@/presentation/ds/icon"
import { ScanSearch, User, Wrench } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/presentation/ds/avatar"
import { DropDown as DropdownMenu } from "@/presentation/components/dropdown-menu"
import { MenuItem } from "@/application/use-cases/menuUseCase"
import { usePositionScroll } from "@/presentation/hooks/usePositionScroll"
import { User as TUser } from "@/core/domain/entities/User"

export type HeaderDefaultProps = {
  user?: TUser
  itemsMenu: MenuItem[]
  isFreeWheel?: boolean
  handleItemClick: (value: any) => void
  handleChangeMode: (value: any) => void
}

const HeaderDefault: React.FC<HeaderDefaultProps> = ({
  user,
  itemsMenu,
  handleItemClick,
  handleChangeMode,
  isFreeWheel = false,
}) => {
  const { isSmall } = usePositionScroll()
  console.log(user, 'A VER')
  return (
    <>
      <Link href={'/es/about-us'}>
        <Button variant="ghost" className="hidden md:flex h-10">
          Acerca de nosotros
        </Button>
      </Link>

      <div className="flex items-center border rounded-full shadow-sm overflow-hidden min-w-[450px] w-auto">
        <Input
          type="text"
          placeholder="¿Qué servicio estas buscando para tu vehículo?"
          className={`flex ${isSmall ? 'h-10' : 'h-12'} items-center px-4 py-4 border-none focus:ring-0 focus:outline-none`}
        />
        <button className={`text-white ${isSmall ? 'px-2 py-2' : 'px-6 py-2'} mr-1 transition-all duration-300 rounded-full bg-primary`}>
          <Icon name="MagnifyingGlassIcon" className="text-background w-5 h-5" />
        </button>
      </div>

      <Link href={'/es/scan'}>
        <Button variant="gradient" className="hidden md:flex h-10 min-w-[100px]">
          Patente Scan
          <ScanSearch className='h-6 w-6 ml-2' />
        </Button>
      </Link>

      <Button onClick={() => handleChangeMode(isFreeWheel ? '/freewheels/home' : '/freewheels')} variant="default" className="hidden md:flex h-10">
        Subí tu FreeWheels
        <Wrench className='h-5 w-5' />
      </Button>

      <DropdownMenu items={itemsMenu} onClick={handleItemClick}>
        <div className="rounded-full px-2 border border-gray-300 items-center h-12 flex justify-center cursor-pointer">
          <div className="flex justify-center space-x-2 items-center">
            <Icon name="HamburgerMenuIcon" className="h-5 w-5 text-foreground" />
            <Avatar className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
              <AvatarImage src="https://github.com/shadcn.pngd" alt="@shadcn" />
              <AvatarFallback>
                <User className="h-5 w-5 dark:text-background" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </DropdownMenu>
    </>
  )
}

export { HeaderDefault }
