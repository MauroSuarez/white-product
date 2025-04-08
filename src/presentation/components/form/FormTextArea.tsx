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
import { Textarea } from '@/presentation/ds/textarea'
import { useEffect, useState } from 'react'

interface FormTextAreaProps {
  name: string
  label?: string
  description?: string
  placeholder?: string
  maxLength?: number
  classNameContainer?: string
  className?: string
  showCharCount?: boolean
  defaultValue?: string
}

export function FormTextArea({
  name,
  label,
  description,
  placeholder = '',
  maxLength,
  classNameContainer = '',
  className = '',
  showCharCount = true,
  defaultValue,
}: FormTextAreaProps) {
  const { control, watch } = useFormContext()
  const value = watch(name)
  const [charCount, setCharCount] = useState(0)

  useEffect(() => {
    setCharCount(value?.length || 0)
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>, field: any) => {
    if (maxLength && e.target.value.length > maxLength) {
      return
    }
    field.onChange(e)
  }

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={classNameContainer}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <div className="relative">
              <Textarea
                {...field}
                placeholder={placeholder}
                className={className}
                onChange={(e) => handleChange(e, field)}
                maxLength={maxLength}
                defaultValue={defaultValue}
              />
              {maxLength && showCharCount && (
                <div className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background px-1 rounded">
                  {charCount}/{maxLength}
                </div>
              )}
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}