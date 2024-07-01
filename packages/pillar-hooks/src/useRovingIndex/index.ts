import { useState, useEffect, useCallback, useRef } from 'react'
import { useDirection } from '../useDirection'

export interface FocusedIndex {
  index: number
  focused: boolean
}
type Direction = 'horizontal' | 'vertical' | 'both'

export type KeyEvent = 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight' | 'Enter' | 'Escape'

export interface UseRovingIndexOptions {
  loop?: boolean
  defaultIndex?: number
  direction?: Direction
  counts?: number
}

const getPreviousIndex = (index: number, itemCount: number, loop: boolean) => {
  if (loop) {
    return index === 0 ? itemCount - 1 : index - 1
  }
  return Math.max(index - 1, 0)
}

const getNextIndex = (index: number, itemCount: number, loop: boolean) => {
  if (loop) {
    return index === itemCount - 1 ? 0 : index + 1
  }
  return Math.min(index + 1, itemCount - 1)
}

export const useRovingIndex = (
  itemCount: number,
  { loop = true, defaultIndex = 0, direction = 'both' }: UseRovingIndexOptions = {}
) => {
  const elementRef = useRef<HTMLElement>(null)
  const [focusedIndex, setFocusedIndex] = useState(defaultIndex)
  const { isLtr } = useDirection()

  // Validate input parameters
  if (itemCount <= 0) {
    throw new Error('useRovingIndex: itemCount must be a positive number.')
  }

  if (defaultIndex < 0) {
    throw new Error('useRovingIndex: defaultIndex must be a non-negative number.')
  }

  if (defaultIndex >= itemCount) {
    throw new Error('useRovingIndex: defaultIndex is out of range.')
  }

  // Update the focused index
  const handleIndexChange = useCallback((index: number) => {
    setFocusedIndex(index)
  }, [])

  // Handle keyboard events to control the focused index
  const handleKeyEvent = useCallback(
    ({ key, preventDefault }: KeyboardEvent) => {
      const isArrowUp = key === 'ArrowUp'
      const isArrowLeft = key === 'ArrowLeft'
      const isArrowDown = key === 'ArrowDown'
      const isArrowRight = key === 'ArrowRight'

      if (!isArrowUp && !isArrowLeft && !isArrowDown && !isArrowRight) {
        return
      }

      preventDefault()

      const isHorizontal = direction === 'horizontal' || direction === 'both'
      const isVertical = direction === 'vertical' || direction === 'both'
      const getIndexForward = isLtr ? getNextIndex : getPreviousIndex
      const getIndexBackward = isLtr ? getPreviousIndex : getNextIndex

      let nextIndex = focusedIndex

      if (isArrowUp && isVertical) {
        nextIndex = getPreviousIndex(focusedIndex, itemCount, loop)
      } else if (isArrowLeft && isHorizontal) {
        nextIndex = getIndexForward(focusedIndex, itemCount, loop)
      } else if (isArrowDown && isVertical) {
        nextIndex = getNextIndex(focusedIndex, itemCount, loop)
      } else if (isArrowRight && isHorizontal) {
        nextIndex = getIndexBackward(focusedIndex, itemCount, loop)
      }
      handleIndexChange(nextIndex)
    },
    [handleIndexChange, focusedIndex, itemCount, loop, direction, isLtr]
  )

  useEffect(() => {
    const currentRef = elementRef.current

    if (currentRef) {
      currentRef.addEventListener('keydown', handleKeyEvent)
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('keydown', handleKeyEvent)
      }
    }
  }, [handleKeyEvent])

  return { focusedIndex, handleIndexChange, handleKeyEvent }
}
