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

export const fetchSignUp = async (credentials: ISignIn) => {
  const { data, error } = await db.auth.signInWithPassword({
    email: credentials.email,
    password: credentials.password,
  })

  if (error) {
    throw error;
  }

  return { ...data.user, ...data.session }
}

export const fetchSignOut = async () => {
  const { error } = await db.auth.signOut()

  if (error) {
    throw error
  }
}

export const fetchResetPassword = async (email: string) => {
  const { error } = await db.auth.resetPasswordForEmail(email)

  if (error) {
    throw error
  }
}

export const fetchGetCurrentUser = async () => {
  const { data, error } = await db.auth.getUser()
  if (error) throw new Error(error.message)
  if (!data.user) return null

  return { ...data.user }
}

export const fetchSignInTest = async (credentials: ISignIn) => {
  return {
    keys: ['signIn', credentials],
    fetcher: () => db.auth.getUser().then((resp) => resp).catch((e) => e)
  }
}