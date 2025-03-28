'use client'

import React, { useState } from 'react'
import { Input } from '@/presentation/ds/input'
import { Icon } from '@/presentation/ds/icon'

import { cn } from '@/presentation/utils/uiHelpers'

type SearchBoxProps = {
  handleSearch?: (searchQuery: string) => void
  placeHolder?: string
  classNameBox?: string
  classNameIcon?: string
}

const SearchBox = ({
  handleSearch,
  classNameBox = '',
  classNameIcon = '',
  placeHolder = '',
}: SearchBoxProps) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleOnSearch = () => {
    handleSearch && handleSearch(searchQuery.trim())
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleOnSearch()
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }
  return (
    <div className="flex items-center border rounded-full shadow-sm overflow-hidden w-auto lg:min-w-[450px] md:min-w-[350px] sm:min-w-[400px] w-auto">
      <Input
        value={searchQuery}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        type="text"
        placeholder={placeHolder}
        className={cn("flex items-center px-4 py-4 border-none focus:ring-0 focus:outline-none", classNameBox)}
      />
      <button onClick={handleOnSearch} className={cn("text-white mr-1 transition-all duration-300 rounded-full bg-primary", classNameIcon)}>
        <Icon name="MagnifyingGlassIcon" className="text-background w-5 h-5" />
      </button>
    </div>
  )
}

export { SearchBox }
