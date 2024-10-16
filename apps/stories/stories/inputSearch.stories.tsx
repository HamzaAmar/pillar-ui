import React from 'react'
import type { Meta } from '@storybook/react'
import { User } from '@pillar-ui/icons'
import { Flex, InputSearch } from '@pillar-ui/core'

const meta: Meta<typeof InputSearch> = {
  title: 'Components/Form/InputSearch',
  component: InputSearch,
  args: {
    'aria-label': 'Nice',
    placeholder: 'Type your Name',
  },
}

export default meta

export const FilledInput = () => {
  return (
    <Flex gap="4" direction="col">
      <InputSearch
        aria-label="hello"
        autoFocus
        placeholder="Focus"
        variant="filled"
        suffixInput={<User width="16" />}
      />
      <InputSearch aria-label="hello" placeholder="Normal" variant="filled" />
      <InputSearch aria-label="hello" disabled placeholder="Disabled" variant="filled" />
      <InputSearch aria-label="hello" readOnly placeholder="readOnly" variant="filled" />
      <InputSearch aria-label="hello" isInvalid placeholder="Error" variant="filled" />
      <InputSearch aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" variant="filled" />
    </Flex>
  )
}

export const OutlineInput = () => {
  return (
    <Flex gap="4" direction="col">
      <InputSearch autoFocus placeholder="Focus" />
      <InputSearch placeholder="Normal" />
      <InputSearch disabled placeholder="Disabled" />
      <InputSearch readOnly placeholder="readOnly" />
      <InputSearch isInvalid placeholder="isInvalid" />
      <InputSearch prefixInput={<User width="16" />} placeholder="Placeholder" />
    </Flex>
  )
}

export const BorderedInput = () => {
  return (
    <Flex gap="4" direction="col">
      <InputSearch variant="bordered" autoFocus placeholder="Focus" />
      <InputSearch variant="bordered" placeholder="Normal" />
      <InputSearch variant="bordered" disabled placeholder="Disabled" />
      <InputSearch variant="bordered" readOnly placeholder="readOnly" />
      <InputSearch variant="bordered" isInvalid placeholder="isInvalid" />
      <InputSearch variant="bordered" prefixInput={<User width="16" />} placeholder="Placeholder" />
    </Flex>
  )
}

export const CornerInput = () => {
  return (
    <Flex gap="4" direction="col">
      <InputSearch corner="0" placeholder="sharp" />
      <InputSearch corner="3" placeholder="3" />
      <InputSearch corner="2" placeholder="sm" />
      <InputSearch corner="3" placeholder="md" />
      <InputSearch corner="4" placeholder="lg" />
      <InputSearch corner="5" placeholder="xl" />
      <InputSearch corner="full" placeholder="full" />
    </Flex>
  )
}

export const SizeInput = () => {
  return (
    <Flex gap="4" direction="col">
      <InputSearch size="4" placeholder="Small(sm)" />
      <InputSearch placeholder="Medium (md default You don't need it)" />
      <InputSearch size="6" placeholder="Large(lg)" />
    </Flex>
  )
}

export const ColorInput = () => {
  return (
    <Flex gap="4" direction="col">
      <InputSearch color="p" variant="bordered" autoFocus placeholder="Focus" />
      <InputSearch color="w" variant="bordered" autoFocus placeholder="Normal" />
      <InputSearch color="se" variant="outline" autoFocus placeholder="Disabled" />
      <InputSearch color="b" variant="filled" autoFocus placeholder="isInvalid" />
      <InputSearch
        color="su"
        variant="bordered"
        autoFocus
        prefixInput={<User width="16" />}
        placeholder="Placeholder"
      />
      <InputSearch color="d" variant="bordered" autoFocus prefixInput={'https://'} defaultValue="Default Value" />
    </Flex>
  )
}

export const Playground = {}
