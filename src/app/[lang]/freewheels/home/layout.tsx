import FreeWheelsLayout from "@/presentation/layouts/freewheels"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home',
  description: 'a ver',
}

export default function Layout({
  children
}: { children: React.ReactNode }) {
  return (
    <FreeWheelsLayout>
      {children}
    </FreeWheelsLayout>
  )
}