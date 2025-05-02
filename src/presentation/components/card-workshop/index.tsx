import { AuthWrapper } from "@/app/[lang]/(app)/auth/AuthWrapper"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/presentation/ds/card"
import { Icon } from "@/presentation/ds/icon"
import Link from "next/link"
import { CategoryIcon } from "../category-icon"
import { sanitizeWorkshopName, truncateText } from "@/presentation/utils/stringHelper"
import { Badge } from "@/presentation/ds/badge"
import { Typography } from "@/presentation/ds/typography"
import { compareDates, getDescriptionBetweenDates } from "@/presentation/utils/dateHelpers"
import { Tag } from "lucide-react"
import { CustomTooltip } from "../custom-tooltip"



type CardWorkShopProps = {
  addFavorite?: () => void
  workshop: any
}

export const CardWorkShop = ({
  addFavorite,
  workshop
}: CardWorkShopProps) => {
  const nameSanitize = sanitizeWorkshopName(workshop.name)
  const workshopUrl = `/es/workshop/${workshop.id}/${nameSanitize}`
  const isNew = compareDates(workshop.created_at, 20)
  return (
  <Card className="overflow-hidden rounded-lg border-0">
    <div className="relative">
      <Link href={`${workshopUrl}`}>
        <img
          src={workshop.image}
          alt="Taller mecánico"
          className="w-full h-48 object-cover"
        />
      </Link>

      {/* Nueva */}
      {isNew && (
        <div className="absolute cursor-pointer top-0 left-0">
          <Badge className="flex flex-nowrap !w-auto rounded-none rounded-br-md" variant={'default'}>
            {isNew}
          </Badge>
        </div>
      )}

      {/* Favoritos */}
      <AuthWrapper onClick={addFavorite} authRequired={true} className="absolute cursor-pointer top-2 right-2 bg-background rounded-full p-2 shadow-md">
        <CustomTooltip content={workshop.isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}>
          <Icon name={`${workshop.isFavorite ? 'HeartFilledIcon' : 'HeartIcon'}`} className={`w-4 h-4 text-foreground}`} />
        </CustomTooltip>
      </AuthWrapper>
      
      {/* Promociones */}
      {workshop.hasPromotions && (
        <CustomTooltip content={'Tiene promociones'}>
          <div className="absolute cursor-pointer top-12 right-2 bg-background rounded-full p-2 shadow-md">
            <Tag className={`w-4 h-4 text-foreground}`} />
          </div>
        </CustomTooltip>
      )}
      
      {/* Categoria */}
      <div className="w-auto flex absolute -bottom-4 left-1">
        <Badge className="flex flex-nowrap !w-auto bg-background border hover:border-primary" variant={'outline'}>
          <CategoryIcon
            iconName={workshop.category_icon}
            height={25}
            width={25}
          />
          <p className="ml-2">{workshop.category}</p>
        </Badge>
      </div>
    </div>
    
    <Link href={`${workshopUrl}`}>
      <CardContent className="px-0">
        <CardHeader className="pt-6 px-0">
          <CardTitle className="text-xl font-semibold">{workshop.name}</CardTitle>
          <Typography variant='muted'>
            Miembro desde {getDescriptionBetweenDates(new Date(workshop.created_at).getTime())}
          </Typography>
          <CardDescription className="text-gray-600">
            {truncateText(workshop.description, 50)}
          </CardDescription>
        </CardHeader>
        
        <CardFooter className="flex items-center space-x-1 py-2 px-0">
          <div className="flex">
            <Icon name='StarIcon' className="h-5 w-5 text-gray-900" />
            <span className="text-sm font-medium">{workshop.rating}</span>
            <span className="text-sm ml-1 text-gray-500">({workshop.countReviews} Reseñas)</span>
          </div>
        </CardFooter>
      </CardContent>
    </Link>
  </Card>
  )
}
