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
    <Flex gap="sm" direction="column">
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
    <Flex gap="sm" direction="column">
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
    <Flex gap="sm" direction="column">
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
    <Flex gap="sm" direction="column">
      <InputSearch corner="sharp" placeholder="sharp" />
      <InputSearch corner="xs" placeholder="xs" />
      <InputSearch corner="sm" placeholder="sm" />
      <InputSearch corner="md" placeholder="md" />
      <InputSearch corner="lg" placeholder="lg" />
      <InputSearch corner="xl" placeholder="xl" />
      <InputSearch corner="full" placeholder="full" />
    </Flex>
  )
}

export const SizeInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <InputSearch size="sm" placeholder="Small(sm)" />
      <InputSearch placeholder="Medium (md default You don't need it)" />
      <InputSearch size="lg" placeholder="Large(lg)" />
    </Flex>
  )
}

export const ColorInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <InputSearch color="pri" variant="bordered" autoFocus placeholder="Focus" />
      <InputSearch color="war" variant="bordered" autoFocus placeholder="Normal" />
      <InputSearch color="sec" variant="outline" autoFocus placeholder="Disabled" />
      <InputSearch color="bg" variant="filled" autoFocus placeholder="isInvalid" />
      <InputSearch
        color="suc"
        variant="bordered"
        autoFocus
        prefixInput={<User width="16" />}
        placeholder="Placeholder"
      />
      <InputSearch color="dan" variant="bordered" autoFocus prefixInput={'https://'} defaultValue="Default Value" />
    </Flex>
  )
}

export const Playground = {}
