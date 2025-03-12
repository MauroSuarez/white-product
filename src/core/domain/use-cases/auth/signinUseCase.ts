import { ISignIn } from "../../interfaces/auth"
import { IAuthRepository } from "../../interfaces/authRepository"

export const createSignInUseCase = (authRepo: IAuthRepository) => {
  return async (credentials: ISignIn) => {
    const user = await authRepo.signIn(credentials)
    return user
  }
}