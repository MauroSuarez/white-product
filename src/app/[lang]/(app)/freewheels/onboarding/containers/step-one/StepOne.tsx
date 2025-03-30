import { Typography } from "@/presentation/ds/typography"

const StepOne = () => {
  return (
    <div className="flex flex-col h-screen md:flex-row gap-6 border border-red-600">
      {/* Columna izquierda */}
      <div className="w-full h-[70%] md:w-1/2 bg-white p-6 flex items-center justify-center border border-blue-500">
        <Typography variant={'h1'} className="border-0 text-center leading-8">
          Comenzar a usar FreeWheels es fácil
        </Typography>
      </div>
      
      {/* Columna derecha */}
      <div className="w-full h-full md:w-1/2 p-6">
        {Array.from({ length: 3 }, (_item: undefined, key) => (
          <div key={key}>
            fadfasdf {key}
          </div>
        ))}
      </div>
    </div>
  )
}

export { StepOne }
