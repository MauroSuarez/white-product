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
import { PlaceResult, SearchBoxPlaces } from '@/presentation/components/searchbox-places'

interface FormLocationPlacesProps {
  name: string
  label?: string
  description?: string
  defaultValue?: string
  className?: string
}

export function FormLocationPlaces({
  name,
  label,
  description,
  defaultValue,
  className = '',
}: FormLocationPlacesProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, formState }) => {
        return (
          <div className='w-4/5 absolute left-1/2 top-5 transform -translate-x-1/2 z-[99999]'>
            <FormItem className={className}>
              {label && <FormLabel>{label}</FormLabel>}
              <FormControl>

              <SearchBoxPlaces
                onPlaceSelected={(place: PlaceResult) => {
                  field.onChange({
                    address: place.address,
                    lat: place.lat,
                    lng: place.lng,
                    name: place.name,
                    placeId: place.placeId,
                  })
                }}
                placeholder="Escribe una dirección..."
                defaultValue={defaultValue}
                className="mb-4"
              />
              
              </FormControl>
            </FormItem>
          </div>
        )
     }}
    />
  )
}