import { BrandLogo } from "@/presentation/components/brand-logo"
import { Button } from "@/presentation/ds/button"

type HeaderProps = {
  isShow: boolean
  handleOpenChange: () => void
}

const Header = ({
  isShow = false,
  handleOpenChange
}: HeaderProps) => {
  return (
    <div className='flex w-full justify-between'>
      <BrandLogo
        variant='secondary'
        classNameIcon='text-neutral-500'
      />
      <div className='space-x-4'>
        {isShow ? (
          <Button
            onClick={() => {}}
            className='text-neutral-500'
            variant={'link'}
          >
            ¿Necesitas ayuda?
          </Button>
        ): null}
        <Button
          onClick={!isShow ? handleOpenChange : undefined}
          variant={'outline'}
          type={isShow ? 'submit' : 'button'}
          // form={isShow ? 'setup-form' : undefined}
        >
          {isShow ? 'Guardar y salir' : 'Salir'}
        </Button>
      </div>
    </div>
  )
}

export { Header }
