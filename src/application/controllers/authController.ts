import { createSignUpUseCase } from "@/core/domain/use-cases/auth/signupUseCase"
import { AuthRepository } from "@/infraestructure/repositories/authRepository"
import { authSchema, SignUpDTO } from "../validators/authSchema"
import { AuthService } from "@/infraestructure/services/authService"

export class AuthController {
  private signUpUseCase = createSignUpUseCase(AuthRepository)

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

      if(user) {
        AuthService.setUser(user)
      }

      return { success: true, user }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  }
}
