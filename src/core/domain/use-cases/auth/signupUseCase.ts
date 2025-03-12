import { IUserRepository } from "../../interfaces/userRepository"


export const createSignUpUseCase = (userRepo: IUserRepository) => {
  return async (email: string, password: string, displayName: string, idRole: number) => {
    const user = await userRepo.signUp(email, password, displayName, idRole)
    return user
  }
}