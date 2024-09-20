'use client'

import React from 'react';
import { Button } from '@/presentation/ui/atoms/button';
import { FormSignUp } from './Form';
import Link from 'next/link';
import { Typography } from '@/presentation/ui/atoms/typography';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/presentation/ui/atoms/dialog";

export default function SignUpModule() {
  const [open, setOpen] = React.useState(false)
  return (
    <section className="h-full">
      <div className="w-full flex h-20 justify-end items-center px-4">
        <Button>
          <Link href={'/es/auth/signin'}>Ya tengo cuenta</Link>
        </Button>
      </div>
      <div className="w-full flex h-fit justify-center items-center my-2 flex-wrap py-2 px-12">
        <div className="flex w-full h-10 justify-center items-center">
          <Typography component='p' variant='muted' className='text-sm'>
            Ingrese los datos para crear su cuenta
          </Typography>
        </div>
        <FormSignUp />
        <div className='w-full flex justify-center items-center my-8 flex-wrap'>
          <Typography component='p' variant={'p'} className='text-sm'>
            Al registrarse acepta nuestros
          </Typography>
          <Button onClick={() => setOpen(true)} variant={'link'} className='underline text-foreground p-1' text-sm>Terminos y Condiciones</Button>
          <Typography component='p' variant={'p'} className=''>
             y nuestra
          </Typography>
          <Button variant={'link'} className='underline text-foreground p-1 text-sm'>Politica de Privacidad</Button>.
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className='bg-primary opacity-1'>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}