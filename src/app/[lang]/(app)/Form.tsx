'use client'

import React, { useState } from 'react'
import { AuthController } from "@/application/controllers/authController"
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

const authController = new AuthController()

type AuthFormProps = {
  type: 'signin' | 'signup' | 'reset'
  handleSubmit?: (form: any) => void
}

const AuthForm = ({
  type,
  handleSubmit
}: AuthFormProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<SignInDTO>({
    resolver: zodResolver(authSchema.signin),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (data: any) => {
    handleSubmit && handleSubmit(data)
  }
 
  // const onSubmit = async (data: SignInDTO) => {
  //   setIsLoading(true)
  //   setError(null)

  //   try {
  //     const { success, error } = await authController.handleSignin(data)
  //   } catch (error) {
  //     const err = error as Error
  //     setError(err.message)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }
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
        <div className="w-full flex justify-end items-center justify-between">
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
          <Button variant={'link'} className="text-foreground p-0">
            <Link href={'/es/auth/forgot-password'}>
              Olvide mi contraseña?
            </Link>
          </Button>
        </div>
        <Button isLoading={isLoading} disabled={isLoading} type="submit" variant={'gradient'} className="w-full py-6">
          Ingresar
        </Button>
      </form>
    </Form>
  )
}

export { AuthForm }