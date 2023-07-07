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

  const handleToggleAll = (event: ChangeEvent<HTMLInputElement>) => {
    const checkAll = new Array(checkedItems.length).fill(event.target.checked)
    setCheckedItems(checkAll)
  }

  /**
   * Handles the toggle action for a specific item in the checkbox group.
   * @param {number} currentIndex - The index of the item to toggle.
   */
  function handleToggleItem(currentIndex: number) {
    const updatedCheckedItems = checkedItems.map((isChecked, index) =>
      index === currentIndex ? !isChecked : isChecked
    )
    setCheckedItems(updatedCheckedItems)
  }

  return { checkedItems, setCheckedItems, isIndeterminate, isAllChecked, handleToggleAll, handleToggleItem }
}
