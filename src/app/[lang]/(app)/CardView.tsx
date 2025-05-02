import React from "react"
import { CardWorkShop } from "@/presentation/components/card-workshop"

type CardViewProps = {
  workshops?: Array<any>
}

export function CardView({
  workshops = []
}: CardViewProps) {
  const handleAddFavorite = () => {
    
  }
  return (
    <div className="grid grid-cols-1 gap-0 lg:grid-cols-4 lg:gap-4 md:grid-cols-4 md:gap-4 sm:grid-cols-2 sm:gap-4">
      {workshops.map((workshop ,index) => (
        <React.Fragment key={`card-freewheel-${index}`}>
          <CardWorkShop workshop={workshop} addFavorite={handleAddFavorite} />
        </React.Fragment>
      ))}
    </div>
  )
}
