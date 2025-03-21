import { FormSignIn } from "./containers/SignInForm"
import { ResetPasswordForm } from "./containers/ResetPasswordForm"

type TypeForm = 'signin' | 'signup' | 'reset'

type AuthFormProps = {
  onSubmit?: (form: any) => void
  handleTypeForm: (type: string) => void
  typeForm: string
  isLoading: boolean
}

type AuthFormComponent = any

type AuthFormDictionary = {
  [key: string]: AuthFormComponent;
}

const authForm: AuthFormDictionary = {
  'signin': FormSignIn,
  'reset': ResetPasswordForm
}

export const AuthForm: React.FC<AuthFormProps> = ({ typeForm = 'signin', isLoading, onSubmit, handleTypeForm }) => {
  const ComponentAuthForm = authForm[typeForm]

  if (!ComponentAuthForm) {
    return null
  }

  return <ComponentAuthForm handleSubmit={onSubmit} handleTypeForm={handleTypeForm} isLoading={isLoading} />
}

