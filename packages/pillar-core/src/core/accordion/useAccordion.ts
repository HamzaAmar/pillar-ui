import { useState } from 'react'
import type { AccordionProps } from './accordion.type'

export function useAccordion({ type, collapsible }: AccordionProps) {
  const [state, setState] = useState<number | number[]>(type === 'multiple' ? [] : -1)
  function checkIfOpen(index: number) {
    return typeof state === 'number' ? state === index : state.includes(index)
  }

  function ToggleAccordion(currentIndex: number) {
    if (checkIfOpen(currentIndex) && !collapsible) {
      if (Array.isArray(state) && state.length === 1) return
      if (state === currentIndex) return
    }

    if (Array.isArray(state)) {
      const newState = checkIfOpen(currentIndex)
        ? state.filter((value) => currentIndex !== value)
        : [...state, currentIndex]
      return setState(newState)
    }
    setState((val) => (currentIndex === val ? -1 : currentIndex))
  }

  return { state, setState, ToggleAccordion, checkIfOpen }
}
