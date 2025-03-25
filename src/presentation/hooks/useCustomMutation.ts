'use client'

import { useMemo } from "react"
import { useMutation, useQueryClient } from '@tanstack/react-query'

function useCustomMutation(
  fetchService: (mutationBody: any) => any,
  keys: Array<any>,
  config?: any
) {
  const queryClient = useQueryClient()

  const { handleErrors, ...useMutationConfig } = useMemo(
    () => ({
      showLoadingBackdrop: false,
      handleErrors: true,
      onSettled: (mutationResponse: any, error: any, mutationBody: any) => {
        queryClient.invalidateQueries(fetchService(mutationBody).keys);
      },
      ...config,
    }),
    [config, fetchService, queryClient]
  );

  const useMutationResult = useMutation((mutationBody: any) => {
    return fetchService(mutationBody).fetcher();
  }, useMutationConfig)

  return useMutationResult
}

export { useCustomMutation }
