import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { authSchema } from "@/application/validators/authSchema"
import { AuthRepository } from "@/infraestructure/repositories/authRepository"

const signupUseCase = () => {
  const formSignup = useForm<z.infer<typeof authSchema.signup>>({
    resolver: zodResolver(authSchema.signup),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmitSignup(form: z.infer<typeof authSchema.signup>) {
    const { signUp } = AuthRepository

    const { data, error } = await signUp(
      form.email,
      form.password, 
      `${form.lastName}, ${form.firstName}`,
      2,
    )
    
    // const { data, error } = await supabase.auth.signUp({
    //   email: form.email,
    //   password: form.password, 
    //   options: {
    //     data: { display_name: `${form.lastName}, ${form.firstName}` }, // 🔥 Esto guarda en metadata
    //   },
    // })
    // if (error) {
    //   toast({
    //     title: "Ocurrio un error",
    //     description: (
    //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //         <code className="text-white">{error.message}</code>
    //       </pre>
    //     ),
    //   })
    // }
  }

  return {
    formSignup,
    onSubmitSignup,
  }
}

export { signupUseCase }
