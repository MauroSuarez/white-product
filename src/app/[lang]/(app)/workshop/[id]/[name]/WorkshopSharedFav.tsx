import { Icon } from "@/presentation/ds/icon";

export function WorkshopSharedFav() {
  return (
    <div className="flex justify-between items-center mt-12">
      <h1 className="text-xl font-bold text-gray-800">Título del Componente</h1>
      <div className="flex space-x-4">
        <button className="flex items-center text-gray-600 hover:text-blue-500 transition-colors">
          <Icon name="Share1Icon" className="mr-1" />
          <span className='underline'>Compartir</span>
        </button>
        <button className="flex items-center text-gray-600 hover:text-blue-500 transition-colors">
          <Icon name="HeartIcon" className="mr-1" />
          <span className='underline'>Guardar</span>
        </button>
      </div>
    </div>
  )
}
