import { TUsers } from "@/core/domain/entities/User";

export function getFirstLettersRegex(text: string): string {
  return text
    .match(/\b\w/g) // Encuentra todas las primeras letras de palabras
    ?.join('') // Une las letras (operador opcional por si es null)
    || ''; // Fallback para strings vacíos
}

export function displayName(user: TUsers): string {
  console.log(user, 'USER DISPLAY NAME')
  return `${user?.first_name} ${user?.last_name}`
}

export const capitalizeString = (str: string) => {
  if (!str || typeof str !== 'string') return str
  
  return str
    .trim()
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

export function sanitizeWorkshopName(name: string): string {
  return name
    .toLowerCase() // Convertir a minúsculas
    .normalize('NFD') // Separar acentos y caracteres base
    .replace(/[\u0300-\u036f]/g, '') // Eliminar diacríticos
    .replace(/[^a-z0-9\s-]/g, '') // Eliminar caracteres no alfanuméricos (excepto espacios y guiones)
    .trim() // Eliminar espacios al inicio y final
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/-+/g, '-'); // Eliminar múltiples guiones consecutivos
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

interface Coordinate {
  lat: number
  lng: number
}

export function getFormattedDistance(coord1: Coordinate, coord2: Coordinate): string {
  const earthRadiusKm = 6371
  
  const toRadians = (degrees: number) => degrees * (Math.PI / 180)
  
  const latDiff = toRadians(coord2.lat - coord1.lat)
  const lngDiff = toRadians(coord2.lng - coord1.lng)
  
  const a = 
    Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
    Math.cos(toRadians(coord1.lat)) * Math.cos(toRadians(coord2.lat)) *
    Math.sin(lngDiff / 2) * Math.sin(lngDiff / 2)
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distanceKm = earthRadiusKm * c
  const distanceMeters = distanceKm * 1000

  // Formatear el resultado
  if (distanceKm < 1) {
    return `${Math.round(distanceMeters)} metros`
  } else {
    // Mostrar un decimal si es menor a 10 km
    return distanceKm < 10 
      ? `${distanceKm.toFixed(1)} km` 
      : `${Math.round(distanceKm)} km`
  }
}