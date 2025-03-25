import { db } from '@/infraestructure/db'

export const fetchCategories = async () => {
  const { data, error } = await db
    .from('workshops')
    .select('*')

  if (error || !data) throw new Error(error?.message ?? 'Error get categories')

  return data
}

export const fetchWorkshopExistsUserId = async (userId: string) => {
  const { data, error } = await db
    .from('workshops')
    .select('id')
    .eq('id_user', userId)
    .limit(1)

  // if (error) {
  //   console.log('a ver error', error.message)
  //   throw new Error(error.message);
  // }

  return data ?? []
}

export const fetchWorkshopByUserId = async (userId: string) => {
  console.log(userId, 'ID USER')
  const { data, error } = await db
    .from('workshops')
    .select('*')
    .eq('user_id', userId)

  console.log(data, 'DATA SERVICE')

  // if (error) {
  //   throw new Error(error.message);
  // }

  return data ?? []
}

export const fetchWorkshopById = async () => {
  
}