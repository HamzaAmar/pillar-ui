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
    <Flex gap="4" items="center">
      <Checkbox name="hello" label="Transparent" />
      <Checkbox name="hello" label="Danger" color="d" />
      <Checkbox name="hello" label="Success" color="su" />
      <Checkbox name="hello" label="Warning" color="w" />
      <Checkbox name="hello" label="Primary" color="p" />
      <Checkbox name="hello" label="Secondary" color="se" />
      <Checkbox name="hello" label="Background" color="b" />
      <Checkbox name="hello" label="Info" color="i" />
    </Flex>
  )
}

export const CheckboxDisabled = () => {
  return (
    <div className="Sf-4">
      <Flex gap="4" items="center">
        <Checkbox disabled name="hello" label="Hello" color="d" />
        <Checkbox disabled name="hello" label="Hello" color="su" />
        <Checkbox disabled name="hello" label="Hello" color="w" />
        <Checkbox disabled name="hello" label="Hello" color="p" />
        <Checkbox disabled name="hello" label="Hello" color="se" />
        <Checkbox disabled name="hello" label="Hello" color="b" />
        <Checkbox disabled name="hello" label="Hello" color="i" />
      </Flex>
      <Flex gap="4" items="center">
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="d" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="su" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="w" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="p" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="se" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="b" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="i" />
      </Flex>
    </div>
  )
}

export const CheckboxDefaultCheckedColor = () => {
  return (
    <Flex gap="4" items="center">
      <Checkbox defaultChecked name="hello" label="Hello" color="d" />
      <Checkbox defaultChecked name="hello" label="Hello" color="su" />
      <Checkbox defaultChecked name="hello" label="Hello" color="w" />
      <Checkbox defaultChecked name="hello" label="Hello" color="p" />
      <Checkbox defaultChecked name="hello" label="Hello" color="se" />
      <Checkbox defaultChecked name="hello" label="Hello" color="b" />
    </Flex>
  )
}

export const CheckboxSize = () => {
  return (
    <Flex gap="4" items="center">
      <Checkbox size="1" name="hello" label="Hello" color="su" />
      <Checkbox size="2" name="hello" label="Hello" color="su" />
      <Checkbox size="3" name="hello" label="Hello" color="su" />
      <Checkbox size="4" name="hello" label="Hello" color="su" />
      <Checkbox size="5" name="hello" label="Hello" color="w" />
      <Checkbox size="6" name="hello" label="Hello" color="p" />
      <Checkbox size="7" name="hello" label="Hello" color="p" />
      <Checkbox size="8" name="hello" label="Hello" color="p" />
      <Checkbox size="9" name="hello" label="Hello" color="p" />
    </Flex>
  )
}

export const CheckboxStatus = () => {
  return (
    <Flex gap="4" items="center">
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
  <form className="Sf-3">
    <FormController label="Hello">
      <Input name="hello" />
    </FormController>
    <Checkbox label="Child Checkbox 1" name="child1" />
    <Checkbox label="Child Checkbox 2" name="child2" />
    <Checkbox label="Child Checkbox 3" name="child3" />
  </form>
)

export const CheckboxLongText = () => (
  <form className="Sf-3">
    <Checkbox
      label="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla perspiciatis, dolor placeat architecto asperiores qui temporibus fugiat rerum alias repudiandae culpa libero Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla perspiciatis, dolor placeat architecto asperiores qui temporibus fugiat rerum alias repudiandae culpa libero nobis minus incidunt laudantium porro voluptate doloribus accusamus."
      name="child2"
    />
    <Checkbox label="Child Checkbox 3" name="child3" />
  </form>
)

export const Playground = {}
