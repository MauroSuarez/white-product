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
import { Typography } from '@/presentation/ds/typography'
import { BasicServiceIcon } from '@/presentation/components/basic-service-icon'

interface ToggleOption {
  id: number
  service: string
  description: string
  id_category: number
  icon?: string
  is_visible: boolean
  className?: string
}

interface FormToggleServicesProps {
  name: string
  label?: string
  description?: string
  options: ToggleOption[]
  className?: string
  orientation?: 'horizontal' | 'vertical'
  type?: 'single' | 'multiple'
}

export function FormToggleGroupServices({
  name,
  label,
  description,
  options,
  className = '',
  orientation = 'horizontal',
  type = 'single',
}: FormToggleServicesProps) {
  const { control } = useFormContext()
  return (
    <div className='flex w-full mt-4 min-h-60 items-center py-8'>
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
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto'
              >
                {options.map((option) => (
                  <ToggleGroupItem
                    key={option.id}
                    value={`${option.id}`}
                    aria-label={option.service}
                    className={cn(
                      `flex items-center h-auto py-2 gap-2 px-4 ${option.id_category === 18 ? 'border-2 border-dashed' : 'border border-solid'} rounded-lg data-[state=on]:border-primary data-[state=on]:bg-primary/10`,
                      option.className
                    )}
                  >
                    <div className="pt-0.5 w-12 h-12 flex items-center justify-center">
                      <div 
                        className="flex items-center justify-center"
                        style={{ width: `80px`, height: 'auto' }}
                      >
                        {option.icon ? (
                          <BasicServiceIcon className='!w-[30px] !h-[30px] max-w-[80px] max-h-[80px]' iconName={option.icon} />
                        ) : (
                          <Settings className='!w-[30px] !h-[30px] max-w-[80px] max-h-[80px]' />
                        )}
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-1 justify-start items-start">
                      <div className='w-full space-y-2 flex'>
                        <Typography variant={'p'} className='font-semibold'>
                          {option.service}
                        </Typography>                          
                      </div>
                      <div className='w-full space-y-2 flex'>
                        <Typography variant={'muted'} className='text-left'>
                          {option.description}
                        </Typography>
                      </div>
                    </div>
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}