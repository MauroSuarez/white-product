import { useAuthStore } from "@/infraestructure/stores/authStore";
import { menuUseCase } from "../use-cases/menuUseCase";

export class AppController {
  static getMenu() {
    const menuItems = menuUseCase(useAuthStore)

    return menuItems
  }
}