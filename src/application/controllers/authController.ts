import { createSignUpUseCase } from "@/core/domain/use-cases/auth/signupUseCase"
import { createSignInUseCase } from "@/core/domain/use-cases/auth/signinUseCase"
import { AuthRepository } from "@/infraestructure/repositories/authRepository"
import { authSchema, SignInDTO, SignUpDTO } from "../validators/authSchema"
import { AuthService } from "@/infraestructure/services/authService"

export class AuthController {
  private signUpUseCase = createSignUpUseCase(AuthRepository)
  private signInUseCase = createSignInUseCase(AuthRepository)

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
        roleId: data.roleId,
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
      const user = await this.signInUseCase(data)

      if(user) {
        AuthService.setUser(user)
      }

      return { success: true, user }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  }
}
