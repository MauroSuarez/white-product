import { ViewType } from "@/infraestructure/stores/appStore"

export const viewTypeUseCase = (AppStore: any) => {
  const { viewType, setViewType: setviewTypeStore } = AppStore.getState()
  return {
    getViewType: () => {
      return viewType
    },

    setViewType: (viewType: ViewType) => {
      setviewTypeStore(viewType)
    },

    subscribe: (callback: any) => {
      return AppStore.subscribe(callback)
    }
  }
}