
import { IAuthRepository } from "../../interfaces/authRepository"

export const createSignOutUseCase = (authRepo: IAuthRepository) => {
  return async () => {
    const success = await authRepo.signOut()
    return success
  }
}
