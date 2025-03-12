'use client'

import { Breadcrumbs } from './Breadcrumbs'
import { Aside } from './Aside'
import { Header } from "./Header"

export default function AppLayout({
  children
}: { children: React.ReactNode }) {
  return (
    <section className="flex min-h-screen w-full flex-col bg-accent dark:bg-neutral-900">
      <Aside />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="grid flex-1 items-start gap-4 sm:px-6 sm:py-0 md:gap-8">
          <Breadcrumbs />
          <div className="flex w-full h-auto bg-transparent px-8 mt-2">
            {children}
          </div>
        </main>
      </div>
    </section>
  )
}
