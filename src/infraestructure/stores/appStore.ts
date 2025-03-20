import { create } from 'zustand'

export type Category = {
  icon: string
  label: string
  category: number
}

const categoriesInitialState: Category[] = [
  {
    icon: 'hammer',
    label: 'Taller mécanico',
    category: 1
  },
  {
    icon: 'hammer',
    label: 'Gomeria',
    category: 2
  },
  {
    icon: 'hammer',
    label: 'Lubricentro',
    category: 3
  },
  {
    icon: 'hammer',
    label: 'Tapizados',
    category: 4
  },
  {
    icon: 'hammer',
    label: 'Accesorios',
    category: 5
  },
  {
    icon: 'hammer',
    label: 'Chapa y pintura',
    category: 6
  },
  {
    icon: 'hammer',
    label: 'Garage',
    category: 7
  },
  {
    icon: 'hammer',
    label: 'Bicicleteria',
    category: 8
  },
  {
    icon: 'hammer',
    label: 'Lonas',
    category: 9
  },
  {
    icon: 'hammer',
    label: 'Cajas para camión',
    category: 10
  },
  {
    icon: 'hammer',
    label: 'Cerrajeria',
    category: 11
  },
  {
    icon: 'hammer',
    label: 'Auto radio',
    category: 12
  },
  {
    icon: 'hammer',
    label: 'Motos',
    category: 13
  },
  {
    icon: 'hammer',
    label: 'Polarizados',
    category: 14
  },
  {
    icon: 'hammer',
    label: 'Lavadero',
    category: 15
  },
]

const filtersInitalState = {
  category: 0,
}

export type ViewType = 'map' | 'card'

type AppState = {
  isError: boolean
  isLoading: boolean
  viewType: ViewType
  setViewType: (type: ViewType) => void
  filters: any
  setFilters: (filters: any) => void
  categories: any
}

export const useAppStore = create<AppState>((set) => ({
  isError: false,
  isLoading: false,
  viewType: 'card',
  setViewType: (viewType) => set({ viewType }),
  filters: {},
  setFilters: (filters) => set({ filters }),
  categories: categoriesInitialState,
}))

export type AppStore = ReturnType<typeof useAppStore>
