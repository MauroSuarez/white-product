import { create } from "zustand"

export type ViewType = 'map' | 'grid'

type ViewTypeState = {
  viewType: ViewType
  setViewType: (type: ViewType) => void
}

export const useViewTypeStore = create<ViewTypeState>((set) => ({
  viewType: 'grid',
  setViewType: (viewType) => set({ viewType }),
}))

export type ViewTypeStore = ReturnType<typeof useViewTypeStore>
