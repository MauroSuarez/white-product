import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home',
  description: 'a ver',
}

export default function Layout({
  children
}: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen h-auto pb-8 w-full flex-col bg-background">
      {children}
    </div>
  )
}