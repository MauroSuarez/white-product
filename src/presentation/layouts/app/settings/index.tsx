import Link from "next/link"
import { Navbar } from "./Navbar"

export default function SettingLayout({
  children
}: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 md:gap-8 border border-white">
      <div className="grid w-full gap-2">
        <h1 className="text-3xl font-semibold">Configuración</h1>
      </div>
      <div className="grid w-full items-start gap-2 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr] border border-white">
        <Navbar />
        <div className="grid gap-6 h-auto">
          {children}
        </div>
      </div>
    </main>
  )
}
