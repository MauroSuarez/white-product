'use client'

import { useQuery } from '@tanstack/react-query'

function useCustomQuery(
  fetch: (params?: any) => any,
  keys: Array<any>,
  config?: any
) {
  const useQueryResult = useQuery({
    queryKey: keys,
    queryFn: () => fetch(),
    ...config
  })

  return useQueryResult
}

export { useCustomQuery }
