import { db } from '@/infraestructure/db'
import { ISignIn } from '../interfaces/Auth'

export const fetchSignIn = async (credentials: ISignIn) => {
  const { data, error } = await db.auth.signInWithPassword({
    email: credentials.email,
    password: credentials.password,
  })

  if (error) {
    throw error;
  }

  return { ...data.user, ...data.session }
}

export const fetchLogout = async () => {
  const { error } = await db.auth.signOut()

  if (error) {
    throw error
  }
}
