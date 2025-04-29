import { Icon } from "@/presentation/ds/icon"
import { AuthWrapper } from "../../../auth/AuthWrapper"

export function WorkshopSharedFav() {
  const handleFavClick = () => {
    console.log("FAVORITO")
  }
  return (
    <div className="flex justify-between items-center mt-12">
      <h1 className="text-xl font-bold text-gray-800">Título del Componente</h1>
      <div className="flex space-x-4">
        <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
          <Icon name="Share1Icon" className="mr-1" />
          <span className='underline'>Compartir</span>
        </button>
        <AuthWrapper authRequired={true} onClick={handleFavClick}>
          <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
            <Icon name="HeartIcon" className="mr-1" />
            <span className='underline'>Guardar</span>
          </button>
        </AuthWrapper>
      </div>
    </div>
  )
}
