import { cn } from "@/presentation/utils/uiHelpers"
import { ReactNode } from "react"

interface NotificationDotProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
  pulse?: boolean
  size?: "sm" | "md" | "lg"
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left"
  offset?: number
  children?: ReactNode
}

export function NotificationDot({
  isActive = true,
  pulse = true,
  size = "md",
  position = "top-right",
  offset = 0,
  className,
  children,
  ...props
}: NotificationDotProps) {
  if (!isActive) return <>{children}</>

  return (
    <div className="relative inline-block">
      {children}
      <div
        className={cn(
          "absolute rounded-full bg-destructive",
          pulse && "animate-pulse",
          size === "sm" && "h-2 w-2",
          size === "md" && "h-3 w-3",
          size === "lg" && "h-4 w-4",
          position === "top-right" && `top-0 right-0 translate-x-1/2 -translate-y-1/2`,
          position === "top-left" && `top-0 left-0 -translate-x-1/2 -translate-y-1/2`,
          position === "bottom-right" && `bottom-0 right-0 translate-x-1/2 translate-y-1/2`,
          position === "bottom-left" && `bottom-0 left-0 -translate-x-1/2 translate-y-1/2`,
          className
        )}
        style={{ transform: `translate(${offset}px, -${offset}px)` }}
        {...props}
      />
    </div>
  )
}