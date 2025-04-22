import { User } from "@/core/domain/entities/User";

export function getFirstLettersRegex(text: string): string {
  return text
    .match(/\b\w/g) // Encuentra todas las primeras letras de palabras
    ?.join('') // Une las letras (operador opcional por si es null)
    || ''; // Fallback para strings vacíos
}

export function displayName(user: User): string {
  return `${user?.user_metadata?.first_name} ${user?.user_metadata?.last_name}`
}

export const capitalizeString = (str: string) => {
  if (!str || typeof str !== 'string') return str
  
  return str
    .trim()
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}
