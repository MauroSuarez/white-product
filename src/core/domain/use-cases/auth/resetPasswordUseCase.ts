
import { IAuthRepository } from "../../interfaces/authRepository"

export const createResetPasswordUseCase = (authRepo: IAuthRepository) => {
  return async (email: string) => {
    const success = await authRepo.resetPassword(email)
    return success
  }
}
