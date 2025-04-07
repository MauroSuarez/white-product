'use client'

import { useFormContext } from 'react-hook-form'
import { Checkbox } from '@/presentation/ds/checkbox'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/presentation/ds/form'
import { Label } from '@radix-ui/react-label'

interface FormCheckboxProps {
  name: string
  label: string
  description?: string
  disabled?: boolean
  classNameContainer?: string
  className?: string
  id?: string
}

export function FormCheckbox({
  name,
  label,
  description,
  disabled = false,
  classNameContainer = '',
  className = '',
  id
}: FormCheckboxProps) {
  const { control } = useFormContext()
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) =>  (
        <FormItem className={`flex flex-row items-start space-x-3 space-y-0 ${classNameContainer}`}>
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              disabled={disabled}
              className={className}
              id={id}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <Label htmlFor={id}>{label}</Label>
            {description && <FormDescription>{description}</FormDescription>}
          </div>
          <FormMessage />
        </FormItem>
        )
      }
    />
  )
}