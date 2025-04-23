import { createSignUpUseCase } from "@/core/domain/use-cases/auth/signupUseCase_deprecated"
import { createSignInUseCase } from "@/core/domain/use-cases/auth/signinUseCase_deprecated"
import { createResetPasswordUseCase } from "@/core/domain/use-cases/auth/resetPasswordUseCase_deprecated"
import { createSignOutUseCase } from "@/core/domain/use-cases/auth/signoutUseCase_deprecated"
import { AuthRepository } from "@/infraestructure/repositories/authRepository"
import { authSchema, ResetPasswordDTO, SignInDTO, SignUpDTO } from "../validators/authSchema"
import { AuthService } from "@/infraestructure/services/authService"

export class AuthController {
  private signUpUseCase = createSignUpUseCase(AuthRepository)
  private signInUseCase = createSignInUseCase(AuthRepository)
  private resetPassword = createResetPasswordUseCase(AuthRepository)
  private signOut = createSignOutUseCase(AuthRepository)

  async handleSignup(data: SignUpDTO) {
    const parse = authSchema.signup.safeParse(data)

    if (!parse.success) {
      return { success: false, error: 'Datos inválidos', issues: parse.error.flatten() }
    }

    try {
      const userName = `${data.lastName}, ${data.firstName}`
      const user = await this.signUpUseCase({
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        userName,
        terms: data.terms
      })

      return { success: true, user }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  }

  async handleSignin(data: SignInDTO) {
    const parse = authSchema.signin.safeParse(data)

    if (!parse.success) {
      return { success: false, error: 'Datos inválidos', issues: parse.error.flatten() }
    }

    try {
      const response = await this.signInUseCase(data)

      if(response) {
        AuthService.setUser(response.user)
        AuthService.setToken(response?.access_token)
      }

      return { success: true, user: response?.user }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  }

  async handleResetPassword(data: ResetPasswordDTO) {
    const parse = authSchema.resetPassword.safeParse(data)

    if (!parse.success) {
      return { success: false, error: 'Datos inválidos', issues: parse.error.flatten() }
    }

    try {
      await this.resetPassword(data.email)

      return { success: true }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  }

  async handleLogout() {
    try {
      await this.signOut()

      AuthService.clearUser()

      return { success: true }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  }
}
