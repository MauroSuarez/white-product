import { viewTypeUseCase } from "../use-cases/viewTypeUseCase"
import { useViewTypeStore, ViewType } from "@/infraestructure/stores/viewTypeStore"

export class ViewTypeController {
  private viewTypesUseCase = viewTypeUseCase(useViewTypeStore)

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