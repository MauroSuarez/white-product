import { CategoryIcon } from '@/presentation/components/category-icon'
import { cn } from '@/presentation/utils/uiHelpers'

export type CardCategoryProps = {
  category: string
  icon: string
  className?: string
  htmlFor: string
}

const CardCategory = ({
  category,
  icon,
  className,
  htmlFor
}: CardCategoryProps) => {
  return (
    <label htmlFor={htmlFor} className={cn(`flex flex-col items-center space-y-4 justify-center w-full h-32 bg-background border border-gray-200 rounded-md`, className)}>
      <CategoryIcon iconName={icon} />
      <div className='flex w-4/5 text-center justify-center text-wrap mx-auto'>
        {category}
      </div>
    </label>
  )
}

export { CardCategory}
