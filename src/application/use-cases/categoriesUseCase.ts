
export const categoriesUseCase = (AppStore: any) => {
  const { categories } = AppStore.getState()
  return {
    getCategories: () => {
      return categories
    },

    setCategory: (category: number) => {
      
    },

    subscribe: (callback: any) => {
      return AppStore.subscribe(callback)
    }
  }
}