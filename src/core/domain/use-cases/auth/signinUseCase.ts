import { ISignIn } from "../../interfaces/Auth"
import { IAuthRepository } from "../../interfaces/authRepository"

export const createSignInUseCase = (repository: IAuthRepository) => {
  return async (credentials: ISignIn) => {
    const user = await repository.signIn(credentials)
    return user
  }
}