
import { IAuthRepository } from "../../interfaces/authRepository"

export const createSignOutUseCase = (repository: IAuthRepository) => {
  return async () => {
    const success = await repository.signOut()
    return success
  }
}
