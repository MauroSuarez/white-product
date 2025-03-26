'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
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
import { Button } from "@/presentation/ds/button"
import { Checkbox } from "@/presentation/ds/checkbox"
import { authSchema, SignUpDTO } from "@/application/validators/authSchema"
import { FadeIn } from "@/presentation/components/fade-in"

type FormSignInProps = {
  isLoading: boolean
  handleSubmit?: (form: any) => void
  handleTypeForm: (type: string) => void
}

const FormSignUp = ({ handleSubmit, handleTypeForm, isLoading = false }: FormSignInProps) => {
  const form = useForm<SignUpDTO>({
    resolver: zodResolver(authSchema.signup),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = async (data: SignUpDTO) => {
    handleSubmit && handleSubmit(data)
  }
 
  return (
    <FadeIn>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="min-w-[500px] w-full space-y-4 mt-8">
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
                    <FormLabel>Email</FormLabel>
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
          <Button type="submit" className="w-full py-6">Registrame</Button>
          <Button variant={'link'} className="text-foreground p-0 text-center w-full" onClick={() => handleTypeForm('signin')}>
            Ya tengo cuenta, iniciar sesión
          </Button>
        </form>
      </Form>
    </FadeIn>
  )
}

export { FormSignUp }