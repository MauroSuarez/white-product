// components/review-card.tsx
import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/presentation/ds/avatar"
import { Star } from "lucide-react"

interface Review {
  id: string
  name: string
  avatarUrl?: string
  rating: number
  comment: string
  date: string
}

interface ReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  review: Review
}

const ReviewCard = React.forwardRef<HTMLDivElement, ReviewCardProps>(
  ({ review, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`p-6 ${className}`}
        {...props}
      >
        <div className="flex items-center gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={review.avatarUrl} alt={review.name} />
            <AvatarFallback>
              {review.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 w-full">
            <h4 className="font-medium">{review.name}</h4>
            <span className="text-sm text-gray-500">Miembro desde · {review.date}</span>
          </div>
        </div>
        <div className="flex mt-2 w-full flex-nowrap">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < review.rating ? "fill-gray-700 text-gray-700" : "text-gray-500"
                }`}
              />
            ))}
          </div>
          <span className="text-sm ml-1 text-gray-500">· {review.date}</span>
        </div>
        <p className="mt-4 text-gray-600">{review.comment}</p>
      </div>
    )
  }
)
ReviewCard.displayName = "ReviewCard"

export { ReviewCard }
export type { Review }