import { db } from '@/infraestructure/db'
import { ICategoriesRepository } from '@/core/domain/interfaces/categoriesRepository'

const CategoriesRepository: ICategoriesRepository = {
  async getCategories() {
    const { data, error  } = await db.from('categories').select('*')

    if (error || !data) throw new Error(error?.message ?? 'Error get categories')

    return data
  }
}

export { CategoriesRepository }
