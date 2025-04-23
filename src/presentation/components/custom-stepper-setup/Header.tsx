import { Button } from "@/presentation/ds/button"
import { BrandLogo } from "../brand-logo"

type HeaderProps = {
  currentMainStep: number
  currentSubStep: number
  handleOpenChange: () => void
}

const Header = ({
  currentMainStep,
  currentSubStep,
  handleOpenChange
}: HeaderProps) => {
  const isShow = (currentMainStep === 0 && currentSubStep > 0) || (currentMainStep > 0)
  return (
    <div className='flex w-full justify-between'>
      <BrandLogo
        variant='secondary'
        classNameIcon='text-neutral-500'
      />
      <div className='space-x-4'>
        {isShow ? (
          <Button
            onClick={handleOpenChange}
            className='text-neutral-500'
            variant={'link'}
          >
            ¿Necesitas ayuda?
          </Button>
        ): null}
        <Button
          onClick={handleOpenChange}
          variant={'outline'}
        >
          {isShow ? 'Guardar y salir' : 'Salir'}
        </Button>
      </div>
    </div>
  )
}

export { Header }
