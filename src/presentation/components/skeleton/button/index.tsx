import { Skeleton } from "@/presentation/ds/skeleton"

export function SkeletonButton() {
  return (
    <div className="flex">
      <Skeleton className="h-[35px] w-[150px] rounded-sm" />
    </div>
  )
}