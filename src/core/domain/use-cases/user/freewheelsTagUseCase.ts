import { TUsers } from "../../entities/User";
import { capitalizeString } from "@/presentation/utils/stringHelper"

export const freewheelsTagUserUseCase = (user: Partial<TUsers>) => {
  const { first_name, last_name, id } = user

  const firstLetters = (text: string): string => text.trim().split(' ')[0]

  const name = firstLetters(capitalizeString(first_name!))
  const lastName = firstLetters(capitalizeString(last_name!))

  return `#${name}${lastName}-${id}` // Genera un tag único para Freewheels
}
