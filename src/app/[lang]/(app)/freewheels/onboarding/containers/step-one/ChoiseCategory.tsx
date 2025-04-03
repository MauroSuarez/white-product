import { useCategoriesStore } from "@/infraestructure/stores/categoriesStore"
import { Typography } from "@/presentation/ds/typography"

import { Button } from '@/presentation/ds/button'
import { FormRadioGroupCardCategory } from "@/presentation/components/form/FormRadioGroupCardCategory"


interface ChoiseCategoryProps {
  register: any
  control: any
  watch: any
  setValue: any
  [key: string]: any  // Replace 'any' with the specific type if known
}

const ChoiseCategory = () => {
  const { categories } = useCategoriesStore()
  return (
    <div className="flex items-start flex-wrap justify-center w-4/5 mx-auto min-h-10 h-auto border border-red-500">
      <div className="flex-wrap w-full flex h-auto">
        <Typography variant={'h2'} className="text-center w-full font-semibold border-none">
          ¿Cuál de estas opciones describe mejor tu taller?
        </Typography>
      </div>
      <div className="flex w-full flex-wrap mt-4 justify-center">
        <FormRadioGroupCardCategory
          name="category"
          options={categories}
          className="flex w-full border border-pink-500"
        />
        <Button type="submit">Guardar</Button>
      </div>
    </div>
  )
}

export { ChoiseCategory }
