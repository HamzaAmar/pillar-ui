import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import { Flex, PinInput } from '@pillar-ui/core'

export default {
  title: 'Components/Form/PinInput',
  component: PinInput,
  args: {
    'aria-label': 'Nice',
  },
} as Meta<typeof PinInput>

export const FilledPinInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <PinInput aria-label="hello" variant="filled" />
      <PinInput aria-label="hello" variant="filled" />
      <PinInput aria-label="hello" disabled variant="filled" />
      <PinInput aria-label="hello" readOnly variant="filled" />
    </Flex>
  )
}

export const OutlinePinInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <PinInput />
      <PinInput />
      <PinInput disabled />
      <PinInput readOnly />
    </Flex>
  )
}

export const BorderedPinInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <PinInput variant="bordered" />
      <PinInput variant="bordered" />
      <PinInput variant="bordered" disabled />
      <PinInput variant="bordered" readOnly />
    </Flex>
  )
}

export const CornerPinInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <PinInput corner="sharp" />
      <PinInput corner="xs" />
      <PinInput corner="sm" />
      <PinInput corner="md" />
      <PinInput corner="lg" />
      <PinInput corner="xl" />
      <PinInput corner="full" />
    </Flex>
  )
}

export const SizePinInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <PinInput size="xs" />
      <PinInput size="sm" />
      <PinInput size="md" />
      <PinInput size="lg" />
      <PinInput size="xl" />
    </Flex>
  )
}

export const ColorPinInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <PinInput color="primary" variant="bordered" />
      <PinInput color="warning" variant="bordered" />
      <PinInput color="secondary" variant="outline" />
      <PinInput color="surface" variant="filled" />
    </Flex>
  )
}

export const ColorPinLength = () => {
  return (
    <Flex gap="sm" direction="column">
      <PinInput length={10} color="primary" variant="bordered" />
      <PinInput color="surface" variant="filled" />
      <PinInput length={5} color="primary" variant="bordered" />
      <PinInput length={6} color="warning" variant="bordered" />
      <PinInput length={7} color="secondary" variant="outline" />
      <PinInput length={8} color="surface" variant="filled" />
    </Flex>
  )
}

export const ColorPinPlaceholder = () => {
  return (
    <Flex gap="sm" direction="column">
      <PinInput length={10} color="primary" variant="bordered" />
      <PinInput placeholder="◊" length={10} color="primary" variant="bordered" />
      <PinInput placeholder="◉" color="surface" variant="filled" />
      <PinInput placeholder="●" length={5} color="primary" variant="bordered" />
      <PinInput placeholder="◯" length={6} color="warning" variant="bordered" />
      <PinInput placeholder="◵" length={7} color="secondary" variant="outline" />
      <PinInput placeholder="◬" length={8} color="surface" variant="filled" />
    </Flex>
  )
}

export const ColorPinType = () => {
  return (
    <Flex gap="sm" direction="column">
      <PinInput type="number" />
      <PinInput type="text" />
      <PinInput type="password" />
    </Flex>
  )
}

export const Playground = {}
