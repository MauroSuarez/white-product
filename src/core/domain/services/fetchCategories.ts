import { db } from '@/infraestructure/db'

export const fetchCategories = async () => {
  const { data, error } = await db
    .from('categories')
    .select('*')
    .eq('is_visible', true)
    .order('id', { ascending: true })

  if (error || !data) throw new Error(error?.message ?? 'Error get categories')

  return data
}