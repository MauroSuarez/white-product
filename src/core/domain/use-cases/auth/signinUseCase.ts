import { ISignIn } from "../../entities/Auth"
import { IAuthRepository } from "../../interfaces/authRepository"

export const createSignInUseCase = (repository: IAuthRepository) => {
  return async (credentials: ISignIn) => {
    const data = await repository.signIn(credentials)

    return data
  }
}