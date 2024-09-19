'use client'

import Link from "next/link";
import { useTheme } from "next-themes";
import { LayersIcon, CubeIcon, MagnifyingGlassIcon, GearIcon, SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Input } from "@/presentation/ui/atoms/input";
import { Button } from "@/presentation/ui/atoms/button";

export default function AppLayout({
  children
}: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  return (
    <section className="flex min-h-screen w-full flex-col bg-background">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 py-4">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <LayersIcon />
            <span className="sr-only">Acme Inc</span>
          </Link>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
          <Link
            href="/app/settings"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <GearIcon className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Link>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <div className="w-full flex h-20 justify-end items-center px-4">
            <Button variant='link' className="" onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}>
              {theme === "light" ? (
                <div className="text-foreground"><MoonIcon /></div>
              ) : (
                <div className="text-foreground"><SunIcon /></div>
              )}
            </Button>
          </div>
          <div className="relative ml-auto flex-1 md:grow-0">
            <MagnifyingGlassIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
            />
          </div>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </main>
      </div>
    </section>
  )
}
