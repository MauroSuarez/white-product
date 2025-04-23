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
import { RadioGroup, RadioGroupItem } from '@/presentation/ds/radio-group'
import { Label } from '@/presentation/ds/label'
import { cn } from '@/presentation/utils/uiHelpers'

interface Options {
  value: string
  label: string
  description?: string
  icon?: React.ReactNode
}

interface FormRadioGroupProps {
  name: string
  label?: string
  description?: string
  options: Options[]
  className?: string
  orientation?: 'horizontal' | 'vertical'
}

export function FormRadioGroups({
  name,
  label,
  description,
  options,
  className = '',
  orientation = 'vertical',
}: FormRadioGroupProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className={orientation === 'horizontal' ? 'flex gap-4 items-center' : 'space-y-2'}
              >
                {options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={`${name}-${option.value}`} />
                    <Label htmlFor={`${name}-${option.value}`} className="cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
          </FormControl>
      
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}