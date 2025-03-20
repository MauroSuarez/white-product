import { categoriesUseCase } from "../use-cases/categoriesUseCase"
import { useAppStore, Categories } from "@/infraestructure/stores/appStore"

export class CategoriesController {
  private useCategoriesUseCase = categoriesUseCase(useAppStore)

  getCategories() {
    return this.useCategoriesUseCase.getCategories()
  }

  setCategory(category: number) {
    this.useCategoriesUseCase.setCategory(category)
  }

  subscribe(callback: any) {
    return this.useCategoriesUseCase.subscribe(callback)
  }
}