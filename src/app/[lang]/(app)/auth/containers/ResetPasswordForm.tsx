'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { authSchema, ResetPasswordDTO } from "@/application/validators/authSchema"
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
import { FadeIn } from "@/presentation/components/fade-in"

type FormResetPasswordProps = {
  isLoading: boolean
  handleSubmit?: (form: any) => void
  handleTypeForm: (type: string) => void
}

const ResetPasswordForm = ({ handleSubmit, handleTypeForm, isLoading = false }: FormResetPasswordProps) => {
  const form = useForm<ResetPasswordDTO>({
    resolver: zodResolver(authSchema.resetPassword),
    defaultValues: {
      email: "",
    },
  })
  
  const onSubmit = async (data: ResetPasswordDTO) => {
    handleSubmit && handleSubmit(data)
  }

  return (
    <FadeIn>
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
          <Button variant={'link'} className="text-foreground p-0 text-center w-full" onClick={() => handleTypeForm('signin')}>
            Volver
          </Button>
        </form>
      </Form>
    </FadeIn>
  );
}

export { ResetPasswordForm }