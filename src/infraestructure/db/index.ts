import { createClient } from '@supabase/supabase-js'
import config from '@/config'

const supabaseUrl = config.db.supabaseUrl
const supabaseAnonKey = config.db.supabaseKey

const dbAuth = (token: string) => {
  const client = createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  })
  
  return client
}

const db = createClient(supabaseUrl, supabaseAnonKey)

export { db, dbAuth }
