import { Skeleton } from "@/presentation/ds/skeleton";

export function SkeletonFilter() {
  return (
    <div className="flex flex-col space-y-1">
      <Skeleton className="h-[35px] w-[60px] rounded-sm" />
      <div className="space-y-2">
        <Skeleton className="h-2 w-[60px]" />
      </div>
    </div>
  )
}