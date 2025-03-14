'use client'

import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { AuthController } from "@/application/controllers/authController"
import { authSchema, SignUpDTO } from "@/application/validators/authSchema"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/presentation/ui/atoms/form"
import { Input } from "@/presentation/ui/atoms/input"
import { toast } from "@/presentation/hooks/useToast"
import { Button } from "@/presentation/ui/atoms/button"
import { Checkbox } from "@/presentation/ui/atoms/checkbox"
import { SocialAuthBlock } from "../components/index"

const authController = new AuthController()

const FormSignUp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<SignUpDTO>({
    resolver: zodResolver(authSchema.signup),
    defaultValues: {
      email: "",
      roleId: 2
    },
  })

  const onSubmit = async (data: SignUpDTO) => {
    setIsLoading(true)
    setError(null)

    try {
      const { success, error } = await authController.handleSignup(data)
    } catch (error) {
      const err = error as Error
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4 mt-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input className="py-6" placeholder="Nombre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apellido</FormLabel>
                    <FormControl>
                      <Input className="py-6" placeholder="Apellido" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input className="py-6" placeholder="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input className="py-6" placeholder="****" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Repetir contraseña</FormLabel>
                    <FormControl>
                      <Input className="py-6" placeholder="****" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                <FormControl>
                  <Checkbox id="terms" className="h-6 w-6" onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel htmlFor="terms" className="text-sm font-normal">
                  Acepto términos y condiciones
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button isLoading={isLoading} disabled={isLoading} type="submit" variant={'gradient'} className="w-full py-6">Registrame</Button>
        </form>
      </Form>
      <SocialAuthBlock />
    </>
  )
}

export { FormSignUp }