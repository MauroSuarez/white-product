'use client'

import React, { useState, useRef, FunctionComponent, useEffect } from 'react'
import { Icon } from '../icon'

type SwipperProps = {
  // children: React.ReactNode
  classes?: string
  scrollArrows?: boolean
  onClick?: (chipData: object | undefined) => void
}

const Swipper: FunctionComponent<SwipperProps> = ({
  // children = [],
  scrollArrows = true,
}) => {
  const [scrollLeft, setScrollLeft] = useState(0)
  const [maxScroll, setMaxScroll] = useState<undefined | number>(undefined)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.scrollLeft = scrollLeft
      if (ref.current.scrollLeft < scrollLeft) setMaxScroll(ref.current.scrollLeft)
    }
  }, [scrollLeft])

  useEffect(() => {
    if (maxScroll) setScrollLeft(Math.min(maxScroll, scrollLeft))
  }, [maxScroll])

  const arrowsClasses =
    'absolute flex z-10 top-0 w-[100px] h-full items-center bg-gradient-to-r'

  return (
    <div className="h-auto relative">
      {scrollArrows && scrollLeft > 0 && (
        <button
          onClick={() => setScrollLeft(Math.max(0, scrollLeft - 20))}
          className={`${arrowsClasses} left-0 justify-start from-white to-transparent`}
        >
          <Icon name='ChevronLeftIcon' />
        </button>
      )}
      <div
        className={`mx-13 max-w-full ${
          scrollArrows ? 'overflow-hidden' : 'overflow-x-auto'
        } whitespace-nowrap`}
        ref={ref}
      >
        {[...new Array(12)].map((_, i) => {
          return (
            <div
              key={`${i}`}
              className={`relative inline-block mr-2.5 w-20 h-10 border`}
            >{i}</div>
          );
        })}
      </div>
      {scrollArrows && (!maxScroll || scrollLeft < maxScroll) && (
        <button
          onClick={() =>
            setScrollLeft(maxScroll ? Math.min(maxScroll, scrollLeft + 20) : scrollLeft + 20)
          }
          className={`${arrowsClasses} right-0 justify-end from-transparent to-white`}
        >
          <Icon name='ChevronRightIcon' />
        </button>
      )}
    </div>
  )
}

export { Swipper }
