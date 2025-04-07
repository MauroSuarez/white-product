import { db } from '@/infraestructure/db'
import { ISignIn, ISignUp } from '../entities/Auth'

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

export const fetchSignUp = async (dataUser: ISignUp) => {
  const { data, error } = await db.auth.signUp({
    email: dataUser.email,
    password: dataUser.password,
    options: {
      data: {
        first_name: dataUser.firstName,
        last_name: dataUser.lastName,
        terms: dataUser.terms,
        username: dataUser.userName,
        avatar: ''
      },
    },
  })
  console.log(data, 'SERVICIO')
  if (error || !data.user) throw new Error(error?.message ?? 'Signup failed')

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
