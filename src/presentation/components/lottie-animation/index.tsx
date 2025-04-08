import { FC } from 'react'
import Lottie, { LottieComponentProps } from 'lottie-react'

interface LottieAnimationProps {
  animationData: unknown //LottieComponentProps
  className?: string
  loop?: boolean
  autoplay?: boolean
}

const LottieAnimation: FC<LottieAnimationProps> = ({
  animationData,
  className = '',
  loop = true,
  autoplay = true,
  ...props
}) => {
  return (
    <div className={`lottie-wrapper ${className}`}>
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        {...props}
      />
    </div>
  )
}

export { LottieAnimation }