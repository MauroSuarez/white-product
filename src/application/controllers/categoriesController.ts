import { CategoriesRepository } from "@/infraestructure/repositories/categoriesRepository"
import { createCategoriesUseCase } from "../use-cases/categoriesUseCase"

export class CategoriesController {
  private categoriesUseCase = createCategoriesUseCase(CategoriesRepository)

  async getCategories() {
    try {
      const categories = await this.categoriesUseCase()
      return { success: true, categories }
    } catch (error: any) {
      return { success: false, error: error.message }
    }
  }
}