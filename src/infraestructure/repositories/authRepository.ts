import { db } from '@/infraestructure/db'
import { IAuthRepository } from '@/core/domain/interfaces/authRepository'
import { ISignIn, ISignUp } from '@/core/domain/interfaces/auth'

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
      id: data.user.id,
      email: data.user.email!,
      firstName: data.user.user_metadata?.first_name_name,
      lastName: data.user.user_metadata?.last_name,
      roleId: data.user.user_metadata.id_role,
      avatar: data.user.user_metadata?.avatar,
      userName: data.user.user_metadata?.userName,
      createdAt: data.user.created_at
    }
  },

  async signIn(credentials: ISignIn) {
    const { data, error } = await db.auth.signInWithPassword({
      email: credentials.email,
      password: credentials.password,
    })
    console.log(credentials, error)
    if (error) {
      throw error;
    }

    console.log(data, 'USUARIO')

    return {
      id: data.user.id,
      email: data.user.email!,
      firstName: data.user.user_metadata?.first_name_name,
      lastName: data.user.user_metadata?.last_name,
      roleId: data.user.user_metadata.id_role,
      avatar: data.user.user_metadata?.avatar,
      userName: data.user.user_metadata?.userName,
      createdAt: data.user.created_at
    }
  },

  async getCurrentUser() {
    const { data, error } = await db.auth.getUser()
    if (error) throw new Error(error.message)
    if (!data.user) return null

    return {
      id: data.user.id,
      email: data.user.email!,
      firstName: data.user.user_metadata?.first_name_name,
      lastName: data.user.user_metadata?.last_name,
      roleId: data.user.user_metadata.id_role,
      avatar: data.user.user_metadata?.avatar,
      userName: data.user.user_metadata?.userName,
      createdAt: data.user.created_at
    }
  }
}

export { AuthRepository }
