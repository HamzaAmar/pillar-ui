import { ChangeEvent, useState } from 'react'

/**
 * A custom React hook that manages the state of a group of checkboxes and provides toggle functionality.
 * @param initialCheckedState An optional initial value for the checked state of the checkboxes.
 * @returns An object containing the state of the checkboxes and functions for updating their state.
 */
export function useCheckboxGroup(initialCheckedState: boolean[] = []) {
  const [checkedItems, setCheckedItems] = useState(initialCheckedState)

  const isAllChecked = checkedItems.every(Boolean)
  const isIndeterminate = !isAllChecked && checkedItems.some(Boolean)

  /**
   * Handles toggling the checked state of all checkboxes.
   * @param event The change event of the root checkbox.
   */
  function handleToggleAll(event: ChangeEvent<HTMLInputElement>) {
    const isChecked = event.target.checked
    const checkAll = checkedItems.map(() => isChecked)
    setCheckedItems(checkAll)
  }

  /**
   * Handles toggling the checked state of an individual checkbox.
   * @param currentIndex The index of the checkbox to toggle.
   */
  function handleToggleItem(currentIndex: number) {
    const checkAll = checkedItems.map((val, index) => (index === currentIndex ? !val : val))
    setCheckedItems(checkAll)
  }

  return { checkedItems, setCheckedItems, isIndeterminate, isAllChecked, handleToggleAll, handleToggleItem }
}
