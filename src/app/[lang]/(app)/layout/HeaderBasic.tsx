import React from "react"
import { Button } from "@/presentation/ds/button"
import { Icon } from "@/presentation/ds/icon"
import { usePositionScroll } from "@/presentation/hooks/usePositionScroll"
import { User as TUser } from "@/core/domain/entities/User"
import { Typography } from "@/presentation/ds/typography"

export type HeaderBasicProps = {
  user?: TUser
  isFreeWheel?: boolean
  handleItemClick: (value: any) => void
}

const HeaderBasic: React.FC<HeaderBasicProps> = ({
  user,
  handleItemClick,
}) => {
  const { isSmall } = usePositionScroll()

  const handleVerifyNavigate = () => {
    const objItem: { action?: string, path?: string } = {}
    if(!user) {
      objItem.action = 'signin'
    }else {
      objItem.path = '/freewheels/onboarding'
    }
    
    handleItemClick && handleItemClick(objItem)
  }

  return (
    <>
      <Typography variant='h4'>
        ¿Todo listo para poner tu FreeWheels?
      </Typography>
      
      <Button onClick={handleVerifyNavigate} variant="default" className="hidden md:flex h-10">
        <Icon name='PlusIcon' className="text-background" />
        Empezar
      </Button>
    </>
  )
}

export { HeaderBasic }
