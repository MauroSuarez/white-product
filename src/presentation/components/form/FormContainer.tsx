'use client'

import * as React from 'react'
import * as z from 'zod'
import { useForm, FormProvider, UseFormReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '@/presentation/ds/form'

interface FormContainerProps<T extends z.ZodType<any, any>> {
  schema: T
  defaultValues?: z.infer<T>
  onSubmit: (values: z.infer<T>) => void
  // children: React.ReactNode
  children: (methods: UseFormReturn<z.infer<T>>) => React.ReactNode
  className?: string
}

export function FormContainer<T extends z.ZodType<any, any>>({
  schema,
  defaultValues,
  onSubmit,
  children,
  className = '',
}: FormContainerProps<T>) {
  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
          {children(form)}
        </form>
      </Form>
    </FormProvider>
  )
}

export { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage }