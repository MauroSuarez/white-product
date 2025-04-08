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
import { CardCategory } from '../../../../../../presentation/components/card-category'
import { Category } from '@/infraestructure/stores/categoriesStore'

interface FormRadioGroupProps {
  name: string
  label?: string
  description?: string
  options: Category[]
  className?: string
  orientation?: 'horizontal' | 'vertical'
  defaultValue?: string
}

export function FormRadioGroupCardCategory({
  name,
  label,
  description,
  options,
  className = '',
  orientation = 'horizontal',
  defaultValue
}: FormRadioGroupProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, formState }) => {
        return (
          <div className='flex flex-wrap w-full'>
            {/* <div className='flex w-full border h-auto py-5'>
              {description && <FormDescription>{description}</FormDescription>}
              <FormMessage />
            </div> */}
            <FormItem className={className}>
              {label && <FormLabel>{label}</FormLabel>}
              
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto'
                >
                  {options.map((option) => {
                    return option.is_visible ? (
                      <div key={option.id}>
                        <RadioGroupItem
                          value={defaultValue || `${option.id}`}
                          id={`${option.id}`}
                          className="peer hidden"
                        />
                        <Label htmlFor={option.label} className="cursor-pointer">
                          <CardCategory
                            className={cn(
                              'p-3 rounded-md border transition-colors cursor-pointer',
                              field.value === option.id.toString()
                                ? 'border-primary' 
                                : 'border-muted hover:border-primary/30'
                            )}
                            category={option.label}
                            icon={option.icon}
                            htmlFor={`${option.id}`}
                          />
                        </Label>
                      </div>
                  ) : null })}
                </RadioGroup>
              </FormControl>
            </FormItem>
          </div>
        )
     }}
    />
  )
}