import { useState, useCallback } from 'react'
import { useDirection } from '../useDirection'

export interface FocusedIndex {
  index: number
  focused: boolean
}
type Direction = 'horizontal' | 'vertical' | 'both'

export type KeyEvent = 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight'

export interface UseRovingIndexOptions {
  loop?: boolean
  defaultIndex?: number
  direction?: Direction
  counts?: number
}

export const getPreviousIndex = (index: number, itemCount: number, loop: boolean) =>
  loop ? (index === 0 ? itemCount - 1 : index - 1) : Math.max(index - 1, 0)

export const getNextIndex = (index: number, itemCount: number, loop: boolean) =>
  loop ? (index === itemCount - 1 ? 0 : index + 1) : Math.min(index + 1, itemCount - 1)

export const useRovingIndex = (
  itemCount: number,
  { loop = true, defaultIndex = 0, direction = 'both' }: UseRovingIndexOptions = {}
) => {
  const [focusedIndex, setFocusedIndex] = useState(defaultIndex)
  const { isLtr } = useDirection()

  // if (itemCount <= 0) {
  //   throw new Error('useRovingIndex: itemCount must be a positive number.')
  // }
  // if (defaultIndex < 0 || defaultIndex >= itemCount) {
  //   throw new Error('useRovingIndex: defaultIndex is out of range.')
  // }

  const handleIndexChange = useCallback((index: number) => {
    setFocusedIndex(index)
  }, [])

  const handleKeyEvent = useCallback(
    ({ key, preventDefault }: KeyboardEvent) => {
      const changeIndex = (getIndex: typeof getPreviousIndex | typeof getNextIndex) => {
        const nextIndex = getIndex(focusedIndex, itemCount, loop)
        handleIndexChange(nextIndex)
        preventDefault()
      }
      const isHorizontal = direction === 'horizontal' || direction === 'both'
      const isVertical = direction === 'vertical' || direction === 'both'
      const getIndexForward = isLtr ? getNextIndex : getPreviousIndex
      const getIndexBackward = isLtr ? getPreviousIndex : getNextIndex

      const keyMap: Record<KeyEvent, () => void> = {
        ArrowUp: () => changeIndex(getPreviousIndex),
        ArrowLeft: () => changeIndex(getIndexForward),
        ArrowDown: () => changeIndex(getNextIndex),
        ArrowRight: () => changeIndex(getIndexBackward),
      }

      if (key in keyMap && (isHorizontal || isVertical)) {
        keyMap[key as KeyEvent]()
      }
    },
    [handleIndexChange, focusedIndex, itemCount, loop, direction, isLtr]
  )

  return { focusedIndex, handleIndexChange, handleKeyEvent }
}
