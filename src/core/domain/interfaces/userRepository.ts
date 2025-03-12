import { User } from "@/core/domain/entities/User"

export interface IUserRepository {
  signUp: (email: string, password: string, displayName: string, idRole: number) => Promise<any>
  // signIn: (credentials: UserCredentials) => Promise<User>
  // resetPassword: (email: string) => Promise<void>
  getCurrentUser: () => Promise<User | null>
  // signOut: () => Promise<void>
}