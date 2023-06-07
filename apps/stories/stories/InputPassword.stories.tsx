import React from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Close, OpenSource, Lock, LockOff } from '@pillar/icons'
import { Flex, InputPassword } from '@pillar/core'

export default {
  title: 'Components/Form/InputPassword',
  component: InputPassword,
  args: {
    'aria-label': 'Nice',
    placeholder: 'Type your Name',
  },
} as ComponentMeta<typeof InputPassword>

const Template: ComponentStory<typeof InputPassword> = (args) => <InputPassword {...args} />

export const FilledInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <InputPassword aria-label="hello" autoFocus placeholder="Focus" variant="filled" />
      <InputPassword aria-label="hello" placeholder="Normal" variant="filled" />
      <InputPassword aria-label="hello" disabled placeholder="Disabled" variant="filled" />
      <InputPassword aria-label="hello" readOnly placeholder="readOnly" variant="filled" />
      <InputPassword aria-label="hello" isInvalid placeholder="Error" variant="filled" />
      <InputPassword aria-label="hello" placeholder="Error" variant="filled" />
      <InputPassword aria-label="hello" placeholder="Placeholder" variant="filled" />
      <InputPassword aria-label="hello" defaultValue="Default Value" variant="filled" />
    </Flex>
  )
}
export const OutlineInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <InputPassword autoFocus placeholder="Focus" />
      <InputPassword placeholder="Normal" />
      <InputPassword disabled placeholder="Disabled" />
      <InputPassword readOnly placeholder="readOnly" />
      <InputPassword isInvalid placeholder="isInvalid" />
      <InputPassword placeholder="Error" />
      <InputPassword placeholder="Placeholder" />
      <InputPassword defaultValue="Default Value" />
    </Flex>
  )
}
export const BorderedInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <InputPassword variant="bordered" autoFocus placeholder="Focus" />
      <InputPassword variant="bordered" placeholder="Normal" />
      <InputPassword variant="bordered" disabled placeholder="Disabled" />
      <InputPassword variant="bordered" readOnly placeholder="readOnly" />
      <InputPassword variant="bordered" isInvalid placeholder="isInvalid" />
      <InputPassword variant="bordered" placeholder="Error" />
      <InputPassword variant="bordered" placeholder="Placeholder" />
      <InputPassword variant="bordered" defaultValue="Default Value" />
    </Flex>
  )
}

export const CornerInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <InputPassword corner="sharp" placeholder="sharp" />
      <InputPassword corner="xs" placeholder="xs" />
      <InputPassword corner="sm" placeholder="sm" />
      <InputPassword corner="md" placeholder="md" />
      <InputPassword corner="lg" placeholder="lg" />
      <InputPassword corner="xl" placeholder="xl" />
      <InputPassword corner="full" placeholder="full" />
    </Flex>
  )
}

export const SizeInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <InputPassword size="sm" placeholder="Small(sm)" />
      <InputPassword placeholder="Medium (md default You don't need it)" />
      <InputPassword size="lg" placeholder="Large(lg)" />
    </Flex>
  )
}

export const ColorInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <InputPassword color="primary" variant="bordered" autoFocus placeholder="Focus" />
      <InputPassword color="warning" variant="bordered" autoFocus placeholder="Normal" />
      <InputPassword color="secondary" variant="outline" autoFocus placeholder="Disabled" />
      <InputPassword color="surface" variant="filled" autoFocus placeholder="isInvalid" />
      <InputPassword color="success" variant="bordered" autoFocus placeholder="Placeholder" />
      <InputPassword color="danger" variant="bordered" autoFocus defaultValue="Default Value" />
    </Flex>
  )
}

export const InputPasswordCustomIcon = () => {
  return (
    <Flex gap="sm" direction="column">
      <InputPassword
        placeholder="enter your password"
        color="primary"
        visibleIcon={<Lock />}
        hiddenIcon={<LockOff />}
      />
      <InputPassword
        placeholder="enter your password"
        color="warning"
        visibleIcon={<OpenSource />}
        hiddenIcon={<Close />}
      />
    </Flex>
  )
}

export const Playground = Template.bind({})
