'use client'

import React, { useState } from 'react'
import { authSchema, SignInDTO } from "@/application/validators/authSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/presentation/ds/form"
import { Input } from "@/presentation/ds/input"
import { toast } from "@/presentation/hooks/useToast"
import { Button } from "@/presentation/ds/button"
import Link from "next/link"
import { Checkbox } from "@/presentation/ds/checkbox"

type FormSignInProps = {
  isLoading: boolean
  handleSubmit?: (form: any) => void
  handleTypeForm: (type: string) => void
}

const FormSignIn = ({ handleSubmit, handleTypeForm, isLoading = false }: FormSignInProps) => {
  const form = useForm<SignInDTO>({
    resolver: zodResolver(authSchema.signin),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (data: any) => {
    handleSubmit && handleSubmit(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="min-w-[500px] w-full space-y-4 mt-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input className="py-6" placeholder="Ingrese su email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Conseseña</FormLabel>
              <FormControl>
                <Input type="password" className="py-6" placeholder="***" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center space-x-2 py-2">
            <FormField
              control={form.control}
              name="remember"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox id="terms" className="h-6 w-6" onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel htmlFor="terms" className="text-sm font-normal">
                    Recordarme
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button variant={'link'} className="text-foreground p-0" onClick={() => handleTypeForm('reset')}>
            Olvide mi contraseña?
          </Button>
        </div>
        <Button isLoading={isLoading} disabled={isLoading} type="submit" variant={'gradient'} className="w-full py-6">
          Ingresar
        </Button>
      </form>
    </Form>
  )
}

export { FormSignIn }