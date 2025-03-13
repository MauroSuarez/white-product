'use client'

import React, { useState } from 'react'
import { AuthController } from "@/application/controllers/authController"
import { authSchema, ResetPasswordDTO } from "@/application/validators/authSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/presentation/ui/molecules/form"
import { Input } from "@/presentation/ui/atoms/input"
import { toast } from "@/presentation/hooks/useToast"
import { Button } from "@/presentation/ui/atoms/button"

const authController = new AuthController()

const FormForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const form = useForm<ResetPasswordDTO>({
    resolver: zodResolver(authSchema.resetPassword),
    defaultValues: {
      email: "",
    },
  })
 
  const onSubmit = async(data: ResetPasswordDTO) => {
    setIsLoading(true)
    setError(null)
    
    try {
      const { success, error } = await authController.handleResetPassword(data)
    } catch (error) {
      const err = error as Error
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4 mt-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-8">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input className="py-6" placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button isLoading={isLoading} disabled={isLoading} type="submit" variant={'gradient'} className="w-full py-6">
          Enviar
        </Button>
      </form>
    </Form>
  )
}

export { FormForgotPassword }