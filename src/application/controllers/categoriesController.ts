import { categoriesUseCase } from "../use-cases/categoriesUseCase"
import { useCategoriesStore } from "@/infraestructure/stores/categoriesStore"

export class CategoriesController {
  private useCategoriesUseCase = categoriesUseCase(useCategoriesStore)

  getCategories() {
    return this.useCategoriesUseCase.getCategories()
  }

  subscribe(callback: any) {
    return this.useCategoriesUseCase.subscribe(callback)
  }
}