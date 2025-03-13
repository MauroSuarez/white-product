import { User } from "@supabase/supabase-js"
import { ISignUp, ISignIn } from "./Auth"

export interface IAuthRepository {
  signUp: (user: ISignUp) => Promise<User | null>
  signIn: (credentials: ISignIn) => Promise<User | null>
  resetPassword: (email: string) => Promise<void>
  getCurrentUser: () => Promise<User | null>
  signOut: () => Promise<void>
}