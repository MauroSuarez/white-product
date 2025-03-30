import { Button } from "@/presentation/ds/button"
import { BrandLogo } from "../brand-logo"

type HeaderProps = {
  currentSubStep: number
  handleOpenChange: () => void
}

const Header = ({
  currentSubStep,
  handleOpenChange
}: HeaderProps) => {
  return (
    <div className='flex w-full justify-between'>
      <BrandLogo
        variant='secondary'
        classNameIcon='text-neutral-500'
      />
      <div className='space-x-4'>
        {currentSubStep > 0 && (
          <Button
            onClick={handleOpenChange}
            className='text-neutral-500'
            variant={'link'}
          >
            ¿Necesitas ayuda?
          </Button>
        )}
        <Button
          onClick={handleOpenChange}
          variant={'outline'}
        >
          {currentSubStep > 0 ? 'Guardar y salir' : 'Salir'}
        </Button>
      </div>
    </div>
  )
}

export { Header }
