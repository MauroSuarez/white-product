import { Category } from "../entities/Category"

export interface ICategoriesRepository {
  getCategories: () => Promise<Category[] | null>
}