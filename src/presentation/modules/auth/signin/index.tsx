'use client'

import { Button } from "@/presentation/ui/atoms/button";
import { Typography } from "@/presentation/ui/atoms/typography";

import Link from "next/link";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon  } from '@radix-ui/react-icons'
import { FormSignIn } from "./Form";

const getProductByIdData = (params: { id: string }) => {
  return fetch(`/api/auth/signin`).then(res => res.json())
}

export default function SignInModule() {
  const productDetail = getProductByIdData({ id: 'Hola mauro' })
  const { theme, setTheme } = useTheme();
  return (
    <section className="h-full">
      <div className="w-full flex h-20 justify-end items-center px-4">
        <Button variant='link' className="" onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}>
          {theme === "light" ? (
            <div className="text-foreground"><MoonIcon /></div>
          ) : (
            <div className="text-foreground"><SunIcon /></div>
          )}
        </Button>
        <Button>
          <Link href={'/es/auth/signup'}>Registrarse</Link>
        </Button>
      </div>
      <div className="w-full flex h-fit justify-center items-center my-10 flex-wrap py-8 px-12">
        <div className="flex w-full h-12 justify-center items-center">
          <Typography component='h3' variant='h3'>
            Iniciar sesión
          </Typography>
        </div>
        <div className="flex w-full h-10 justify-center items-center">
          <Typography component='p' variant='muted'>
            Inicia sesión para acceder
          </Typography>
        </div>
        <FormSignIn />
      </div>
    </section>
  );
}
