'use client'

import { Breadcrumbs } from './Breadcrumbs'
import { Header } from "./Header"
import { Filters } from "./Filters"
import { Footer } from './Footer'

export default function AppLayout({
  children
}: { children: React.ReactNode }) {
  return (
    <section className="flex min-h-screen w-full flex-col bg-background">
      <section className='sticky top-0 z-50 bg-background'>
        <Header />
        <Filters />
      </section>
      {children}
      <Footer />
    </section>
  )
}
