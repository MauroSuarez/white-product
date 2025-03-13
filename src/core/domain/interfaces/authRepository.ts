import { ISignUp, ISignIn } from "./Auth"
import { User } from "@/core/domain/entities/User"

export interface IAuthRepository {
  signUp: (user: ISignUp) => Promise<User | null>
  signIn: (credentials: ISignIn) => Promise<User | null>
  resetPassword: (email: string) => Promise<{ success: boolean }>
  getCurrentUser: () => Promise<User | null>
  // signOut: () => Promise<void>
}