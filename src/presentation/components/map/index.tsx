'use client'

import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import ReactDOM from 'react-dom'
import 'leaflet/dist/leaflet.css'

// Definir el tipo para los marcadores
interface Marker {
  lat: number
  lng: number
  tooltip: React.ReactNode | string // Puede ser un ReactNode o un string
}

// Definir las props del componente
interface MapWithMarkersProps {
  center: [number, number] // [lat, lng]
  zoom: number
  markers: Marker[]
  styleContainer: {
    height: string
    width: string
  }
}

const svgString = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
    <circle cx="16" cy="16" r="16" fill="#FF0000" />
  </svg>
`

const Map: React.FC<MapWithMarkersProps> = ({ center, zoom, markers, styleContainer }) => {
  const mapRef = useRef<L.Map | null>(null)
  const tooltipRefs = useRef<{ [key: string]: L.Tooltip }>({})

  useEffect(() => {
    // Inicializar el mapa
    mapRef.current = L.map('map').setView(center, zoom)

    const customIcon = L.icon({
      iconUrl: `data:image/svg+xml;base64,${btoa(svgString)}`, // Convertir SVG a base64
      iconSize: [32, 32], // Tamaño del icono
      iconAnchor: [16, 32], // Punto de anclaje del icono
    })

    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '© OpenStreetMap contributors',
    // }).addTo(map)

     L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: '© Google Maps',
    }).addTo(mapRef.current)

    // Añadir un marcador
    // L.marker([-34.598954, -58.5712246]).addTo(map)
    //   .bindTooltip('¡Hola! Este es un marcador.')
    //   //.bindPopup('¡Hola! Este es un marcador.')
    //   //.openPopup()
    // Agregar marcadores con tooltips
    markers.forEach((marker) => {
      const { lat, lng, tooltip } = marker;

      // Crear un contenedor para el tooltip
      const tooltipContainer = document.createElement('div');
      ReactDOM.render(<>{tooltip}</>, tooltipContainer); // Renderizar el contenido del tooltip

      // Agregar el marcador con tooltip
      const leafletMarker = L.marker([lat, lng], { icon: customIcon }).addTo(mapRef.current!);
      leafletMarker.bindTooltip(tooltipContainer, { permanent: false, direction: 'top' });

      // Guardar una referencia al tooltip
      tooltipRefs.current[`${lat}-${lng}`] = leafletMarker.getTooltip()!;
    })

    return () => {
      if (mapRef.current) {
        mapRef.current.remove(); // Eliminar el mapa
        mapRef.current = null; // Limpiar la referencia
      }
    } // Limpiar el mapa al desmontar el componente
  }, [center, zoom, markers])

  return <div id="map" style={{ ...styleContainer, zIndex: 10 }} />
}

export { Map }
