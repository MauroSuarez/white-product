import { cn } from "@/presentation/utils/uiHelpers"

interface DotProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
  pulse?: boolean
  size?: "sm" | "md" | "lg"
}

export function Dot({
  isActive = true,
  pulse = true,
  size = "sm",
  className,
  ...props
}: DotProps) {
  if (!isActive) return null

  return (
    <div
      className={cn(
        "rounded-full bg-destructive top-0 right-0 absolute",
        pulse && "animate-pulse",
        size === "sm" && "h-2 w-2",
        size === "md" && "h-3 w-3",
        size === "lg" && "h-4 w-4",
        className
      )}
      {...props}
    />
  )
}