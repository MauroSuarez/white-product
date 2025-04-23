import { fetchSignIn } from "../../services/fetchAuth"
import { fetchUserById } from "../../services/fetchUsers"

export const signInWithMailUseCase = async (credentials: any) => {
  try {
    console.log(credentials, 'credentials')
    const authUser = await fetchSignIn(credentials)

    const user = await fetchUserById(authUser.user.id)

    if (!authUser.user || !user) {
      // Caso especial: usuario ya existe pero no hubo error técnico
      throw new Error('Ocurrio un error al recuperar el usuario')
    }

    return {
      auth: authUser,
      user: user[0],
    }
  } catch (err) {
    throw err
  }
}
