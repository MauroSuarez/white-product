import * as React from "react"
import * as Icons from "@radix-ui/react-icons";
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/presentation/utils/uiHelpers"

const iconsVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: "text-foreground",
        primary: "text-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "text-foreground bg-gradient-to-r from-primary via-primary/90 to-neutral-200 hover:bg-primary"
      },
      size: {
        default: "h-4 w-4",
        sm: "h-6 w-6",
        lg: "h-10 w10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export type IconNames = keyof typeof Icons;

export interface IconsProps extends VariantProps<typeof iconsVariants> {
  name: IconNames;
  className?: string;
  onClick?: () => void
}

const Icon = React.forwardRef<React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>, IconsProps>(
  ({ className, variant, name, onClick,  ...props }, ref) => {
    const Comp = Icons[name];

    if (!Comp) {
      return null;
    }

    return (
      <div onClick={onClick && onClick}>
        <Comp
          className={cn(iconsVariants({ variant, className }))}
          // ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Icon.displayName = "Icon"

export { Icon, iconsVariants }
