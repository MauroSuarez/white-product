import { Footer } from "./layout/Footer"

export default function AppLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex min-h-screen h-auto w-full flex-col bg-background">
      {children}
      <Footer />
    </section>
  )
}
