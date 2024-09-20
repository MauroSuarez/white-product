'use client'

import Link from "next/link";
import Image from "next/image"
import { useTheme } from "next-themes";
import { LayersIcon, HamburgerMenuIcon, MagnifyingGlassIcon, GearIcon, SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Input } from "@/presentation/ui/atoms/input";
import { Button } from "@/presentation/ui/atoms/button";
import { Breadcrumbs } from './Breadcrumbs';

export default function AppLayout({
  children
}: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  return (
    <section className="flex min-h-screen w-full flex-col bg-neutral-100 dark:bg-neutral-800">
      <aside className={`w-20 fixed inset-y-0 left-0 hidden flex-col border-r sm:flex bg-background`}>
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
          <div className="flex w-full pl-4">
            <Button size="icon" variant="outline" className="sm:hidden">
              <HamburgerMenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
            <div className="relative ml-auto flex-1 md:grow-0 ">
              <MagnifyingGlassIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar..."
                className="w-full rounded-lg bg-background pl-8 md:w-[300px] lg:w-[320px]"
              />
            </div>
            <div className="w-auto flex justify-end items-center">
              <Button variant='link' className="" onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}>
                {theme === "light" ? (
                  <div className="text-foreground"><MoonIcon /></div>
                ) : (
                  <div className="text-foreground"><SunIcon /></div>
                )}
              </Button>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="overflow-hidden rounded-full"
            >
              <Image
                src=""
                width={36}
                height={36}
                alt="Avatar"
                className="overflow-hidden rounded-full"
              />
            </Button>
          </div>
        </header>
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
