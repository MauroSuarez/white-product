import { Typography } from "@/presentation/ds/typography"
import { cn } from "@/presentation/utils/uiHelpers"

type SimpleCardProps = {
  className?: string
  item?: string
  title?: string
  description?: string
  icon?: string
}

const SimpleCard = ({
  className = '',
  item,
  title,
  description,
}: SimpleCardProps) => {
  return (
    <div className={cn(`flex min-h-10 space-y-8 mt-4 mb-4 py-8 items-center justify-center`, className)}>
      <div className="flex items-start gap-3">
        <div className="pt-0.5">
          <Typography variant={'h4'} className="w-full flex">{item}</Typography>
        </div>
        <div className="flex-2 space-y-1">
          {title && <Typography variant={'h4'} className="w-full flex">{title}</Typography>}
          {description && <Typography variant={'muted'} className="w-full flex">{description}</Typography>}
        </div>
        <div className="pt-0.5 flex-1 h-full min-h-12 border border-blue-600">
          <div>fasdfasd</div>
        </div>
      </div>
    </div>
  )
}

export { SimpleCard }
