'use client'

import { Breadcrumbs } from './Breadcrumbs'
import { Header } from "./Header"

export default function AppLayout({
  children
}: { children: React.ReactNode }) {
  return (
    <section className="flex min-h-screen w-full flex-col bg-accent dark:bg-neutral-900">
      <Header />
    </section>
  )
}
