import { APPLICATION } from "./constants";

export default {
  application: APPLICATION,
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  db: {
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  }
}