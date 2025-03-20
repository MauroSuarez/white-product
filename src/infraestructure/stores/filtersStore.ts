import { create } from 'zustand'

export type Filters = {
  category: number
  page: number
}

const filtersInitalState = {
  category: 1,
  page: 1
}

type FiltersState = {
  filters: any
  setFilters: (prop: keyof Filters, value: any) => void
}

export const useFilterstore = create<FiltersState>((set) => ({
  filters: filtersInitalState,
  setFilters: (prop, value) => {
    set((state) => ({
      filters: {
        ...state.filters,
        [prop]: value,
      },
    }))
  },
}))

export type FiltersStore = ReturnType<typeof useFilterstore>
