import { ICategoriesRepository } from "@/core/domain/interfaces/categoriesRepository"

export const createCategoriesUseCase = (repository: ICategoriesRepository) => {
  return async () => {
    const data = await repository.getCategories()
    return data
  }
}
