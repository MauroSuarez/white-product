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
