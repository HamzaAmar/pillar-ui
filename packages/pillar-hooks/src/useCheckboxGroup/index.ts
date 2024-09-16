import { ChangeEvent, useState } from 'react'

/**
 * A custom React hook to manage a group of checkboxes with their checked state.
 *
 * @param {boolean[]} initialCheckedState - The initial checked state for each checkbox (default is an empty array []).
 *
 * @returns {{
 *   checkedItems: boolean[],
 *   setCheckedItems: React.Dispatch<React.SetStateAction<boolean[]>>,
 *   isAllChecked: boolean,
 *   isIndeterminate: boolean,
 *   handleToggleAll: (event: React.ChangeEvent<HTMLInputElement>) => void,
 *   handleToggleItem: (currentIndex: number) => void
 * }}
 *   An object containing the checked state of checkboxes and utility functions.
 *   - **checkedItems**: An array of booleans representing the checked state of each checkbox.
 *   - **setCheckedItems**: A setter function to update the checked state of checkboxes.
 *   - **isAllChecked**: A boolean indicating whether all checkboxes are checked.
 *   - **isIndeterminate**: A boolean indicating whether some checkboxes are checked (but not all).
 *   - **handleToggleAll**: A function to handle the toggle action for all items in the checkbox group.
 *   - **handleToggleItem**: A function to handle the toggle action for a specific item in the checkbox group.
 *
 * @example
 * // Example usage in a functional component:
 * function CheckboxGroupComponent() {
 *   const { checkedItems, isAllChecked, isIndeterminate, handleToggleAll, handleToggleItem } = useCheckboxGroup([false, false, true]);
 *
 *   return (
 *     <div>
 *       {checkedItems.map((isChecked, index) => (
 *         <label key={index}>
 *           <input
 *             type="checkbox"
 *             checked={isChecked}
 *             onChange={() => handleToggleItem(index)}
 *           />
 *           Checkbox {index + 1}
 *         </label>
 *       ))}
 *       <br />
 *       <label>
 *         <input
 *           type="checkbox"
 *           checked={isAllChecked}
 *           onChange={handleToggleAll}
 *           ref={(input) => {
 *             // Set the indeterminate state of the "Select All" checkbox
 *             if (input) {
 *               input.indeterminate = isIndeterminate;
 *             }
 *           }}
 *         />
 *         Select All
 *       </label>
 *     </div>
 *   );
 * }
 */
// export function useCheckboxGroup(initialCheckedState: boolean[] = []) {
//   const [checkedItems, setCheckedItems] = useState(initialCheckedState)

//   const isAllChecked = checkedItems.every(Boolean)
//   const isIndeterminate = !isAllChecked && checkedItems.some(Boolean)

//   /**
//    * Handles the toggle action for all items in the checkbox group.
//    * @param {React.ChangeEvent<HTMLInputElement>} event - The event triggered by the toggle action.
//    */

//   const handleToggleAll = (event: ChangeEvent<HTMLInputElement>) => {
//     const checkAll = new Array(checkedItems.length).fill(event.target.checked)
//     setCheckedItems(checkAll)
//   }

//   /**
//    * Handles the toggle action for a specific item in the checkbox group.
//    * @param {number} currentIndex - The index of the item to toggle.
//    */
//   function handleToggleItem(currentIndex: number) {
//     const updatedCheckedItems = checkedItems.map((isChecked, index) =>
//       index === currentIndex ? !isChecked : isChecked
//     )
//     setCheckedItems(updatedCheckedItems)
//   }

//   return { checkedItems, setCheckedItems, isIndeterminate, isAllChecked, handleToggleAll, handleToggleItem }
// }

export const useCheckboxGroup = (initialCheckedState: boolean[] = []) => {
  const [checkedItems, setCheckedItems] = useState(initialCheckedState)

  const isAllChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !isAllChecked

  const handleToggleAll = (event: ChangeEvent<HTMLInputElement>) =>
    setCheckedItems(new Array(checkedItems.length).fill(event.target.checked))

  const handleToggleItem = (currentIndex: number) =>
    setCheckedItems(checkedItems.map((checked, idx) => (idx === currentIndex ? !checked : checked)))

  return { checkedItems, setCheckedItems, isAllChecked, isIndeterminate, handleToggleAll, handleToggleItem }
}
