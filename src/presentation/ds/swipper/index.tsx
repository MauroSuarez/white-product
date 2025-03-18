'use client'

import React, { useState, useRef, FunctionComponent, useEffect } from 'react'
import { Icon } from '../icon'

type SwipperProps = {
  children: React.ReactNode
  scrollArrows?: boolean
  onClick?: (chipData: object | undefined) => void
}

const Swipper = ({
  children,
  scrollArrows = true,
}: SwipperProps) => {
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
    <div className="relative h-20 w-full flex flex-wrap ">
      {scrollArrows && scrollLeft > 0 && (
        <button
          onClick={() => setScrollLeft(Math.max(0, scrollLeft - 20))}
          className={`${arrowsClasses} left-0 justify-start from-background to-transparent`}
        >
          <Icon name='ChevronLeftIcon' className='w-8 h-8 bg-gray-100 rounded-full p-1' />
        </button>
      )}
      <div
        className={`h-full ${
          scrollArrows ? 'overflow-hidden' : 'overflow-x-auto'
        } whitespace-nowrap`}
        ref={ref}
      >
        {children}
      </div>
      {scrollArrows && (!maxScroll || scrollLeft < maxScroll) && (
        <button
          onClick={() =>
            setScrollLeft(maxScroll ? Math.min(maxScroll, scrollLeft + 20) : scrollLeft + 20)
          }
          className={`${arrowsClasses} right-0 justify-end from-transparent to-background`}
        >
          <Icon name='ChevronRightIcon' className='w-8 h-8 bg-gray-100 rounded-full p-1' />
        </button>
      )}
    </div>
  )
}

export { Swipper }
