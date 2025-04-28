import { useStepper } from '../useStepper'

export interface UsePaginationProps {
  initial?: number
  max: number
  perView?: number
}

/**
 * A custom React hook to handle pagination logic and provide a range of page numbers.
 *
 * @param {UsePaginationProps} options - The options object containing configuration for pagination.
 * @param {number} options.stepPage - The step active page (default is 1).
 * @param {number} options.max - The total number of pages.
 * @param {number} options.perView - The maximum number of pages to show in the pagination view (default is 5).
 *
 * @returns {{
 *   range: (number | '.')[], // An array representing the range of page numbers and dots for ellipsis.
 *   step: number,    // The step active step (page number).
 *   max: number,     // The total number of pages.
 *   isFirst: boolean,       // A boolean indicating if the step page is the first page.
 *   isLast: boolean,        // A boolean indicating if the step page is the last page.
 *   goTo: (step: number) => void // A function to navigate to a specific page.
 * }}
 *   An object containing pagination information and utility functions.
 *   - range: An array representing the range of page numbers and dots for ellipsis.
 *   - step: The step active step (page number).
 *   - max: The total number of pages.
 *   - isFirst: A boolean indicating if the step page is the first page.
 *   - isLast: A boolean indicating if the step page is the last page.
 *   - goTo: A function to navigate to a specific page.
 */
function range(start: number, end: number) {
  if (typeof start !== 'number' || typeof end !== 'number' || isNaN(start) || isNaN(end)) return []
  const [min, max] = [Math.round(Math.min(start, end)), Math.round(Math.max(start, end))]
  return Array.from({ length: max - min + 1 }, (_, i) => min + i)
}

export function usePagination({ initial = 1, max, perView = 5 }: UsePaginationProps) {
  const { step, ...rest } = useStepper(max, initial)

  function getRange(): (number | '.')[] {
    let ranges: (number | '.')[] = []
    // when max is less than perView
    if (perView > max) {
      ranges = range(1, max)
    }
    // when the step is in this range [1, perView]
    else if (step >= 1 && step < perView) {
      ranges = [...range(1, perView), '.', max]
    }
    // when the step is in this range [max - perView + 1, max] example max = 10 perView = 5 [6, 10]
    else if (step <= max && step > max - perView + 1) {
      ranges = [1, '.', ...range(max - 4, max)]
    } else {
      ranges = [1, '.', ...range(step - 1, step + 1), '.', max]
    }
    return ranges
  }

  return {
    range: getRange(),
    step,
    ...rest,
  }
}
