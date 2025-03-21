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

type FormResetPasswordProps = {
  isLoading: boolean
  handleSubmit?: (form: any) => void
  handleTypeForm: (type: string) => void
}

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  remember: z.boolean()
})

const ResetPasswordForm = ({ handleSubmit, handleTypeForm, isLoading = false }: FormResetPasswordProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
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
            <FormItem className="mb-8">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input className="py-6" placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full py-6">Enviar</Button>
      </form>
    </Form>
  );
}

export { ResetPasswordForm }