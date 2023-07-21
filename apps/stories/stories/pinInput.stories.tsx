import React from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Flex, PinInput } from '@pillar-ui/core'

export default {
  title: 'Components/Form/PinInput',
  component: PinInput,
  args: {
    'aria-label': 'Nice',
  },
} as ComponentMeta<typeof PinInput>

const Template: ComponentStory<typeof PinInput> = (args) => <PinInput {...args} />

export const FilledPinInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <PinInput aria-label="hello" autoFocus variant="filled" />
      <PinInput aria-label="hello" variant="filled" />
      <PinInput aria-label="hello" disabled variant="filled" />
      <PinInput aria-label="hello" readOnly variant="filled" />
    </Flex>
  )
}
export const OutlinePinInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <PinInput autoFocus />
      <PinInput />
      <PinInput disabled />
      <PinInput readOnly />
    </Flex>
  )
}
export const BorderedPinInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <PinInput variant="bordered" autoFocus />
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
      <PinInput color="primary" variant="bordered" autoFocus />
      <PinInput color="warning" variant="bordered" autoFocus />
      <PinInput color="secondary" variant="outline" autoFocus />
      <PinInput color="surface" variant="filled" autoFocus />
    </Flex>
  )
}
export const ColorPinLength = () => {
  return (
    <Flex gap="sm" direction="column">
      <PinInput length={10} color="primary" variant="bordered" autoFocus />
      <PinInput color="surface" variant="filled" autoFocus />
      <PinInput length={5} color="primary" variant="bordered" autoFocus />
      <PinInput length={6} color="warning" variant="bordered" autoFocus />
      <PinInput length={7} color="secondary" variant="outline" autoFocus />
      <PinInput length={8} color="surface" variant="filled" autoFocus />
    </Flex>
  )
}

export const ColorPinPlaceholder = () => {
  return (
    <Flex gap="sm" direction="column">
      <PinInput length={10} color="primary" variant="bordered" autoFocus />
      <PinInput placeholder="◊" length={10} color="primary" variant="bordered" autoFocus />
      <PinInput placeholder="◉" color="surface" variant="filled" autoFocus />
      <PinInput placeholder="●" length={5} color="primary" variant="bordered" autoFocus />
      <PinInput placeholder="◯" length={6} color="warning" variant="bordered" autoFocus />
      <PinInput placeholder="◵" length={7} color="secondary" variant="outline" autoFocus />
      <PinInput placeholder="◬" length={8} color="surface" variant="filled" autoFocus />
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

export const Playground = Template.bind({})
