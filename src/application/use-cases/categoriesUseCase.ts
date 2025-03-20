
export const categoriesUseCase = (store: any) => {
  const { categories } = store.getState()
  return {
    getCategories: () => {
      return categories
    },

    subscribe: (callback: any) => {
      return store.subscribe(callback)
    }
  }
}