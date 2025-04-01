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

const SetupOnboarding = () => {
  const arrOnboarding = [
    {
      title: 'Contanos acerca de tu taller',
      description: 'Compartí algunos datos básicos, como la ubcación',
      icon: 'workshop',
    },
    {
      title: 'Hacé que se destaque',
      description: 'Compartí algunos datos básicos, como la ubcación',
      icon: 'services',
    },
    {
      title: 'termina todo y publicá el anuncio',
      description: 'Compartí algunos datos básicos, como la ubcación',
      icon: 'rocket',
    },
  ]
  return (
    <div className="flex flex-col h-screen md:flex-row gap-6">

      <div className="w-full h-[70%] md:w-1/2 bg-brackground p-6 flex items-center justify-center">
        <div className="flex-wrap w-4/5 flex h-auto space-y-8">
          <Typography variant={'h1'} className="border-0 text-center leading-8">
            Comenzar a usar
          </Typography>
          <Typography variant={'h1'} className="border-0 text-center leading-8">
            FreeWheels es fácil
          </Typography>
        </div>
      </div>
      
      <div className="w-full h-full md:w-1/2 p-6">
        {arrOnboarding.map((item, key) => {
          const ComponentIcon = icons[item.icon as keyof typeof icons]
          return (
            <div key={key} className="space-y-6 flex items-center justify-center">
              <SimpleCard
                item={`${key+1}`}
                title={item.title}
                description={item.description}
                icon={<ComponentIcon height={80} width={80} />}
                className={arrOnboarding.length -1 > key ? 'border-b border-neutral-200' : ''}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { SetupOnboarding }
