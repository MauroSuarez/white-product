import { createClient } from '@supabase/supabase-js'
import config from '@/config'

const supabaseUrl = config.db.supabaseUrl
const supabaseKey = config.db.supabaseKey

// export const db = (accessToken?: string) => {
//   const options = accessToken
//     ? {
//         global: {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         },
//       }
//     : {}

//   return createClient(supabaseUrl, supabaseKey, options)
// }

export const db = createClient(supabaseUrl, supabaseKey)
