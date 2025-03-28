import { Alert, AlertDescription, AlertTitle } from "@/presentation/ds/alert"
import { Icon, IconNames } from "@/presentation/ds/icon"

type CustomAlertProps = {
  variant?: "default" | "destructive" | null | undefined
  icon?: IconNames
  title?: string
  description?: string
  className?: string
}

const CustomAlert = ({
  variant = 'default',
  icon,
  title = '',
  description = '',
  className,
}: CustomAlertProps) => {
  return (
    <Alert variant={variant} className={`flex ${className}`}>
      <div className="flex items-start gap-3">
        <div className="pt-0.5">
          {icon && <Icon name={icon} className='h-6 w-6' />}
        </div>
        <div className="flex-1 space-y-1">
          {title && <AlertTitle className="w-full flex">{title}</AlertTitle>}
          {description && <AlertDescription className="w-full flex">{description}</AlertDescription>}
        </div>
      </div>
    </Alert>
  )
}

export { CustomAlert }
