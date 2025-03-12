import { User } from '@/core/domain/entities/User'
import { useAuthStore } from '../stores/authStore'

export class AuthService {
  static setUser(user: User) {
    const { setUser } = useAuthStore.getState()
    setUser(user)
  }

  static clearUser() {
    const { clearUser } = useAuthStore.getState()
    clearUser()
  }
}