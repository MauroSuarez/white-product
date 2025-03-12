import AuthLayout from "@/presentation/layouts/auth"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Iniciar sesión',
  description: 'a ver',
}

export default function Layout({
  children
}: { children: React.ReactNode }) {
  return (
    <AuthLayout>
      {children}
    </AuthLayout>
  )
}
