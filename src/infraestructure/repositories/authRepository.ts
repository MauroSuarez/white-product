import { db } from '@/infraestructure/db'
import { IAuthRepository } from '@/core/domain/interfaces/authRepository'
import { ISignIn, ISignUp } from '@/core/domain/interfaces/Auth'

const AuthRepository: IAuthRepository = {
  async signUp(dataUser: ISignUp) {
    const { data, error } = await db.auth.signUp({
      email: dataUser.email,
      password: dataUser.password,
      options: {
        data: {
          first_name: dataUser.firstName,
          last_name: dataUser.lastName,
          id_role: dataUser.roleId,
          terms: dataUser.terms,
          username: dataUser.userName,
          avatar: ''
        },
      },
    })
    if (error || !data.user) throw new Error(error?.message ?? 'Signup failed')

    return {
      ...data.user
      }
  },

  async signIn(credentials: ISignIn) {
    const { data, error } = await db.auth.signInWithPassword({
      email: credentials.email,
      password: credentials.password,
    })

    if (error) {
      throw error;
    }

    return {
      ...data.user
     }
  },

  async resetPassword(email) {
    const { error } = await db.auth.resetPasswordForEmail(email)

    if (error) {
      throw error
    }
  },

  async getCurrentUser() {
    const { data, error } = await db.auth.getUser()
    if (error) throw new Error(error.message)
    if (!data.user) return null

    return {
     ...data.user
    }
  },

  async signOut() {
    const { error } = await db.auth.signOut()

    if (error) {
      throw error
    }
  }
}

export { AuthRepository }
