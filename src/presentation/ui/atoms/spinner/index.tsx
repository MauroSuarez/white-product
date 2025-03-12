"use client"

import * as React from "react"
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const spinnerVariants = cva(
  "animate-spin ",
  {
    variants: {
      variant: {
        default: "text-accent",
        background: "text-background",
        primary: "text-primary"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface SpinnerProps
  extends React.SVGProps<SVGSVGElement>,
    VariantProps<typeof spinnerVariants> {
    size?: number;
}

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ size = 24,
    variant,
    className,
    ...props }, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        ref={ref}
        className={cn(spinnerVariants({ variant, className }))}
      >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
    )
  }
)
Spinner.displayName = "Spinner"

export { Spinner, spinnerVariants }