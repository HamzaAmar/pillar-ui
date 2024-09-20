'use client'

import { Checkbox } from '@pillar-ui/core'
import { useCheckboxGroup } from '@pillar-ui/hooks'
import { Children, cloneElement } from 'react'

const ParentCheckbox = ({ children }: any) => {
  const child = Array.from({ length: Children.count(children) }, () => false)
  const { checkedItems, isAllChecked, isIndeterminate, handleToggleAll, handleToggleItem } = useCheckboxGroup(child)

  return (
    <>
      <Checkbox
        label="Parent Checkbox"
        checked={isAllChecked}
        isIndeterminate={isIndeterminate}
        onChange={handleToggleAll}
      />
      <ul style={{ listStyle: 'none' }} className="l_f-3xs">
        {Children.map(children, (child, index) => (
          <li>
            {cloneElement(child, {
              checked: checkedItems[index],
              onChange: () => handleToggleItem(index),
            })}
          </li>
        ))}
      </ul>
    </>
  )
}

export const CheckboxIsIndeterminate = () => (
  <ParentCheckbox>
    <Checkbox label="Child Checkbox 1" name="child1" />
    <Checkbox label="Child Checkbox 2" name="child2" />
    <Checkbox label="Child Checkbox 3" name="child3" />
  </ParentCheckbox>
)
