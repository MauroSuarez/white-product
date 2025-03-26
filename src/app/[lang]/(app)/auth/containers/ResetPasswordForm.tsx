'use client'

import { authSchema, ResetPasswordDTO } from "@/application/validators/authSchema"
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

const ResetPasswordForm = ({ handleSubmit, handleTypeForm, isLoading = false, alert }: FormSignInProps) => {
  const onSubmit = async (data: ResetPasswordDTO) => {
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
            <FormInput name="email" label="Email" className="py-6" placeholder="Ingrese su email" />
            <Button isLoading={isLoading} disabled={isLoading} type="submit" className="w-full py-6">
              Enviar
            </Button>
            <Button variant={'link'} className="text-foreground p-0 text-center w-full" onClick={() => handleTypeForm('signin')}>
              Volver
            </Button>
          </>
        )}
      </FormContainer>
    </FadeIn>
  )
}

export { ResetPasswordForm }
