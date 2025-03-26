import { FormSignIn } from "./containers/SignInForm"
import { FormSignUp } from "./containers/SignUpForm"
import { ResetPasswordForm } from "./containers/ResetPasswordForm"
import { ISignIn, ISignUp } from "@/core/domain/interfaces/Auth"

export type TypeAuthForm = 'signin' | 'signup' | 'reset'

type AuthFormProps = {
  handleSignIn?: (form: ISignIn) => void
  handleSignUp?: (form: ISignUp) => void
  handleResetPassword?: (email: string) => void
  handleTypeForm?: (typeForm: TypeAuthForm) => void
  isLoading: boolean
  typeForm?: TypeAuthForm
}

type AuthFormComponent = React.FC<any>

type AuthFormDictionary = {
  [key in TypeAuthForm]: AuthFormComponent;
}

const authForm: AuthFormDictionary = {
  'signin': FormSignIn,
  'signup': FormSignUp,
  'reset': ResetPasswordForm
}

export const AuthForm: React.FC<AuthFormProps> = ({
  typeForm = 'signin',
  isLoading,
  handleTypeForm,
  handleSignIn,
  handleSignUp,
  handleResetPassword
}) => {
  const ComponentAuthForm = authForm[typeForm]

  if (!ComponentAuthForm) {
    return null
  }

  const submit = typeForm === 'signin' ? handleSignIn : typeForm === 'signup' ? handleSignUp : handleResetPassword

  return (
    <ComponentAuthForm
      handleSubmit={submit}
      handleTypeForm={handleTypeForm}
      isLoading={isLoading}
    />
  )
}

