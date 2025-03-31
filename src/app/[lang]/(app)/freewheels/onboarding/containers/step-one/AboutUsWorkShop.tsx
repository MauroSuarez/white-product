import { SimpleCard } from "@/presentation/components/simple-card"
import { Typography } from "@/presentation/ds/typography"
import { RocketIcon } from "../../svg/Rocket"
import { WorkShopIcon } from "../../svg/WorkShop"
import { ServicesIcon } from "../../svg/Services"

const icons: Record<'rocket' | 'workshop' | 'services', React.FC<React.SVGAttributes<SVGSVGElement>>> = {
  'rocket': RocketIcon,
  'workshop': WorkShopIcon,
  'services': ServicesIcon,
}

const AboutUsWorkShop = () => {
  return (
    <div className="flex flex-col h-screen md:flex-row gap-6">

      <div className="w-full h-[70%] md:w-1/2 bg-white p-6 flex items-center justify-center">
        <div className="flex-wrap w-4/5 flex h-auto">
          <Typography variant={'p'} className="text-left w-full font-semibold">
            Paso 1
          </Typography>
          <Typography variant={'h1'} className="text-left py-2 border-0 w-full leading-8">
            Contanos aceca de
          </Typography>
          <Typography variant={'h1'} className="text-left border-0 w-full leading-8">
            tu FreeWheel (taller, gomería, lavadero, etc.)
          </Typography>
          <Typography variant={'p'} className="text-left mt-4 border-0 w-full leading-8">
            FreeWheels es fácil. Con nuestra plataforma, puedes gestionar tus vehículos, optimizar rutas y ahorrar tiempo de manera sencilla. ¡Comienza hoy mismo!
          </Typography>
        </div>
      </div>
      
      <div className="w-full h-full md:w-1/2 p-6">
        fasdfasd
      </div>
    </div>
  )
}

export { AboutUsWorkShop }
