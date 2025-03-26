import { create } from 'zustand'

export type Category = {
  icon: string
  label: string
  category: number
  isVisible?: boolean
}

const categoriesInitialState: Category[] = [
  {
    icon: 'carRepair',
    label: 'Taller mécanico',
    category: 1
  },
  {
    icon: 'carTired',
    label: 'Gomeria',
    category: 2
  },
  {
    icon: 'carOil',
    label: 'Lubricentro',
    category: 3
  },
  {
    icon: 'carSeat',
    label: 'Tapizados',
    category: 4
  },
  {
    icon: 'carAccessories',
    label: 'Accesorios',
    category: 5
  },
  {
    icon: 'carPaint',
    label: 'Chapa y pintura',
    category: 6
  },
  {
    icon: 'garage',
    label: 'Garage',
    category: 7
  },
  {
    icon: 'bicycle',
    label: 'Bicicleteria',
    category: 8
  },
  // {
  //   icon: 'vtv',
  //   label: 'VTV',
  //   category: 9
  // },
  {
    icon: 'truckBox',
    label: 'Cajas para camión',
    category: 10
  },
  {
    icon: 'carKey',
    label: 'Cerrajeria del automotor',
    category: 11
  },
  {
    icon: 'carRadio',
    label: 'Auto radio',
    category: 12
  },
  {
    icon: 'motorCycle',
    label: 'Motos',
    category: 13
  },
  {
    icon: 'carPolarized',
    label: 'Polarizados',
    category: 14
  },
  {
    icon: 'carwash',
    label: 'Lavadero',
    category: 15
  },
  {
    icon: 'carElectric',
    label: 'Electricidad del automotor',
    category: 16
  },
  {
    icon: 'carAirCold',
    label: 'Aire acondicionado',
    category: 17
  },
  {
    icon: 'roadSafety',
    label: 'Seguridad vial',
    category: 18
  },
]

type CategoryState = {
  categories: Category[]
}

export const useCategoriesStore = create<CategoryState>((set) => ({
  categories: categoriesInitialState,
}))

export type CategoryStore = ReturnType<typeof useCategoriesStore>
