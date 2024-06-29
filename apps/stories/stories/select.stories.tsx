import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import { User } from '@pillar-ui/icons'
import { Flex, Select } from '@pillar-ui/core'

export default {
  title: 'Components/Form/Select',
  component: Select,
  args: {
    'aria-label': 'Nice',
    placeholder: 'Type your Name',
  },
} as Meta<typeof Select>

export const FilledSelect = () => {
  return (
    <Flex gap="sm" direction="column">
      <Select aria-label="hello" autoFocus placeholder="Focus" variant="filled">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select aria-label="hello" placeholder="Normal" variant="filled">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select aria-label="hello" disabled placeholder="Disabled" variant="filled">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select aria-label="hello" isInvalid placeholder="Error" variant="filled">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
    </Flex>
  )
}

export const OutlineSelect = () => {
  return (
    <Flex gap="sm" direction="column">
      <Select autoFocus placeholder="Focus">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select placeholder="Normal">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select disabled placeholder="Disabled">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select isInvalid placeholder="isInvalid">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
    </Flex>
  )
}

export const BorderedSelect = () => {
  return (
    <Flex gap="sm" direction="column">
      <Select variant="bordered" autoFocus placeholder="Focus">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select variant="bordered" placeholder="Normal">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select variant="bordered" disabled placeholder="Disabled">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select variant="bordered" isInvalid placeholder="isInvalid">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
    </Flex>
  )
}

export const CornerSelect = () => {
  return (
    <Flex gap="sm" direction="column">
      <Select corner="sharp" placeholder="sharp">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select corner="xs" placeholder="xs">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select corner="sm" placeholder="sm">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select corner="md" placeholder="md">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select corner="lg" placeholder="lg">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select corner="xl" placeholder="xl">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select corner="full" placeholder="full">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
    </Flex>
  )
}

export const SizeSelect = () => {
  return (
    <Flex gap="sm" direction="column">
      <Select size="sm" placeholder="Small(sm)">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select placeholder="Medium (md default You don't need it)">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select size="lg" placeholder="Large(lg)">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
    </Flex>
  )
}

export const ColorSelect = () => {
  return (
    <Flex gap="sm" direction="column">
      <Select color="primary" variant="bordered" autoFocus placeholder="Focus">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select color="warning" variant="bordered" autoFocus placeholder="Normal">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select color="secondary" variant="outline" autoFocus placeholder="Disabled">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select color="surface" variant="filled" autoFocus placeholder="isInvalid">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select color="success" variant="bordered" autoFocus>
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select color="danger" variant="bordered" autoFocus>
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
    </Flex>
  )
}

export const Playground = {}
