
import { IAuthRepository } from "../../interfaces/authRepository"

export const createResetPasswordUseCase = (repository: IAuthRepository) => {
  return async (email: string) => {
    const success = await repository.resetPassword(email)
    return success
  }
}
