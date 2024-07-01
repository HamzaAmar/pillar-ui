import React from 'react'
import type { Meta } from '@storybook/react'
import { Flex, Select } from '@pillar-ui/core'

const meta: Meta<typeof Select> = {
  title: 'Components/Form/Select',
  component: Select,
  args: {
    'aria-label': 'Nice',
  },
}

export default meta

export const FilledSelect = () => {
  return (
    <Flex gap="sm" direction="column">
      <Select aria-label="hello" autoFocus variant="filled">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select aria-label="hello" variant="filled">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select aria-label="hello" disabled variant="filled">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select aria-label="hello" isInvalid variant="filled">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
    </Flex>
  )
}

export const OutlineSelect = () => {
  return (
    <Flex gap="sm" direction="column">
      <Select autoFocus>
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select>
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select disabled>
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select isInvalid>
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
    </Flex>
  )
}

export const BorderedSelect = () => {
  return (
    <Flex gap="sm" direction="column">
      <Select variant="bordered" autoFocus>
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select variant="bordered">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select variant="bordered" disabled>
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select variant="bordered" isInvalid>
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
    </Flex>
  )
}

export const CornerSelect = () => {
  return (
    <Flex gap="sm" direction="column">
      <Select corner="sharp">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select corner="xs">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select corner="sm">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select corner="md">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select corner="lg">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select corner="xl">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select corner="full">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
    </Flex>
  )
}

export const SizeSelect = () => {
  return (
    <Flex gap="sm" direction="column">
      <Select size="sm">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select>
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select size="lg">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
    </Flex>
  )
}

export const ColorSelect = () => {
  return (
    <Flex gap="sm" direction="column">
      <Select color="primary" variant="bordered" autoFocus>
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select color="warning" variant="bordered" autoFocus>
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select color="secondary" variant="outline" autoFocus>
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select color="surface" variant="filled" autoFocus>
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
