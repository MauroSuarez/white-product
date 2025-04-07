import { FC } from 'react'
import Lottie, { LottieComponentProps } from 'lottie-react'

interface LottieAnimationProps {
  animationData: unknown //LottieComponentProps
  className?: string
  loop?: boolean
  autoplay?: boolean
  speed?: number
}

const LottieAnimation: FC<LottieAnimationProps> = ({
  animationData,
  className = '',
  loop = true,
  autoplay = true,
  speed = 1,
  ...props
}) => {
  return (
    <div className={`lottie-wrapper ${className}`}>
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        // speed property removed as it is not supported
        {...props}
      />
    </div>
  )
}

export default LottieAnimation