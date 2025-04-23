import { db } from '@/infraestructure/db'
import { TUsers } from '../entities/User'

export const fetchInsertUser = async (user: Partial<TUsers>) => {
  const { data, error } = await db
    .from('users')
    .insert([
      { ...user },
    ])
    .select()

  if (error || !data) throw new Error(error?.message ?? 'Signup failed')

  return data
 }
 

 export const fetchUpdateUserTag = async (user: Partial<TUsers>, tag: string) => {
  const { data, error } = await db
    .from('users')
    .update({ freewheels_tag: tag })
    .eq('id', user.id)
    .select()

  if (error || !data) throw new Error(error?.message ?? 'Updated tag failed')

  return data
}

export const fetchUserById = async (userId: string) => {
  const { data, error } = await db
    .from('users')
    .select('*')
    .eq('id_user', userId)

  if (error || !data) throw new Error(error?.message ?? 'Get user by id failed')

  return data
}