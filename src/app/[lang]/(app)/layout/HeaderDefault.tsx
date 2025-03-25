import React, { useState } from "react"
import { Button } from "@/presentation/ds/button"
import { Input } from "@/presentation/ds/input"
import { Icon } from "@/presentation/ds/icon"
import { DropDown as DropdownMenu } from "@/presentation/components/dropdown-menu"
import { usePositionScroll } from "@/presentation/hooks/usePositionScroll"
import { User as TUser } from "@/core/domain/entities/User"
import { Typography } from "@/presentation/ds/typography"
import { useCurrentPath } from "@/presentation/hooks/useCurrentPath"
import { CustomAvatar } from "@/presentation/components/custom-avatar"
import { SkeletonButton } from "@/presentation/components/skeleton/button"

export type HeaderDefaultProps = {
  isLoading?: boolean
  user?: TUser
  itemsTexts?: Array<any>
  itemsMenu?: Array<any>
  itemsAdminMenu?: Array<any>
  itemsButtons?: Array<any>
  handleSearch?: (value: any) => void
}

const HeaderDefault: React.FC<HeaderDefaultProps> = ({
  user = null,
  isLoading = false,
  itemsMenu,
  itemsAdminMenu,
  itemsButtons,
  itemsTexts,
  handleSearch
}) => {
  const { isSmall } = usePositionScroll()
  const currentPath = useCurrentPath() 
  const [searchQuery, setSearchQuery] = useState('')

  console.log(currentPath, 'A VERRRR')

  const handleOnSearch = () => {
    handleSearch && handleSearch(searchQuery.trim())
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleOnSearch()
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }
  return (
    <>
      {handleSearch && (
        <div className="flex items-center border rounded-full shadow-sm overflow-hidden w-auto lg:min-w-[450px] md:min-w-[450px] sm:min-w-[400px]">
          <Input
            value={searchQuery}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
            type="text"
            placeholder="¿Qué servicio estas buscando para tu vehículo?"
            className={`flex ${isSmall ? 'h-10' : 'h-12'} items-center px-4 py-4 border-none focus:ring-0 focus:outline-none`}
          />
          <button onClick={handleSearch} className={`text-white ${isSmall ? 'px-2 py-2' : 'px-6 py-2'} mr-1 transition-all duration-300 rounded-full bg-primary`}>
            <Icon name="MagnifyingGlassIcon" className="text-background w-5 h-5" />
          </button>
        </div>
      )}

      {!isLoading && itemsAdminMenu && (
        <div className="flex items-center justify-center border border-red-600 w-full lg:w-full md:w-full">
          {itemsAdminMenu?.map((item, key) => {
            return item.visible ? (
              <Button variant='ghost' onClick={() => item.onClick(item.path)} key={`button-menuadmin-${key}`}>
                <Typography key={`text-header-${key}`} className="font-semibold" variant={item.variant}>
                  {item.label}
                </Typography>
              </Button>
            ) : null
          })}
        </div>
      )}

      <div className="flex items-center space-x-2">

        {isLoading && (
          [...new Array(2)].map((_, key) => (
            <React.Fragment key={`skeleton-button-${key}`}>
              <SkeletonButton />
            </React.Fragment>
          ))
        )}

        {!isLoading && itemsTexts?.map((item, key) => {
          return item.visible ? (
            <Typography key={`text-header-${key}`} variant={item.variant}>
              {item.label}
            </Typography>
          ) : null
        })}

        {!isLoading && itemsButtons?.map((item, key) => {
          return item.visible ? (
            <Button key={`button-header-${key}`} onClick={() => item.onClick(item.path)} variant={item.variant} className={item.classes}>
              {item.label}
              {item.icon && item.icon}
            </Button>
          ) : null
        })}

        <DropdownMenu items={itemsMenu}>
          <div className="rounded-full px-2 border border-gray-300 items-center h-12 flex justify-center cursor-pointer">
            <div className="flex justify-center space-x-2 items-center">
              <Icon name="HamburgerMenuIcon" className="h-5 w-5 text-foreground" />
              <CustomAvatar user={user || {} as TUser} />
            </div>
          </div>
        </DropdownMenu>
      </div>
    </>
  )
}

export { HeaderDefault }
