import { Icon } from "@/presentation/ds/icon"
import { AuthWrapper } from "../../../auth/AuthWrapper"

export function WorkshopSharedFav() {
  const handleFavClick = () => {
    console.log("FAVORITO")
  }
  return (
    <>
      <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
        <Icon name="Share1Icon" className="mr-1" />
        <span className='underline'>Compartir</span>
      </button>
      <AuthWrapper authRequired={true} onClick={handleFavClick}>
        <div className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
          <Icon name="HeartIcon" className="mr-1" />
          <span className='underline'>Guardar</span>
        </div>
      </AuthWrapper>
    </>
  )
}
