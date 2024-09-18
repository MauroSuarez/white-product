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
import Link from "next/link";
import { Checkbox } from "@/presentation/ui/atoms/checkbox";
import { SocialAuthBlock } from "../components/index";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  remember: z.boolean()
})

const FormSignIn = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
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
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input className="py-6" placeholder="shadcn" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
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
        <Button type="submit" className="w-full py-6">Ingresar</Button>
        <SocialAuthBlock />
      </form>
    </Form>
  );
}

export { FormSignIn }