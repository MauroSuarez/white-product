import { HeaderSimple } from "@/presentation/layouts/shared/HeaderSimple"
import { Footer } from '@/presentation/layouts/shared/Footer'

export default function FreeWheelsLayout({
  children
}: { children: React.ReactNode }) {
  return (
    <section className="flex min-h-screen w-full flex-col bg-background">
      <div className="sticky top-0 z-50 bg-background">
        <HeaderSimple />
      </div>
      {children}
      <Footer />
    </section>
  )
}
