import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Checkbox, Flex } from '@pillar/core'
import { useCheckboxGroup } from '@pillar/hooks'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    label: 'Hello',
  },
} as ComponentMeta<typeof Checkbox>

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
      <Checkbox name="hello" label="Hello" color="danger" />
      <Checkbox name="hello" label="Hello" color="success" />
      <Checkbox name="hello" label="Hello" color="warning" />
      <Checkbox name="hello" label="Hello" color="indigo" />
      <Checkbox name="hello" label="Hello" color="violet" />
      <Checkbox name="hello" label="Hello" color="purple" />
      <Checkbox name="hello" label="Hello" color="brown" />
      <Checkbox name="hello" label="Hello" color="slate" />
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
        <Checkbox disabled name="hello" label="Hello" color="indigo" />
        <Checkbox disabled name="hello" label="Hello" color="violet" />
        <Checkbox disabled name="hello" label="Hello" color="purple" />
        <Checkbox disabled name="hello" label="Hello" color="brown" />
        <Checkbox disabled name="hello" label="Hello" color="slate" />
      </Flex>
      <Flex gap="sm" items="center">
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="danger" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="success" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="warning" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="indigo" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="violet" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="purple" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="brown" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="slate" />
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
      <Checkbox defaultChecked name="hello" label="Hello" color="indigo" />
      <Checkbox defaultChecked name="hello" label="Hello" color="violet" />
      <Checkbox defaultChecked name="hello" label="Hello" color="purple" />
      <Checkbox defaultChecked name="hello" label="Hello" color="brown" />
      <Checkbox defaultChecked name="hello" label="Hello" color="slate" />
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
      <Checkbox size="lg" name="hello" label="Hello" color="indigo" />
      <Checkbox size="xl" name="hello" label="Hello" color="indigo" />
      <Checkbox size="2xl" name="hello" label="Hello" color="indigo" />
      <Checkbox size="3xl" name="hello" label="Hello" color="indigo" />
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

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Playground = Template.bind({})
