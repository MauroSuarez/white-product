'use client'

import { useFormContext } from 'react-hook-form'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/presentation/ds/form'
import { ToggleGroup, ToggleGroupItem } from '@/presentation/ds/toggle-group'
import { Settings } from "lucide-react"
import { cn } from '@/presentation/utils/uiHelpers'

interface ToggleOption {
  id: number
  value: string
  label: string
  icon?: React.ReactNode
  className?: string
}

interface FormToggleGroupSubCategoryProps {
  name: string
  label?: string
  description?: string
  options: ToggleOption[]
  className?: string
  orientation?: 'horizontal' | 'vertical'
  type?: 'single' | 'multiple'
}

export function FormToggleGroupSubCategory({
  name,
  label,
  description,
  options,
  className = '',
  orientation = 'horizontal',
  type = 'single',
}: FormToggleGroupSubCategoryProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <ToggleGroup
              type={type}
              value={field.value}
              onValueChange={field.onChange}
              className={cn(
                'flex-wrap space-x-4',
                orientation === 'vertical' ? 'flex-col items-start' : 'flex-row'
              )}
            >
              {options.map((option) => (
                <ToggleGroupItem
                  key={option.value}
                  value={`${option.id}`}
                  aria-label={option.label}
                  className={cn(
                    'flex items-center gap-2 px-4 border rounded-lg data-[state=on]:border-primary data-[state=on]:bg-primary/10',
                    option.className
                  )}
                >
                  {option.icon ?? <Settings className="h-5 w-5" />}
                  {option.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}