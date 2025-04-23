
import { APPLICATION } from '@/config/constants'
import { Typography } from '@/presentation/ds/typography'
import { Wrench } from 'lucide-react'
import { cn } from '@/presentation/utils/uiHelpers'
import { BrandAppIcon } from '../svg/BrandApp'
import { BrandOutlineAppIcon } from '../svg/BrandOutlineApp'

type BrandLogoProps = {
  onClick?: () => void
  classNameIcon?: string
  classNameBrand?: string
  variant?: 'primary' | 'secondary'
}

const BrandLogo = ({
  onClick,
  classNameIcon = '',
  classNameBrand = '',
  variant = 'primary'
}: BrandLogoProps) => {
  const variants = {
    'primary': (
      <>
        <div className="text-primary justify-center flex w-full">
          <BrandOutlineAppIcon height={65} width={65} />
        </div>
        {/* <div className="flex space-x-1">
        {['M', 'e', 's', 's', 'a', 'g', 'e'].map((letter, index) => (
          <span 
            key={index}
            className="inline-block animate-[bounce_0.6s_ease_infinite]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div> */}
        <Typography className={cn(`w-auto text-primary hidden md:block lg:block`, classNameBrand)}>{APPLICATION.appName}</Typography>
      </>
    ),
    'secondary': (
      <div className="text-primary justify-center flex w-full">
        <BrandAppIcon height={60} width={60} />
      </div>
    )
  }

  return (
    <div onClick={onClick && onClick} className="flex items-center justify-center flex-wrap transition-all duration-300 cursor-pointer">
      {variants[variant]}
    </div>
  )
}

export { BrandLogo }
