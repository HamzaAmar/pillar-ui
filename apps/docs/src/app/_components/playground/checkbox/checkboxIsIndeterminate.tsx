'use client'

import { Checkbox } from '@pillar-ui/core'
import { useCheckboxGroup } from '@pillar-ui/hooks'
import { Children, cloneElement } from 'react'

const ParentCheckbox = ({ children }: any) => {
  const child = Array.from({ length: Children.count(children) }, () => false)
  const { checkedItems, isAllChecked, isIndeterminate, handleToggleAll, handleToggleItem } = useCheckboxGroup(child)

  return (
    <>
      <Checkbox checked={isAllChecked} isIndeterminate={isIndeterminate} onChange={handleToggleAll}>
        Hello world
      </Checkbox>
      <ul style={{ listStyle: 'none' }} className="Sf-1">
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
    <Checkbox name="child1">Hello world</Checkbox>
    <Checkbox name="child2">Hello world</Checkbox>
    <Checkbox name="child3">Hello world</Checkbox>
  </ParentCheckbox>
)
