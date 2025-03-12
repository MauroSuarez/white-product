import { createClient } from '@supabase/supabase-js'
import config from '@/infraestructure/config'

const supabaseUrl = config.db.supabaseKey
const supabaseKey = config.db.supabaseKey

console.log(config, 'URL')

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
