import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Flex, MenuSelect } from '@pillar-ui/core'

export default {
  title: 'Components/MenuSelect',
  component: MenuSelect,
  args: {
    rating: 1,
  },
} as Meta<typeof MenuSelect>

const ITEMS = [
  { value: 'hello', label: 'Hello world' },
  { value: 'number', label: 'Phone Number' },
  { value: 'email', label: 'Email' },
  { value: 'name', label: 'User Name' },
]

export const MenuSelectWithLabelAndSize = () => {
  return (
    <Flex direction="column" gap="md">
      <MenuSelect label="Click Me Here" items={ITEMS} />
    </Flex>
  )
}

export const Playground = {}
