
import { Map } from '@/presentation/components/map'
import { Typography } from "@/presentation/ds/typography"
import { Badge } from "@/presentation/ds/badge"
import { CategoryIcon } from "@/presentation/components/category-icon"
import { Icon } from "@/presentation/ds/icon"
import { Separator } from '@/presentation/ds/separator'
import { AuthWrapper } from './auth/AuthWrapper'
import { CustomTooltip } from '@/presentation/components/custom-tooltip'
import { Clock, MapPin } from 'lucide-react'
import { getFormattedDistance, truncateText } from '@/presentation/utils/stringHelper'

type CardViewProps = {
  addFavorite?: () => void
  workshops?: Array<any>
}


export function MapView({
  addFavorite,
  workshops = [],
}: CardViewProps) {
  const center: [number, number] = [-34.600625, -58.563671]

  const markers = [
    {
      lat: -34.600625,
      
      tooltip: (
        <div style={{ background: 'white', padding: '10px', borderRadius: '5px' }}>
          <h3 style={{ color: 'blue' }}>Tooltip con React</h3>
          <p>Este es un tooltip hecho con un componente de React.</p>
        </div>
      ),
    },
  ]
  return (
    <div className="grid grid-cols-4 gap-4 h-full">
      <div className="col-span-1 overflow-y-auto">
        <div className="flex flex-col gap-2 px-2">
          {workshops.map((workshop, index) => {
            return (
              <div key={index} className="relative text-sm w-full rounded-sm p-4 min-h-20 h-auto border border-gray-200 shadow-sm">
                <Typography variant={'p'} className="font-semibold">
                  {workshop.name}
                </Typography>
                
                <Typography variant={'muted'}>
                  {truncateText(workshop.description, 50)}
                </Typography>
                
                <div className='flex py-4 flew-nowrap items-center gap-2'>
                  <Clock className="h-4 w-4 text-gray-500" />
                  <Typography variant={'muted'} className='text-success'>
                    Abierto
                  </Typography>
                </div>

                <div className='flex py-1 pb-2 flew-nowrap items-center gap-2'>
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <Typography variant={'muted'}>
                    (a {getFormattedDistance({
                      lat: -34.600625,
                      lng: -58.563671,
                    }, {
                      lat: -34.598863,
                      lng: -58.5962141,
                    })} de distancia)
                  </Typography>
                </div>
                
                <div className="flex justify-between items-center h-auto pt-2 border-t border-gray-200">
                  <div>
                    <Badge className="flex flex-nowrap !w-auto bg-background p-2" variant={'outline'}>
                      <CategoryIcon
                        iconName={workshop.category_icon}
                        height={20}
                        width={20}
                      />
                      <p className="ml-2">{workshop.category}</p>
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name='StarIcon' className="h-5 w-5 text-foreground" />
                    <span className="text-sm font-medium">{workshop.rating}</span>
                    <span className="text-sm ml-1 text-gray-500">({workshop.countReviews})</span>
                  </div>
                </div>

                <AuthWrapper onClick={addFavorite} authRequired={true} className="absolute cursor-pointer top-2 right-2 bg-background rounded-full p-2 shadow-md">
                  <CustomTooltip content={workshop.isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}>
                    <Icon name={`${workshop.isFavorite ? 'HeartFilledIcon' : 'HeartIcon'}`} className={`w-4 h-4 text-foreground}`} />
                  </CustomTooltip>
                </AuthWrapper>
              </div>
            )
          })}
        </div>
      </div>

      <div className="col-span-3 rounded-sm">
        {/* <Map
          center={center}
          zoom={13}
          markers={markers}
          styleContainer={{ height: '100%', width: '100%' }}
          classNameContainer='rounded-[1rem]'
        /> */}
      </div>
    </div>
  )
}
