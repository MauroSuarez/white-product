import { User, Session } from "@supabase/supabase-js"
import { ISignUp, ISignIn } from "./Auth"

export interface IAuthRepository {
  signUp: (user: ISignUp) => Promise<User & Session | null>
  signIn: (credentials: ISignIn) => Promise<User & Session | null>
  resetPassword: (email: string) => Promise<void>
  getCurrentUser: () => Promise<User | null>
  signOut: () => Promise<void>
}