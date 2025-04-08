'use client'

import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import ReactDOM from 'react-dom'
import 'leaflet/dist/leaflet.css'
import { MapPin } from 'lucide-react'

// Definir el tipo para los marcadores
interface Marker {
  lat: number
  lng: number
  tooltip: React.ReactNode | string
  tooltipPermanent?: boolean // Nueva prop: determina si el tooltip es permanente
  popup?: React.ReactNode | string // Nueva prop: contenido del popup
  popupPermanent?: boolean // Nueva prop: determina si el popup es permanente
  iconName?: keyof typeof LucideIcons
  iconColor?: string // Nueva prop: color del icono
  iconSize?: number // Nueva prop: tamaño del icono
}

// Definir las props del componente
interface MapWithMarkersProps {
  center: [number, number]
  zoom: number
  markers: Marker[]
  styleContainer: {
    height: string
    width: string
  }
  tooltipOptions?: L.TooltipOptions // Opciones adicionales para tooltips
  popupOptions?: L.PopupOptions // Opciones adicionales para popups
}

const svgString = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
    <circle cx="16" cy="16" r="16" fill="#FF0000" />
  </svg>
`


const LucideIcons: { [key: string]: string } = {
  camera: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,
  pin: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`
}

// const LucideIcons = {
//   pin: MapPin,
// }
const createLucideIcon = (svg: string, color: string = '#FF0000', size: number = 24): L.Icon => {
// const createLucideIcon = (IconComponent: React.ComponentType<any>, color: string = '#FF0000', size: number = 24): L.Icon => {
  // const container = document.createElement('div')
  // ReactDOM.render(
  //   <IconComponent 
  //     color={color} 
  //     size={size} 
  //     strokeWidth={2}
  //   />, 
  //   container
  // )
  
  // const svg = container.innerHTML
  // const svgUrl = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
  
  // return new L.Icon({
  //   iconUrl: svgUrl,
  //   iconSize: [size, size],
  //   iconAnchor: [size / 2, size],
  //   popupAnchor: [0, -size / 2],
  //   className: 'lucide-marker-icon'
  // })
  const coloredSvg = svg.replace(/stroke="[^"]*"/g, `stroke="${color}"`)
  const svgUrl = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(coloredSvg)}`
  
  return new L.Icon({
    iconUrl: svgUrl,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size / 2]
  })
}

const Map: React.FC<MapWithMarkersProps> = ({ 
  center, 
  zoom, 
  markers, 
  styleContainer,
  tooltipOptions = {},
  popupOptions = {}
}) => {
  const mapRef = useRef<L.Map | null>(null)
  const tooltipRefs = useRef<{ [key: string]: L.Tooltip }>({})
  const popupRefs = useRef<{ [key: string]: L.Popup }>({})

  useEffect(() => {
    // Inicializar el mapa
    mapRef.current = L.map('map').setView(center, zoom)

    // const customIcon = L.icon({
    //   iconUrl: `data:image/svg+xml;base64,${btoa(svgString)}`,
    //   iconSize: [32, 32],
    //   iconAnchor: [16, 32],
    // })

    L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: '© Google Maps',
    }).addTo(mapRef.current)

    // Agregar marcadores con tooltips y popups
    markers.forEach((marker) => {
      const { lat, lng, tooltip, tooltipPermanent, popup, popupPermanent, iconName, iconColor, iconSize } = marker
      const svgIcon = LucideIcons[iconName || 'pin']
      const markerIcon = createLucideIcon(svgIcon, iconColor, iconSize)
      
      const leafletMarker = L.marker([lat, lng], { icon: markerIcon }).addTo(mapRef.current!)

      // Configurar tooltip si existe
      if (tooltip) {
        const tooltipContainer = document.createElement('div')
        ReactDOM.render(<>{tooltip}</>, tooltipContainer)
        
        const tooltipInstance = leafletMarker.bindTooltip(tooltipContainer, {
          permanent: tooltipPermanent || false,
          direction: 'top',
          ...tooltipOptions // Opciones adicionales
        }).getTooltip()!

        tooltipRefs.current[`${lat}-${lng}`] = tooltipInstance

        // Abrir tooltip si es permanente
        if (tooltipPermanent) {
          leafletMarker.openTooltip()
        }
      }

      // Configurar popup si existe
      if (popup) {
        const popupContainer = document.createElement('div')
        ReactDOM.render(<>{popup}</>, popupContainer)
        
        const popupInstance = leafletMarker.bindPopup(popupContainer, {
          autoClose: !popupPermanent,
          closeOnClick: !popupPermanent,
          ...popupOptions // Opciones adicionales
        }).getPopup()!

        popupRefs.current[`${lat}-${lng}`] = popupInstance

        // Abrir popup si es permanente
        if (popupPermanent) {
          leafletMarker.openPopup()
        }
      }
    })

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [center, zoom, markers, tooltipOptions, popupOptions])

  return <div id="map" style={{ ...styleContainer, zIndex: 10 }} />
}

export { Map }