import { useCategoriesStore } from "@/infraestructure/stores/categoriesStore"
import { Typography } from "@/presentation/ds/typography"
import { CardCategory } from "@/presentation/components/card-category"

const ChoiseCategory = () => {
  const { categories } = useCategoriesStore()
  console.log(categories), 'A VER'
  return (
    <div className="flex items-start flex-wrap justify-center w-4/5 mx-auto min-h-10 h-auto">
      <div className="flex-wrap w-full flex h-auto">
        <Typography variant={'h2'} className="text-center w-full font-semibold border-none">
          ¿Cuál de estas opciones describe mejor tu taller?
        </Typography>
      </div>
      <div className="flex w-full flex-wrap mt-4 justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {
            categories.map((category, index) => {
              return category.is_visible ? (
                <div key={index} className="p-4">
                  <CardCategory category={category.label} icon={category.icon} />
                </div>
              ) : null
            })
          }
        </div>
      </div>
    </div>
  )
}

export { ChoiseCategory }
