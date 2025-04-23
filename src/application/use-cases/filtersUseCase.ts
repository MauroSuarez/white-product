import { Filters } from "@/infraestructure/stores/appStore"

export const filtersUseCase = (store: any) => {
  const { filters, setFilters } = store.getState()
  return {
    getFilters: () => {
      return filters
    },

    setFilters: (prop: keyof Filters, value: any) => {
      setFilters(prop, value)
    },

    subscribe: (callback: any) => {
      return store.subscribe(callback)
    }
  }
}