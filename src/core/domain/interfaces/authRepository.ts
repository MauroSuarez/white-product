import { User } from "@/core/domain/entities/User"
import { ISignUp, ISignIn } from "./auth"

export interface IAuthRepository {
  signUp: (user: ISignUp) => Promise<User | null>
  signIn: (credentials: ISignIn) => Promise<User | null>
  // resetPassword: (email: string) => Promise<void>
  getCurrentUser: () => Promise<User | null>
  // signOut: () => Promise<void>
}