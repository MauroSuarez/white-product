'use client'

import { useState } from 'react'
import { authSchema, ResetPasswordDTO } from "@/application/validators/authSchema"
import { FormContainer } from "@/presentation/components/form/FormContainer"
import { FormInput } from "@/presentation/components/form/FormInput"
import { Button } from "@/presentation/ds/button"
import { FadeIn } from "@/presentation/components/fade-in"
import { CountDown } from "@/presentation/components/countdown"
import { CustomAlert } from '@/presentation/components/custom-alert'

type FormSignInProps = {
  isLoading: boolean
  isSuccess: boolean
  isError: boolean | string
  handleSubmit?: (form: any) => void
  handleTypeForm: (type: string) => void
}

const ResetPasswordForm = ({
  handleSubmit,
  handleTypeForm,
  isLoading = false,
  isSuccess = false,
  isError = false
}: FormSignInProps) => {
  const [isCountDown, setIsCountDown] = useState<boolean>(false)
  
  const onSubmit = async (data: ResetPasswordDTO) => {
    console.log(data, 'DATA')
    handleSubmit && handleSubmit(data)
    setIsCountDown(!isCountDown)
  }

  const handleCountDownCompleted = () => {
    setIsCountDown(false)
  }
  return (
    <FadeIn>
      <FormContainer schema={authSchema.resetPassword} onSubmit={onSubmit} className="min-w-[500px] w-full space-y-4 mt-8">
        {(methods) => (
          <>
            {isSuccess || isError && (
              <div className="flex w-full">
                <CustomAlert
                  variant={'default'}
                  icon='CheckCircledIcon'
                  className='border border-success bg-success/30'
                  title='Un éxito, salio todo bien!'
                  description='Te enviamos un email de confirmación'
                />
              </div>
            )}
            {isCountDown && (
              <div className="w-full flex justify-center items-center spate-y-6">
                <CountDown
                  seconds={5}
                  onComplete={handleCountDownCompleted}
                  className='font-semibold text-[2rem]'
                />
              </div>
            )}
            <FormInput name="email" label="Email" className="py-6" placeholder="Ingrese su email" />
            <Button isLoading={isLoading} disabled={isLoading || isCountDown} type="submit" className="w-full py-6">
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
