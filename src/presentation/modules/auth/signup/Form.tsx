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
} from "@/presentation/ui/molecules/form"
import { Input } from "@/presentation/ui/atoms/input"
import { toast } from "@/presentation/hooks/useToast"
import { Button } from "@/presentation/ui/atoms/button"
import { Checkbox } from "@/presentation/ui/atoms/checkbox"
import { SocialAuthBlock } from "../components/index"
import { supabase } from '@/infraestructure/db/supabase'

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: ''
  }),
  confirmPassword: z.string().min(8, {
    message: ''
  }),
  terms: z.boolean()
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas deben ser iguales',
  path: ["confirm"],
})

const FormSignUp = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  })
 
  async function onSubmit(form: z.infer<typeof FormSchema>) {
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password, 
      options: {
        data: { display_name: `${form.lastName}, ${form.firstName}` }, // 🔥 Esto guarda en metadata
      },
    })
    if (error) {
      toast({
        title: "Ocurrio un error",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{error.message}</code>
          </pre>
        ),
      })
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
          <Button type="submit" variant={'gradient'} className="w-full py-6">Registrame</Button>
        </form>
      </Form>
      <SocialAuthBlock />
    </>
  )
}

export { FormSignUp }