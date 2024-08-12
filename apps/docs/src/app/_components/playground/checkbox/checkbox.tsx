'use client'

import { Avatar, Checkbox, Flex, Paper } from '~/component/core/pillar'
import React from 'react'
import { useCheckboxGroup } from '~/hooks/pillar'

export const CheckboxPlayGround = () => {
  return (
    <Paper className="playground" as={Flex} wrap gap="sm" border p="sm" background="bg-3" corner="sm" items="center">
      <Avatar title="Success!" color="dan" />
      <Avatar title="Success!" color="war" />
      <Avatar title="Success!" color="suc" />
      <Avatar title="Success!" color="pri" />
      <Avatar title="Success!" color="bg" />
      <Avatar title="Success!" color="sec" />
    </Paper>
  )
}

export const CheckboxSizes = () => {
  return (
    <Paper className="playground" as={Flex} items="center" gap="sm" border p="sm" background="bg-3" corner="sm">
      <Checkbox size="3xs" label="Option 1" />
      <Checkbox size="2xs" label="Option 2" />
      <Checkbox size="xs" label="Option 3" />
      <Checkbox size="sm" label="Option 4" />
      <Checkbox size="md" label="Option 5" />
      <Checkbox size="lg" label="Option 6" />
      <Checkbox size="2xl" label="Option 7" />
      <Checkbox size="3xl" label="Option 8" />
    </Paper>
  )
}

export const CheckboxLabel = () => {
  return (
    <Paper className="playground" as={Flex} gap="sm" items="center" border p="sm" background="bg-3" corner="sm">
      <Checkbox label="Option 1" />
    </Paper>
  )
}
export const CheckboxDisabled = () => {
  return (
    <Paper className="playground" border p="sm" background="bg-3" flow="sm" corner="sm">
      <Flex gap="sm" items="center">
        <Checkbox disabled name="hello" label="Hello" color="dan" />
        <Checkbox disabled name="hello" label="Hello" color="suc" />
        <Checkbox disabled name="hello" label="Hello" color="war" />
        <Checkbox disabled name="hello" label="Hello" color="pri" />
        <Checkbox disabled name="hello" label="Hello" color="sec" />
        <Checkbox disabled name="hello" label="Hello" color="bg" />
      </Flex>
      <Flex gap="sm" items="center">
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="dan" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="suc" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="war" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="pri" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="sec" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="bg" />
      </Flex>
    </Paper>
  )
}

export const CheckboxDefaultCheck = () => {
  return (
    <Paper className="playground" as={Flex} gap="sm" items="center" border p="sm" background="bg-3" corner="sm">
      <Checkbox defaultChecked name="hello" label="Hello" color="dan" />
      <Checkbox defaultChecked name="hello" label="Hello" color="suc" />
      <Checkbox defaultChecked name="hello" label="Hello" color="war" />
      <Checkbox defaultChecked name="hello" label="Hello" color="pri" />
      <Checkbox defaultChecked name="hello" label="Hello" color="sec" />
      <Checkbox defaultChecked name="hello" label="Hello" color="bg" />
    </Paper>
  )
}

export const CheckboxColors = () => {
  return (
    <Paper className="playground" as={Flex} gap="sm" items="center" border p="sm" background="bg-3" corner="sm">
      <Checkbox name="hello" label="Options 1" />
      <Checkbox name="hello" label="Options 2" color="dan" />
      <Checkbox name="hello" label="Options 3" color="suc" />
      <Checkbox name="hello" label="Options 4" color="war" />
      <Checkbox name="hello" label="Options 5" color="pri" />
      <Checkbox name="hello" label="Options 6" color="sec" />
      <Checkbox name="hello" label="Options 7" color="bg" />
    </Paper>
  )
}

export const CheckboxStatus = () => {
  return (
    <Paper className="playground" as={Flex} gap="sm" items="center" border p="sm" background="bg-3" corner="sm">
      <Checkbox name="hello" label="Hello" />
      <Checkbox name="hello" label="Hello" checked />
      <Checkbox name="hello" label="Hello" isIndeterminate />
      <Checkbox name="hello" label="Hello" isIndeterminate checked />
    </Paper>
  )
}

const ParentCheckbox = ({ children }: any) => {
  const child = Array.from({ length: React.Children.count(children) }, () => false)
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
        {React.Children.map(children, (child, index) => (
          <li>
            {React.cloneElement(child, {
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
  <Paper className="playground" border p="sm" background="bg-3" corner="sm">
    <ParentCheckbox>
      <Checkbox label="Child Checkbox 1" name="child1" />
      <Checkbox label="Child Checkbox 2" name="child2" />
      <Checkbox label="Child Checkbox 3" name="child3" />
    </ParentCheckbox>
  </Paper>
)
