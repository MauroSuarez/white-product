'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon  } from '@radix-ui/react-icons'
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

  return (
    <header className={`${sticky ? 'fixed bg-primary opacity-90 shadow-lg' : 'bg-[transparent]'} top-0 w-full z-50`}>
      <nav className="">
        <div className="max-w-7xl mx-auto py-10">
          <div className="flex mx-auto w-5/6">
            <div className="flex items-center w-full gap-16">
              <div className="w-auto">
                <Link
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 items-center"
                >
                  <span>Paper.io</span>
                </Link>
              </div>
              <div className="lg:flex gap-8 w-3/5">
                <Link href={`${pathname}/hola`} className="">
                  Home
                </Link>
                <a href="#">Benefits</a>
                <a href="#">Our Classes</a>
                <a href="#">Contact Us</a>
              </div>
              <div>
                <Button variant='link' className="" onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}>
                  {theme === "light" ? (
                    <MoonIcon />
                  ) : (
                    <SunIcon />
                  )}
                </Button>
              </div>
              <div className="flex justify-end w-1/5">
                <Link
                  href={`${pathname}/contact-us`}
                >
                  <Button variant='outline' className="px-8">
                    Acerca de
                  </Button>
                </Link>
                <Link
                  href={`${pathname}/auth/signin`}
                >
                  <Button variant='outline' className="px-8">
                    Empezar
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export { Navbar }
