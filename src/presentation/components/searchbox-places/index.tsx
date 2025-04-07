'use client'

import { useEffect, useRef } from 'react'

export interface PlaceResult {
  name: string
  address: string
  lat: number
  lng: number
  placeId: string
}

export interface GooglePlacesSearchProps {
  onPlaceSelected: (place: PlaceResult) => void
  placeholder?: string
  className?: string
}

declare global {
  interface Window {
    google: any
    initMap: () => void
  }
}

const SearchBoxPlaces = ({ 
  onPlaceSelected, 
  placeholder = 'Buscar dirección o lugar...',
  className = '',
  ...props
}: GooglePlacesSearchProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const autocompleteRef = useRef<any>(null)
  
    useEffect(() => {
      const initAutocomplete = () => {
        if (!window.google || !window.google.maps || !window.google.maps.places) {
          console.error('Google Maps API no está cargada')
          return
        }
  
        if (!inputRef.current) return
  
        autocompleteRef.current = new window.google.maps.places.Autocomplete(
          inputRef.current,
          {
            types: ['geocode', 'establishment'],
            fields: ['name', 'formatted_address', 'geometry', 'place_id'],
          }
        )
  
        autocompleteRef.current.addListener('place_changed', () => {
          const place = autocompleteRef.current.getPlace()
          
          if (place.geometry && onPlaceSelected) {
            onPlaceSelected({
              name: place.name || '',
              address: place.formatted_address || '',
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
              placeId: place.place_id || '',
            })
          }
        })
      }
  
      if (!window.google) {
        const script = document.createElement('script')
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places&callback=initMap`
        script.async = true
        script.defer = true
        script.onload = () => {
          window.initMap = initAutocomplete
        }
        document.body.appendChild(script)
      } else {
        initAutocomplete()
      }
  
      return () => {
        if (autocompleteRef.current) {
          window.google?.maps?.event?.clearInstanceListeners?.(autocompleteRef.current)
        }
      }
    }, [onPlaceSelected])
  
    return (
      <div className={`places-search-container ${className}`}>
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          className="w-full p-2 border border-gray-300 rounded-full py-4 shadow-sm focus:outline-none focus:ring focus:ring-primary"
          {...props}
        />
      </div>
    )
}

export { SearchBoxPlaces }