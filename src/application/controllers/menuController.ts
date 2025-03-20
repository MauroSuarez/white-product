import { useAuthStore } from "@/infraestructure/stores/authStore"
import { menuUseCase } from "../use-cases/menuUseCase"

export class MenuController {
  private menuItemsUseCase = menuUseCase(useAuthStore)

  getMenu() {
    return this.menuItemsUseCase
  }

  // subscribe(callback: any) {
  //   return this.viewTypesUseCase.subscribe(callback)
  // }
}