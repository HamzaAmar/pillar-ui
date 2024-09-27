import React from 'react'
import type { Meta } from '@storybook/react'
import { Close, OpenSource, Lock, LockOff, User } from '@pillar-ui/icons'
import { Flex, FormController, InputPassword } from '@pillar-ui/core'

const meta: Meta<typeof InputPassword> = {
  title: 'Components/Form/InputPassword',
  component: InputPassword,
  args: {
    'aria-label': 'Nice',
    placeholder: 'Type your Name',
  },
} as Meta<typeof InputPassword>

export default meta
export const FilledInput = () => {
  return (
    <Flex gap="4" direction="column">
      <InputPassword aria-label="hello" autoFocus placeholder="Focus" variant="filled" />
      <InputPassword aria-label="hello" placeholder="Normal" variant="filled" />
      <InputPassword aria-label="hello" disabled placeholder="Disabled" variant="filled" />
      <InputPassword aria-label="hello" readOnly placeholder="readOnly" variant="filled" />
      <InputPassword aria-label="hello" isInvalid placeholder="Error" variant="filled" />
      <InputPassword aria-label="hello" placeholder="Error" variant="filled" />
      <InputPassword aria-label="hello" placeholder="Placeholder" variant="filled" />
      <InputPassword aria-label="hello" defaultValue="Default Value" variant="filled" />
      <InputPassword variant="filled" prefixInput={<User width="16" />} placeholder="Placeholder" />
    </Flex>
  )
}

export const OutlineInput = () => {
  return (
    <Flex gap="4" direction="column">
      <InputPassword autoFocus placeholder="Focus" />
      <InputPassword placeholder="Normal" />
      <InputPassword disabled placeholder="Disabled" />
      <InputPassword readOnly placeholder="readOnly" />
      <InputPassword isInvalid placeholder="isInvalid" />
      <InputPassword placeholder="Error" />
      <InputPassword placeholder="Placeholder" />
      <InputPassword defaultValue="Default Value" />
      <InputPassword prefixInput={<User width="16" />} placeholder="Placeholder" />
    </Flex>
  )
}

export const BorderedInput = () => {
  return (
    <Flex gap="4" direction="column">
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
    <Flex gap="4" direction="column">
      <InputPassword corner="0" placeholder="sharp" />
      <InputPassword corner="3" placeholder="3" />
      <InputPassword corner="2" placeholder="sm" />
      <InputPassword corner="3" placeholder="md" />
      <InputPassword corner="4" placeholder="lg" />
      <InputPassword corner="5" placeholder="xl" />
      <InputPassword corner="full" placeholder="full" />
    </Flex>
  )
}

export const SizeInput = () => {
  return (
    <Flex gap="4" direction="column">
      <InputPassword size="4" placeholder="Small(sm)" />
      <InputPassword placeholder="Medium (md default You don't need it)" />
      <InputPassword size="6" placeholder="Large(lg)" />
    </Flex>
  )
}

export const ColorInput = () => {
  return (
    <Flex gap="4" direction="column">
      <InputPassword color="p" variant="bordered" autoFocus placeholder="Focus" />
      <InputPassword color="w" variant="bordered" autoFocus placeholder="Normal" />
      <InputPassword color="se" variant="outline" autoFocus placeholder="Disabled" />
      <InputPassword color="b" variant="filled" autoFocus placeholder="isInvalid" />
      <InputPassword color="s" variant="bordered" autoFocus placeholder="Placeholder" />
      <InputPassword color="d" variant="bordered" autoFocus defaultValue="Default Value" />
    </Flex>
  )
}

export const InputPasswordCustomIcon = () => {
  return (
    <Flex gap="4" direction="column">
      <InputPassword placeholder="enter your password" color="p" visibleIcon={<Lock />} hiddenIcon={<LockOff />} />
      <InputPassword placeholder="enter your password" color="w" visibleIcon={<OpenSource />} hiddenIcon={<Close />} />

      <FormController label="Hello world" hint="The password need to be between 5 and 15" error="Nice Error Here">
        <InputPassword
          placeholder="enter your password"
          color="w"
          visibleIcon={<OpenSource />}
          hiddenIcon={<Close />}
        />
      </FormController>
    </Flex>
  )
}

export const Playground = {}
