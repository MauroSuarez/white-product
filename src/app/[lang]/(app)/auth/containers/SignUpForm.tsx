'use client'

import { authSchema, SignUpDTO } from "@/application/validators/authSchema"
import { FormCheckbox } from "@/presentation/components/form/FormCheckbox"
import { FormContainer } from "@/presentation/components/form/FormContainer"
import { FormInput } from "@/presentation/components/form/FormInput"
import { Button } from "@/presentation/ds/button"
import { FadeIn } from "@/presentation/components/fade-in"

type FormSignInProps = {
  isLoading: boolean
  alert?: React.ReactNode
  handleSubmit?: (form: any) => void
  handleTypeForm: (type: string) => void
}

const FormSignUp = ({ handleSubmit, handleTypeForm, isLoading = false, alert }: FormSignInProps) => {
  const onSubmit = async (data: SignUpDTO) => {
    handleSubmit && handleSubmit(data)
  }
  return (
    <FadeIn>
      <FormContainer schema={authSchema.signup} onSubmit={onSubmit} className="min-w-[500px] w-full space-y-4 mt-8">
        {(methods) => (
          <>
            {alert && (
              <div className="flex w-full">
                {alert}
              </div>
            )}
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <FormInput name="firstName" label="Nombre" className="py-6" placeholder="Nombre" />
              </div>
              <div className="grid gap-2">
                <FormInput name="lastName" label="Apellido" className="py-6" placeholder="Apellido" />
              </div>
            </div>
            <FormInput name="email" label="Email" className="py-6" placeholder="Ingrese su email" />
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <FormInput name="password" label="Contraseña" type="password" className="py-6" placeholder="*****" />
              </div>
              <div className="grid gap-2">
              <FormInput name="confirmPassword" label="Repetir contraseña" type="password" className="py-6" placeholder="*****" />
              </div>
            </div>
            <FormCheckbox
              name="terms"
              label="Acepto términos y condiciones"
              classNameContainer="flex flex-row items-center space-x-3 space-y-0"
              className="h-6 w-6"
            />
            <Button isLoading={isLoading} disabled={isLoading} type="submit" className="w-full py-6">
              Registrame
            </Button>
            <Button variant={'link'} className="text-foreground p-0 text-center w-full" onClick={() => handleTypeForm('signin')}>
              Ya tengo cuenta, iniciar sesión
            </Button>
          </>
        )}
      </FormContainer>
    </FadeIn>
  )
}

export { FormSignUp }
