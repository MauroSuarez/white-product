import { Header } from "@/presentation/layouts/shared/Header"
import { Footer } from '@/presentation/layouts/shared/Footer'
import { Filters } from "@/presentation/layouts/shared/Filters"

export default function AppLayout({
  children
}: { children: React.ReactNode }) {
  return (
    <section className="flex min-h-screen w-full flex-col bg-background">
      <div className="sticky top-0 z-50 bg-background">
        <Header />
        <Filters />
      </div>
      {children}
      <Footer />
    </section>
  )
}
