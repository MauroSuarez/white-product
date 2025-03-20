import { useAuthStore } from "@/infraestructure/stores/authStore"
import { menuUseCase } from "../use-cases/menuUseCase"

export class MenuController {
  private useMenuItemsUseCase = menuUseCase(useAuthStore)

  getMenu() {
    return this.useMenuItemsUseCase
  }

  // subscribe(callback: any) {
  //   return this.viewTypesUseCase.subscribe(callback)
  // }
}