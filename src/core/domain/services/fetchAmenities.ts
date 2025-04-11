import { dbAuth } from '@/infraestructure/db'

export const fetchAmenities = async (token: string) => {
  console.log(token, 'A VER TOKEN')
  const client = dbAuth(token)
  const { data, error } = await client
    .from('amenities')
    .select('*')

  if (error || !data) throw new Error(error?.message ?? 'Error get amenities')

  return data
}