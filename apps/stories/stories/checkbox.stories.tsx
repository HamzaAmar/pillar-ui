import React from 'react'
import { Meta } from '@storybook/react'
import { Checkbox, Flex, FormController, Input } from '@pillar-ui/core'
import { useCheckboxGroup } from '@pillar-ui/hooks'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    label: 'Hello',
  },
}

export default meta

const ParentCheckbox = ({ children }) => {
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
      <ul>
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

export const CheckboxColor = () => {
  return (
    <Flex gap="sm" items="center">
      <Checkbox name="hello" label="Transparent" />
      <Checkbox name="hello" label="Danger" color="danger" />
      <Checkbox name="hello" label="Success" color="success" />
      <Checkbox name="hello" label="Warning" color="warning" />
      <Checkbox name="hello" label="Primary" color="primary" />
      <Checkbox name="hello" label="Secondary" color="secondary" />
      <Checkbox name="hello" label="Surface" color="surface" />
    </Flex>
  )
}

export const CheckboxDisabled = () => {
  return (
    <div className="l_flow__md">
      <Flex gap="sm" items="center">
        <Checkbox disabled name="hello" label="Hello" color="danger" />
        <Checkbox disabled name="hello" label="Hello" color="success" />
        <Checkbox disabled name="hello" label="Hello" color="warning" />
        <Checkbox disabled name="hello" label="Hello" color="primary" />
        <Checkbox disabled name="hello" label="Hello" color="secondary" />
        <Checkbox disabled name="hello" label="Hello" color="surface" />
      </Flex>
      <Flex gap="sm" items="center">
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="danger" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="success" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="warning" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="primary" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="secondary" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="surface" />
      </Flex>
    </div>
  )
}

export const CheckboxDefaultCheckedColor = () => {
  return (
    <Flex gap="sm" items="center">
      <Checkbox defaultChecked name="hello" label="Hello" color="danger" />
      <Checkbox defaultChecked name="hello" label="Hello" color="success" />
      <Checkbox defaultChecked name="hello" label="Hello" color="warning" />
      <Checkbox defaultChecked name="hello" label="Hello" color="primary" />
      <Checkbox defaultChecked name="hello" label="Hello" color="secondary" />
      <Checkbox defaultChecked name="hello" label="Hello" color="surface" />
    </Flex>
  )
}

export const CheckboxSize = () => {
  return (
    <Flex gap="sm" items="center">
      <Checkbox size="3xs" name="hello" label="Hello" color="success" />
      <Checkbox size="2xs" name="hello" label="Hello" color="success" />
      <Checkbox size="xs" name="hello" label="Hello" color="success" />
      <Checkbox size="sm" name="hello" label="Hello" color="success" />
      <Checkbox size="md" name="hello" label="Hello" color="warning" />
      <Checkbox size="lg" name="hello" label="Hello" color="primary" />
      <Checkbox size="xl" name="hello" label="Hello" color="primary" />
      <Checkbox size="2xl" name="hello" label="Hello" color="primary" />
      <Checkbox size="3xl" name="hello" label="Hello" color="primary" />
    </Flex>
  )
}

export const CheckboxStatus = () => {
  return (
    <Flex gap="sm" items="center">
      <Checkbox name="hello" label="Hello" />
      <Checkbox name="hello" label="Hello" checked />
      <Checkbox name="hello" label="Hello" isIndeterminate />
      <Checkbox name="hello" label="Hello" isIndeterminate checked />
    </Flex>
  )
}

export const CheckboxIsIndeterminate = () => (
  <ParentCheckbox>
    <Checkbox label="Child Checkbox 1" name="child1" />
    <Checkbox label="Child Checkbox 2" name="child2" />
    <Checkbox label="Child Checkbox 3" name="child3" />
  </ParentCheckbox>
)

export const CheckboxInAForm = () => (
  <form className="l_flow__sm">
    <FormController label="Hello">
      <Input name="hello" />
    </FormController>
    <Checkbox label="Child Checkbox 1" name="child1" />
    <Checkbox label="Child Checkbox 2" name="child2" />
    <Checkbox label="Child Checkbox 3" name="child3" />
  </form>
)

export const Playground = {}
