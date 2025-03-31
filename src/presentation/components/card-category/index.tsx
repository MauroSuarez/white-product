import { CategoryIcon } from '@/presentation/components/category-icon'

type CardCategoryProps = {
  category: string
  icon: string
}

const CardCategory = ({
  category,
  icon
}: CardCategoryProps) => {
  return (
    <div className='flex flex-col items-center space-y-4 justify-center w-full h-32 bg-white border border-gray-200 rounded-md'>
      <CategoryIcon iconName={icon} />
      <div className='flex w-4/5 text-center justify-center text-wrap mx-auto'>
        {category}
      </div>
    </div>
  )
}

export { CardCategory}
