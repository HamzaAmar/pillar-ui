import { ChangeEvent, useState } from 'react'

/**
 * Custom hook for managing a checkbox group state with helper functions for toggling and checking items.
 * @param {boolean[]} [initialCheckedState=[]] - The initial state of the checkbox group as an array of boolean values.
 * @returns {{
 *   checkedItems: boolean[],
 *   setCheckedItems: React.Dispatch<React.SetStateAction<boolean[]>>,
 *   isIndeterminate: boolean,
 *   isAllChecked: boolean,
 *   handleToggleAll: (event: React.ChangeEvent<HTMLInputElement>) => void,
 *   handleToggleItem: (currentIndex: number) => void
 * }}
 */
export function useCheckboxGroup(initialCheckedState: boolean[] = []) {
  const [checkedItems, setCheckedItems] = useState(initialCheckedState)

  const isAllChecked = checkedItems.every(Boolean)
  const isIndeterminate = !isAllChecked && checkedItems.some(Boolean)

  /**
   * Handles the toggle action for all items in the checkbox group.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The event triggered by the toggle action.
   */
  function handleToggleAll(event: ChangeEvent<HTMLInputElement>) {
    const isChecked = event.target.checked
    const checkAll = checkedItems.map(() => isChecked)
    setCheckedItems(checkAll)
  }

  /**
   * Handles the toggle action for a specific item in the checkbox group.
   * @param {number} currentIndex - The index of the item to toggle.
   */
  function handleToggleItem(currentIndex: number) {
    const checkAll = checkedItems.map((val, index) => (index === currentIndex ? !val : val))
    setCheckedItems(checkAll)
  }

  return { checkedItems, setCheckedItems, isIndeterminate, isAllChecked, handleToggleAll, handleToggleItem }
}
