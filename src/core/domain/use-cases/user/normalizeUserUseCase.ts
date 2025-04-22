import { TUsers } from "../../entities/User";
import { capitalizeString } from "@/presentation/utils/stringHelper"

export const normalizeUserUseCase = (user: Partial<TUsers>) => {
  const { first_name, last_name, email } = user

  const name = capitalizeString(first_name!)
  const lastName = capitalizeString(last_name!)
  const mail = email!.trim().toLowerCase()

  return {
    ...user,
    first_name: name,
    last_name: lastName,
    email: mail,
  }
}
