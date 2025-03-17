import { APPLICATION } from "./constants";

export default {
  application: APPLICATION,
  db: {
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  }
}