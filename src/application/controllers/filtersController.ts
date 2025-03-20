import { useFilterstore, Filters } from "@/infraestructure/stores/filtersStore"
import { filtersUseCase } from "../use-cases/filtersUseCase"

export class FiltersController {
  private useFiltersUseCase = filtersUseCase(useFilterstore)

  getFilters() {
    return this.useFiltersUseCase.getFilters()
  }

  setFilters(prop: keyof Filters, value: any) {
    this.useFiltersUseCase.setFilters(prop, value)
  }

  subscribe(callback: any) {
    return this.useFiltersUseCase.subscribe(callback)
  }
}