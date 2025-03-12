import { db } from '@/infraestructure/db'
import { IUserRepository } from '@/core/domain/interfaces/userRepository'

const AuthRepository: IUserRepository = {
  async signUp(email, password, displayName, idRole) {
    const { data, error } = await db.auth.signUp({
      email,
      password,
      options: {
        data: { display_name: displayName, id_role: idRole },
      },
    })
    if (error || !data.user) throw new Error(error?.message ?? 'Signup failed')

    return {
      id: data.user.id,
      email: data.user.email ?? '',
      displayName: data.user.user_metadata?.display_name,
    }
  },

  async getCurrentUser() {
    const { data, error } = await db.auth.getUser()
    if (error) throw new Error(error.message)
    if (!data.user) return null

    return {
      id: data.user.id,
      email: data.user.email ?? '',
      displayName: data.user.user_metadata?.display_name,
      idRole: data.user.user_metadata.id_role
    }
  }
}

export { AuthRepository }
