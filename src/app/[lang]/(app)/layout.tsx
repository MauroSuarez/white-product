import { Footer } from "./Footer"

export default function AppLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex min-h-screen w-full flex-col bg-background">
      {children}
      <Footer />
    </section>
  )
}
