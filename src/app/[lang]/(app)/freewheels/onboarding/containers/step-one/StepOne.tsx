import { SimpleCard } from "@/presentation/components/simple-card"
import { Typography } from "@/presentation/ds/typography"

const StepOne = () => {
  const arrOnboarding = [
    {
      title: 'Contanos acerca de tu taller',
      description: 'Compartí algunos datos básicos, como la ubcación',
      icon: '',
    },
    {
      title: 'Hacé que se destaque',
      description: 'Compartí algunos datos básicos, como la ubcación',
      icon: '',
    },
    {
      title: 'termina todo y publicá el anuncio',
      description: 'Compartí algunos datos básicos, como la ubcación',
      icon: '',
    },
  ]
  return (
    <div className="flex flex-col h-screen md:flex-row gap-6">
      {/* Columna izquierda */}
      <div className="w-full h-[70%] md:w-1/2 bg-white p-6 flex items-center justify-center border border-blue-500">
        <Typography variant={'h1'} className="border-0 text-center leading-8">
          Comenzar a usar FreeWheels es fácil
        </Typography>
      </div>
      
      {/* Columna derecha */}
      <div className="w-full h-full md:w-1/2 p-6">
        {arrOnboarding.map((item, key) => (
          <div key={key} className="space-y-10 flex items-center justify-center mt-4">
            <SimpleCard
              item={`${key+1}`}
              title={item.title}
              description={item.description}
              icon={item.icon}
              className={arrOnboarding.length -1 > key ? 'border-b border-neutral-400' : ''}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export { StepOne }
