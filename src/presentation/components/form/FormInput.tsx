'use client'

import { useFormContext } from 'react-hook-form'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/presentation/ds/form'
import { Input } from '@/presentation/ds/input'

interface FormInputProps {
  name: string
  label?: string
  description?: string
  placeholder?: string
  type?: string
  classNameContainer?: string
  className?: string
}

export function FormInput({
  name,
  label,
  description,
  placeholder = '',
  type = 'text',
  classNameContainer= '',
  className = '',
}: FormInputProps) {
  const { control } = useFormContext()
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={classNameContainer}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input {...field} type={type} placeholder={placeholder} className={className} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}