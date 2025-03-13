
import { IAuthRepository } from "../../interfaces/authRepository"
import { ISignUp } from "../../interfaces/Auth"

export const createSignUpUseCase = (authRepo: IAuthRepository) => {
  return async (dataUser: ISignUp) => {
    const user = await authRepo.signUp(dataUser)
    return user
  }
}
