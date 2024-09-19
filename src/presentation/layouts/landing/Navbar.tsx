'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from "react";
import { AvatarIcon, CubeIcon, MagnifyingGlassIcon, GearIcon, SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/presentation/ui/atoms/button";

const Navbar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  // const searchParams = useSearchParams()
  // console.log(pathname, searchParams.get('hola'), 'a VER')
  const [sticky, setSticky] = useState<boolean>(false);

  const scrollHeader = () => {
    if(window.scrollY >= 20)
      setSticky(true);
    else
      setSticky(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    }
  }, []);

  const classSticky = 'fixed top-0 w-full border-b';

  return (
    <header className={`${sticky ? classSticky : 'absolute rounded-lg top-20 left-1/2 w-4/5 transform -translate-x-1/2 -translate-y-1/2 border'} h-[80px] flex items-center gap-4 px-4 md:px-6 bg-background z-50`}>
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <CubeIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Dashboard
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Orders
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Products
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Customers
        </Link>
        <Link
          href="#"
          className="text-foreground transition-colors hover:text-foreground"
        >
          Settings
        </Link>
      </nav>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex-1 sm:flex-initial">
          <Button variant='link' className="" onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}>
            {theme === "light" ? (
              <div className="text-foreground"><MoonIcon /></div>
            ) : (
              <div className="text-foreground"><SunIcon /></div>
            )}
          </Button>
        </div>
        <Button variant="secondary" size="lg" >
          <Link href={'/auth/signin'}>
            Empezar
          </Link>
        </Button>
      </div>
    </header>
  );
}

export { Navbar }
