import { ViewType } from "@/infraestructure/stores/viewTypeStore"

export const viewTypeUseCase = (store: any) => {
  const { viewType, setViewType: setviewTypeStore } = store.getState()
  return {
    getViewType: () => {
      return viewType
    },

    setViewType: (viewType: ViewType) => {
      setviewTypeStore(viewType)
    },

    subscribe: (callback: any) => {
      return store.subscribe(callback)
    }
  }
}