export type { User as TAuth } from "@supabase/supabase-js"

export type TUsers = {
  id: string
  id_user: string
  first_name: string
  last_name: string
  email: string
  phone: string
  avatar_url: string
  freewheels_tag: string
  id_rol: number
  created_at: string
  updated_at: Date 
}