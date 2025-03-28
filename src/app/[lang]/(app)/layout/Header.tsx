"use client";

import React from 'react'
import { usePositionScroll } from '@/presentation/hooks/usePositionScroll'
import { TUserRol } from "@/core/domain/entities/UserRol"
import { BrandLogo } from '@/presentation/components/brand-logo'
import { SearchBox } from '@/presentation/components/searchbox'
import { SkeletonButton } from '@/presentation/components/skeleton/button';

export type HeaderItemProps<T> = {
  id: string
  visible?: boolean
  label?: string
  path?: string
  format?: (value: T, allValues?: T[]) => React.ReactNode
}

export type HeaderProps<T> = {
  userRol: TUserRol
  headerItems?: HeaderItemProps<T>[]
  showSearchBar?: boolean
  handleSearch?: (searchQuery: string) => void
  isLoading?: boolean
}

export function Header<T>({
  userRol,
  headerItems = [],
  showSearchBar = true,
  handleSearch,
  isLoading = false,
}: HeaderProps<T>) {
  const { isSmall } = usePositionScroll()
  
  const handleOnSearch = (searchQuery: string) => {
    handleSearch && handleSearch(searchQuery.trim())
  };

  const heightHeaderBar = isSmall ? 'h-16' : 'h-28'
  const containerButtons = 'w-full'
  return (
    <header
      className={`border-b border-grey-50 transition-all duration-300 ${heightHeaderBar} flex w-full items-center`}
    >
      <div className="mx-10 items-center flex w-full">

        <div className="flex justify-start w-auto border border-red-500">
          <BrandLogo
            variant={isSmall ? 'secondary' : 'primary'}
            onClick={() => {}}
          />
        </div>

        {showSearchBar && (
          <div className='flex justify-center w-auto lg:w-2/5 md:w-2/5 lg:px-10 md:px-10 px-4 border border-blue-500'>
            <SearchBox
              handleSearch={handleOnSearch}
              placeHolder='¿Qué servicio estas buscando para tu vehículo?'
              classNameBox={isSmall ? 'h-10' : 'h-12'}
              classNameIcon={isSmall ? 'px-2 py-2' : 'px-6 py-2'}
            />
          </div>
        )}

        <div className={`flex justify-end items-center ${containerButtons} space-x-2 sm:space-x-4 border border-black`}>
          {isLoading && (
            [...new Array(3)].map((_, key) => (
              <React.Fragment key={`skeleton-button-${key}`}>
                <SkeletonButton />
              </React.Fragment>
            ))
          )}
          
          {!isLoading && headerItems.map((item: any, i: number) => {
            return item.visible ? (
              <React.Fragment key={`item-header-${i}`}>
                {typeof item.format === 'function' ? item.format({ label: item?.label, path: item?.path }) : item.label}
              </React.Fragment>
            ) : null}
          )}
        </div>

      </div>
    </header>
  )
}
