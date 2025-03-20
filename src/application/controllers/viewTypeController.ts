import { viewTypeUseCase } from "../use-cases/viewTypeUseCase"
import { useAppStore, ViewType } from "@/infraestructure/stores/appStore"

export class ViewTypeController {
  private viewTypesUseCase = viewTypeUseCase(useAppStore)

  getViewType() {
    return this.viewTypesUseCase.getViewType()
  }

  setViewType(viewType: ViewType) {
    this.viewTypesUseCase.setViewType(viewType)
  }

  subscribe(callback: any) {
    return this.viewTypesUseCase.subscribe(callback)
  }
}