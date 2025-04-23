'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export function useCurrentPath() {
  const pathname = usePathname();
  const searchParams = useSearchParams()
  const [fullCurrentPath, setFullCurrentPath] = useState<string | null>(null)

  useEffect(() => {
    // Construye la ruta completa incluyendo los query params
    const path = `${pathname || ''}${searchParams?.toString() ? `?${searchParams.toString()}` : ''}`;
    setFullCurrentPath(path);
  }, [pathname, searchParams])

  return {
    fullCurrentPath,
    pathname,
    searchParams
  }
}
