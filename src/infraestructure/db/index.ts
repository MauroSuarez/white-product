import { createClient } from '@supabase/supabase-js'
import config from '@/config'

const supabaseUrl = config.db.supabaseUrl
const supabaseKey = config.db.supabaseKey

export const db = createClient(supabaseUrl, supabaseKey)
