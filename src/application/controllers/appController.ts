import { useAuthStore } from "@/infraestructure/stores/authStore";
import { menuUseCase } from "../use-cases/menuUseCase";

export class AppController {
  private menuItemsUseCase = menuUseCase(useAuthStore)

  getMenu() {
    return this.menuItemsUseCase
  }

  isLoggedIn() {
    return { isLoggedIn: true }
  }
}