import React from 'react'
import type { Meta } from '@storybook/react'
import { Flex, PinInput } from '@pillar-ui/core'

const meta: Meta<typeof PinInput> = {
  title: 'Components/Form/PinInput',
  component: PinInput,
  args: {
    'aria-label': 'Nice',
  },
}

export default meta

export const FilledPinInput = () => {
  return (
    <Flex gap="4" direction="column">
      <PinInput aria-label="hello" variant="filled" />
      <PinInput aria-label="hello" variant="filled" />
      <PinInput aria-label="hello" disabled variant="filled" />
      <PinInput aria-label="hello" readOnly variant="filled" />
    </Flex>
  )
}

export const OutlinePinInput = () => {
  return (
    <Flex gap="4" direction="column">
      <PinInput />
      <PinInput />
      <PinInput disabled />
      <PinInput readOnly />
    </Flex>
  )
}

export const BorderedPinInput = () => {
  return (
    <Flex gap="4" direction="column">
      <PinInput variant="bordered" />
      <PinInput variant="bordered" />
      <PinInput variant="bordered" disabled />
      <PinInput variant="bordered" readOnly />
    </Flex>
  )
}

export const CornerPinInput = () => {
  return (
    <Flex gap="4" direction="column">
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
    <Flex gap="4" direction="column">
      <PinInput gap="3" />
      <PinInput size="sm" />
      <PinInput gap="5" />
      <PinInput gap="6" />
      <PinInput gap="7" />
    </Flex>
  )
}

export const ColorPinInput = () => {
  return (
    <Flex gap="4" direction="column">
      <PinInput color="p" variant="bordered" />
      <PinInput color="w" variant="bordered" />
      <PinInput color="se" variant="outline" />
      <PinInput color="b" variant="filled" />
    </Flex>
  )
}

export const ColorPinLength = () => {
  return (
    <Flex gap="4" direction="column">
      <PinInput length={10} color="p" variant="bordered" />
      <PinInput color="b" variant="filled" />
      <PinInput length={5} color="p" variant="bordered" />
      <PinInput length={6} color="w" variant="bordered" />
      <PinInput length={7} color="se" variant="outline" />
      <PinInput length={8} color="b" variant="filled" />
    </Flex>
  )
}

export const ColorPinPlaceholder = () => {
  return (
    <Flex gap="4" direction="column">
      <PinInput length={10} color="p" variant="bordered" />
      <PinInput placeholder="◊" length={10} color="p" variant="bordered" />
      <PinInput placeholder="◉" color="b" variant="filled" />
      <PinInput placeholder="●" length={5} color="p" variant="bordered" />
      <PinInput placeholder="◯" length={6} color="w" variant="bordered" />
      <PinInput placeholder="◵" length={7} color="se" variant="outline" />
      <PinInput placeholder="◬" length={8} color="b" variant="filled" />
    </Flex>
  )
}

export const ColorPinType = () => {
  return (
    <Flex gap="4" direction="column">
      <PinInput type="number" />
      <PinInput type="text" />
      <PinInput type="password" />
    </Flex>
  )
}

export const Playground = {}
