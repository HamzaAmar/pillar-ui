import React from 'react'
import { Meta } from '@storybook/react'
import { Checkbox, Flex, FormController, Input } from '@pillar-ui/core'
import { useCheckboxGroup } from '@pillar-ui/hooks'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    children: 'Hello',
  },
}

export default meta

const ParentCheckbox = ({ children }) => {
  const child = Array.from({ length: React.Children.count(children) }, () => false)
  const { checkedItems, isAllChecked, isIndeterminate, handleToggleAll, handleToggleItem } = useCheckboxGroup(child)

  return (
    <>
      <Checkbox checked={isAllChecked} isIndeterminate={isIndeterminate} onChange={handleToggleAll}>
        Parent Checkbox
      </Checkbox>
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
      <Checkbox name="hello">Hello world</Checkbox>
      <Checkbox name="hello" color="d">
        Hello world
      </Checkbox>
      <Checkbox name="hello" color="su">
        Hello world
      </Checkbox>
      <Checkbox name="hello" color="w">
        Hello world
      </Checkbox>
      <Checkbox name="hello" color="p">
        Hello world
      </Checkbox>
      <Checkbox name="hello" color="se">
        Hello world
      </Checkbox>
      <Checkbox name="hello" color="b">
        Hello world
      </Checkbox>
      <Checkbox name="hello" color="i">
        Hello world
      </Checkbox>
    </Flex>
  )
}

export const CheckboxVariants = () => {
  return (
    <Flex gap="4" items="center">
      <Checkbox name="hello" variant="solid">
        Hello world
      </Checkbox>
      <Checkbox name="hello" variant="soft">
        Hello world
      </Checkbox>
      <Checkbox name="hello" variant="mixed">
        Hello world
      </Checkbox>
      <Checkbox name="hello" variant="outline">
        Hello world
      </Checkbox>
    </Flex>
  )
}

export const CheckboxDisabled = () => {
  return (
    <div className="Sf-4">
      <Flex gap="4" items="center">
        <Checkbox disabled name="hello" color="d">
          Hello world
        </Checkbox>
        <Checkbox disabled name="hello" color="su">
          Hello world
        </Checkbox>
        <Checkbox disabled name="hello" color="w">
          Hello world
        </Checkbox>
        <Checkbox disabled name="hello" color="p">
          Hello world
        </Checkbox>
        <Checkbox disabled name="hello" color="se">
          Hello world
        </Checkbox>
        <Checkbox disabled name="hello" color="b">
          Hello world
        </Checkbox>
        <Checkbox disabled name="hello" color="i">
          Hello world
        </Checkbox>
      </Flex>
      <Flex gap="4" items="center">
        <Checkbox disabled defaultChecked name="hello" color="d">
          Hello world
        </Checkbox>
        <Checkbox disabled defaultChecked name="hello" color="su">
          Hello world
        </Checkbox>
        <Checkbox disabled defaultChecked name="hello" color="w">
          Hello world
        </Checkbox>
        <Checkbox disabled defaultChecked name="hello" color="p">
          Hello world
        </Checkbox>
        <Checkbox disabled defaultChecked name="hello" color="se">
          Hello world
        </Checkbox>
        <Checkbox disabled defaultChecked name="hello" color="b">
          Hello world
        </Checkbox>
        <Checkbox disabled defaultChecked name="hello" color="i">
          Hello world
        </Checkbox>
      </Flex>
    </div>
  )
}

export const CheckboxDefaultCheckedColor = () => {
  return (
    <Flex gap="4" items="center">
      <Checkbox defaultChecked name="hello" color="d">
        Hello world
      </Checkbox>
      <Checkbox defaultChecked name="hello" color="su">
        Hello world
      </Checkbox>
      <Checkbox defaultChecked name="hello" color="w">
        Hello world
      </Checkbox>
      <Checkbox defaultChecked name="hello" color="p">
        Hello world
      </Checkbox>
      <Checkbox defaultChecked name="hello" color="se">
        Hello world
      </Checkbox>
      <Checkbox defaultChecked name="hello" color="b">
        Hello world
      </Checkbox>
    </Flex>
  )
}

export const CheckboxSize = () => {
  return (
    <Flex gap="4" items="center">
      <Checkbox size="1" name="hello" color="su">
        Hello world
      </Checkbox>
      <Checkbox size="2" name="hello" color="su">
        Hello world
      </Checkbox>
      <Checkbox size="3" name="hello" color="su">
        Hello world
      </Checkbox>
      <Checkbox size="4" name="hello" color="su">
        Hello world
      </Checkbox>
      <Checkbox size="5" name="hello" color="w">
        Hello world
      </Checkbox>
      <Checkbox size="6" name="hello" color="p">
        Hello world
      </Checkbox>
      <Checkbox size="7" name="hello" color="p">
        Hello world
      </Checkbox>
      <Checkbox size="8" name="hello" color="p">
        Hello world
      </Checkbox>
      <Checkbox size="9" name="hello" color="p">
        Hello world
      </Checkbox>
    </Flex>
  )
}

export const CheckboxStatus = () => {
  return (
    <Flex gap="4" items="center">
      <Checkbox name="hello">Hello world</Checkbox>
      <Checkbox name="hello" checked>
        Hello world
      </Checkbox>
      <Checkbox name="hello" isIndeterminate>
        Hello world
      </Checkbox>
      <Checkbox name="hello" isIndeterminate checked>
        Hello world
      </Checkbox>
    </Flex>
  )
}

export const CheckboxIsIndeterminate = () => (
  <ParentCheckbox>
    <Checkbox name="child">Hello world</Checkbox>
    <Checkbox name="child2">Hello world</Checkbox>
    <Checkbox name="child3">Hello world</Checkbox>
  </ParentCheckbox>
)

export const CheckboxInAForm = () => (
  <form className="Sf-3">
    <FormController label="Hello">
      <Input name="hello" />
    </FormController>
    <Checkbox name="child1">Hello world</Checkbox>
    <Checkbox name="child2">Hello world</Checkbox>
    <Checkbox name="child3">Hello world</Checkbox>
  </form>
)

export const CheckboxLongText = () => (
  <form className="Sf-3">
    <Checkbox name="child2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ex voluptas quaerat itaque culpa obcaecati
      iste fugit molestiae, nobis aliquam, cum blanditiis! Dolores fugit quae temporibus placeat consequatur. Minima,
      quos.
    </Checkbox>
    <Checkbox name="child3">He</Checkbox>
  </form>
)

export const Playground = {}
