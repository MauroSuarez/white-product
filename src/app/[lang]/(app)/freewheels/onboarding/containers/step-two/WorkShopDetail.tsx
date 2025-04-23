
import { LottieAnimation } from "@/presentation/components/lottie-animation"
import { Typography } from "@/presentation/ds/typography"
import animationServices from '@/presentation/assets/lotties/Animation-Services.json'

const WorkShopDetail = () => {
  return (
    <div className="flex flex-col h-screen md:flex-row gap-6">
      <div className="w-full h-[70%] md:w-1/2 bg-background p-6 flex items-center justify-center">
        <div className="flex-wrap w-4/5 flex h-auto">
          <Typography variant={'p'} className="text-left w-full font-semibold">
            Paso 2
          </Typography>
          <Typography variant={'h1'} className="text-left py-2 border-0 w-full leading-8">
            Hacé que tu espacio
          </Typography>
          <Typography variant={'h1'} className="text-left border-0 w-full leading-8">
            se destaque
          </Typography>
          <Typography variant={'p'} className="text-left mt-4 border-0 w-full leading-8">
            En este paso, podrás personalizar tu espacio de trabajo. Agrega detalles como el nombre de tu taller, una breve descripción y fotos. Esto ayudará a tus clientes a conocerte mejor y a encontrar tu taller más fácilmente.
          </Typography>
        </div>
      </div>

      <div className="w-full h-full md:w-1/2 p-6">
        <LottieAnimation
          animationData={animationServices}
          className="w-full h-full"
          loop={false}
        />
      </div>
    </div>
  )
}

export { WorkShopDetail }
