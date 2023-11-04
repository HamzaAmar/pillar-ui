import { useState } from 'react'
import type { AccordionProps, Value } from './accordion.type'

export function useAccordion({ type, collapsible }: AccordionProps) {
  const [activeItems, setActiveItems] = useState<Value | Value[]>(type === 'multiple' ? [] : -1)

  function isItemOpen(index: Value) {
    return Array.isArray(activeItems) ? activeItems.includes(index) : activeItems === index
  }

  function toggleAccordion(currentIndex: Value) {
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
