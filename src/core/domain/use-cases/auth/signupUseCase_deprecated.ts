
import { IAuthRepository } from "../../interfaces/authRepository"
import { ISignUp } from "../../entities/Auth"

export const createSignUpUseCase = (repository: IAuthRepository) => {
  return async (dataUser: ISignUp) => {
    const user = await repository.signUp(dataUser)
    return user
  }
}
