'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const typographyVariants = cva(
  '',
  {
    variants: {
      variant: {
        default: 'leading-7',
        h1: 'text-4xl font-extrabold tracking-tight lg:text-5xl',
        h2: 'border-b pb-2 text-3xl font-semibold tracking-tight',
        h3: 'text-2xl font-semibold tracking-tight',
        h4: 'text-xl font-semibold tracking-tight',
        p: 'leading-7',
        muted: "text-sm text-muted-foreground",
      },
      size: {
        // default: "text-sm font-medium leading-none",
        sm: "text-sm font-medium leading-none",
        lg: "text-lg font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
      // size: "default",
    },
  }
)


export interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof typographyVariants> {
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, component = 'p', variant, size, ...props }, ref) => {

    const Comp = component;

    return (
      <Comp
        className={cn(typographyVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
)

Typography.displayName = 'Typography'

export { Typography, typographyVariants }
