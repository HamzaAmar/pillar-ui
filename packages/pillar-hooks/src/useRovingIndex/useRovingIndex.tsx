import { useState, useEffect, useCallback } from 'react'
import { useDirection } from '../useDirection'
import type { UseRovingIndexOptions } from './useRovingIndex.type'

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
  // Keep track of the focused index and whether an item has focus
  const [focusedIndex, setFocusedIndex] = useState(defaultIndex)

  const { isLtr } = useDirection()
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

  // Add keyboard event listener
  useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent)
    return () => {
      document.removeEventListener('keydown', handleKeyEvent)
    }
  }, [handleKeyEvent])

  return { focusedIndex, handleIndexChange, handleKeyEvent }
}
