
import { LottieAnimation } from "@/presentation/components/lottie-animation"
import { Typography } from "@/presentation/ds/typography"
import animationPublish from '@/presentation/assets/lotties/Animation-Publish.json'

const ReadyToPublish = () => {
  return (
    <div className="flex flex-col h-screen md:flex-row gap-6">
      <div className="w-full h-[70%] md:w-1/2 bg-background p-6 flex items-center justify-center">
        <div className="flex-wrap w-4/5 flex h-auto">
          <Typography variant={'p'} className="text-left w-full font-semibold">
            Paso 3
          </Typography>
          <Typography variant={'h1'} className="text-left py-2 border-0 w-full leading-8">
            Terminá todo y
          </Typography>
          <Typography variant={'h1'} className="text-left border-0 w-full leading-8">
            publicá tu taller
          </Typography>
          <Typography variant={'p'} className="text-left mt-4 border-0 w-full leading-8">
            Por último, vas a elegir horarios, establecer presupuestos y publicar tu taller. Una vez que lo hagas, tus clientes podrán encontrarte y contactarte para pedir turnos. ¡Listo para empezar!
          </Typography>
        </div>
      </div>

      <div className="w-full h-full md:w-1/2 p-6">
        <LottieAnimation
          animationData={animationPublish}
          className="w-full h-full"
          loop={false}
        />
      </div>
    </div>
  )
}

export { ReadyToPublish }
