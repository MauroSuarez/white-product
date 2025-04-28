'use client'

import {
  SprayCan,
  MessageSquare,
  Map,
  Tag,
} from "lucide-react"

type RatingItem = {
  title: string;
  score: number;
  icon: JSX.Element;
}

export function ResumeReviews() {
  const ratings: RatingItem[] = [
    { title: "Limpieza", score: 4.8, icon: <SprayCan size={24} /> },
    { title: "Atención", score: 4.9, icon: <MessageSquare size={24} /> },
    { title: "Ubicación", score: 4.8, icon: <Map size={24} /> },
    { title: "Precio según calidad", score: 4.8, icon: <Tag size={24} /> },
  ]
  return (
    <section id="resume-reviews" className='flex w-full border-b border-gray-200 py-8'>
      <div className="w-[30%]">
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center">
              <div className="w-8 text-sm">{star}</div>
              <div className="w-full bg-gray-200 h-2 rounded ml-2">
                <div
                  className="bg-black h-2 rounded"
                  style={{
                    width: `${star === 5 ? 90 : star === 4 ? 60 : 10}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Specific Ratings */}
      <div className="flex items-center justify-between gap-8 w-[70%]">
        {ratings.map((rating, index) => (
          <div
            key={rating.title}
            className={`flex-1 flex flex-col items-center justify-center text-center h-full min-w-[100px] ${index < ratings.length -1 ? 'border-r border-gray-200' : ''}`}
          >
            <div className="text-black mb-2">{rating.icon}</div>
            <div className="font-semibold text-sm">{rating.title}</div>
            <div className="text-lg">{rating.score}</div>
          </div>
        ))}
      </div>
    </section>
  )
}