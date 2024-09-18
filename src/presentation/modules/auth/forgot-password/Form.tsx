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
} from "@/presentation/ui/molecules/form";
import { Input } from "@/presentation/ui/atoms/input";
import { toast } from "@/presentation/hooks/useToast"
import { Button } from "@/presentation/ui/atoms/button";

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  remember: z.boolean()
})

const FormForgotPassword = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  })
 
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
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
        <Button type="submit" className="w-full py-6">Enviar</Button>
      </form>
    </Form>
  );
}

export { FormForgotPassword }