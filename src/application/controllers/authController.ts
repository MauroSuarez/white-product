import { createSignUpUseCase } from "@/core/domain/use-cases/auth/signupUseCase"
import { AuthRepository } from "@/infraestructure/repositories/authRepository"
import { authSchema, SignUpDTO } from "../validators/authSchema"

export class AuthController {
  private signUpUseCase = createSignUpUseCase(AuthRepository)

  async handleSignup(data: SignUpDTO) {
    const parse = authSchema.signup.safeParse(data)

    if (!parse.success) {
      return { success: false, error: 'Datos inválidos', issues: parse.error.flatten() }
    }

    try {
      const displayName = `${data.lastName}, ${data.firstName}`
      const user = await this.signUpUseCase(data.email, data.password, displayName, 2)

      return { success: true, user }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  }
}
