import type { UsePaginationProps } from './usePagination.type'
import { useStepper } from '../useStepper'
import { range } from '@pillar-ui/utils'

/**
 * A custom React hook to handle pagination logic and provide a range of page numbers.
 *
 * @param {UsePaginationProps} options - The options object containing configuration for pagination.
 * @param {number} options.currentPage - The current active page (default is 1).
 * @param {number} options.totalPages - The total number of pages.
 * @param {number} options.maxPerView - The maximum number of pages to show in the pagination view (default is 5).
 *
 * @returns {{
 *   range: (number | '.')[], // An array representing the range of page numbers and dots for ellipsis.
 *   currentStep: number,    // The current active step (page number).
 *   totalPages: number,     // The total number of pages.
 *   isFirst: boolean,       // A boolean indicating if the current page is the first page.
 *   isLast: boolean,        // A boolean indicating if the current page is the last page.
 *   goTo: (step: number) => void // A function to navigate to a specific page.
 * }}
 *   An object containing pagination information and utility functions.
 *   - range: An array representing the range of page numbers and dots for ellipsis.
 *   - currentStep: The current active step (page number).
 *   - totalPages: The total number of pages.
 *   - isFirst: A boolean indicating if the current page is the first page.
 *   - isLast: A boolean indicating if the current page is the last page.
 *   - goTo: A function to navigate to a specific page.
 *
 * @example
 * // Example usage in a functional component:
 * function PaginationComponent() {
 *   const totalPages = 10;
 *   const { range, currentStep, isFirst, isLast, goTo } = usePagination({ totalPages, maxPerView: 5 });
 *
 *   return (
 *     <div>
 *       <button onClick={() => goTo(currentStep - 1)} disabled={isFirst}>
 *         Previous
 *       </button>
 *       {range.map((step, index) => (
 *         <span key={index}>
 *           {step === '.' ? '...' : (
 *             <button onClick={() => goTo(step)} disabled={step === currentStep}>
 *               {step}
 *             </button>
 *           )}
 *         </span>
 *       ))}
 *       <button onClick={() => goTo(currentStep + 1)} disabled={isLast}>
 *         Next
 *       </button>
 *     </div>
 *   );
 * }
 */
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
