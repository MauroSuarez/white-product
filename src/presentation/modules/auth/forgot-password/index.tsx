import { FormForgotPassword } from './Form';
import { Button } from "@/presentation/ui/atoms/button";
import { Typography } from "@/presentation/ui/atoms/typography";
import Link from "next/link";

export default function ForgotPaswordModule() {
  return (
    <section className="h-full">
      <div className="w-full flex h-20 justify-end items-center px-4">
        <Button>
          <Link href={'/es/auth/signin'}>Volver</Link>
        </Button>
      </div>
      <div className="w-full flex h-fit justify-center items-center my-10 flex-wrap py-8 px-12">
        <div className="flex w-full h-12 justify-center items-center">
          <Typography component='h3' variant='h3'>
            Recupear contraseña
          </Typography>
        </div>
        <div className="flex w-full h-10 justify-center items-center">
          <Typography component='p' variant='muted'>
            Ingrese su email para proceder a recuperar su contraseña.
          </Typography>
        </div>
        <FormForgotPassword />
      </div>
    </section>
  );
}