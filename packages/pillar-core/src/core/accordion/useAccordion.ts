import { useState } from 'react'
import type { AccordionProps } from './accordion.type'

export function useAccordion({ type, collapsible }: AccordionProps) {
  const [activeItems, setActiveItems] = useState<number | number[]>(type === 'multiple' ? [] : -1)

  function isItemOpen(index: number) {
    return typeof activeItems === 'number' ? activeItems === index : activeItems.includes(index)
  }

  function toggleAccordion(currentIndex: number) {
    if (isItemOpen(currentIndex) && !collapsible) {
      if (Array.isArray(activeItems) && activeItems.length === 1) return
      if (activeItems === currentIndex) return
    }

    if (Array.isArray(activeItems)) {
      const newState = isItemOpen(currentIndex)
        ? activeItems.filter((value) => currentIndex !== value)
        : [...activeItems, currentIndex]
      return setActiveItems(newState)
    }
    setActiveItems((val) => (currentIndex === val ? -1 : currentIndex))
  }

  return { activeItems, setActiveItems, toggleAccordion, isItemOpen }
}
