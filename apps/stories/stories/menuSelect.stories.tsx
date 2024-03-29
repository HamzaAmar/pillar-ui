import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Flex, MenuSelect } from '@pillar-ui/core'

export default {
  title: 'Components/MenuSelect',
  component: MenuSelect,
  args: {
    rating: 1,
  },
} as ComponentMeta<typeof MenuSelect>

const ITEMS = [
  { value: 'hello', label: 'Hello world' },
  { value: 'number', label: 'Phone Number' },
  { value: 'email', label: 'Email' },
  { value: 'name', label: 'User Name' },
]

const Template: ComponentStory<typeof MenuSelect> = (args) => <MenuSelect {...args} />

export const MenuSelectWithLabelAndSize = () => {
  return (
    <Flex direction="column" gap="md">
      <MenuSelect label="Click Me Here" items={ITEMS} />
    </Flex>
  )
}

export const Playground = Template.bind({})
