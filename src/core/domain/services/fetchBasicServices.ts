import { dbAuth } from '@/infraestructure/db'

export const fetchBasicServices = async (token: string, id_category: number = 0) => {
  // id_category = 18 basic services for all freewheels
  const client = dbAuth(token)
  const { data, error } = await client
    .from('basic_services')
    .select('*')
    .eq('is_visible', true)
    .in('id_category', [18, id_category])
    .order('id', { ascending: false })

  if (error || !data) throw new Error(error?.message ?? 'Error get basic services')

  return data
}