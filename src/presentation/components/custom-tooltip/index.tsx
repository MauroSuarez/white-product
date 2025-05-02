
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/presentation/ds/tooltip"
import { Typography } from "@/presentation/ds/typography"
import { cn } from "@/presentation/utils/uiHelpers"

type CustomTooltipProps = {
  children: React.ReactNode
  content?: string | React.ReactNode
  className?: string
}

export function CustomTooltip({
  children,
  content,
  className,
}: CustomTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent className={cn(`bg-background border border-gray-200`, className)}>
          {typeof content === 'string' ? (
             <Typography variant='muted' className="text-gray-800">{content}</Typography>
          ) : content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
