// import { useMemo } from "react";
import type { UsePaginationProps } from './usePagination.type'
import { useStepper } from '../useStepper'
import { range } from '@pillar/utils'

export function usePagination({ currentPage = 1, totalPages, maxPerView = 5 }: UsePaginationProps) {
  const { currentStep, ...rest } = useStepper(totalPages, currentPage)

  function getRange(): (number | '.')[] {
    let ranges: (number | '.')[] = []
    if (maxPerView > totalPages) {
      ranges = range(1, totalPages)
    } else if (currentStep >= 1 && currentStep < maxPerView) {
      ranges = [...range(1, 5), '.', totalPages]
    } else if (currentStep <= totalPages && currentStep > totalPages - maxPerView) {
      ranges = [1, '.', ...range(totalPages - 4, totalPages)]
    } else {
      ranges = [1, '.', ...range(currentStep - 1, currentStep + 1), '.', totalPages]
    }
    return ranges
  }

  return {
    range: getRange(),
    currentStep,
    ...rest,
  }
}
