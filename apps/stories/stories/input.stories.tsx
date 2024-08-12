import React from 'react'
import type { Meta } from '@storybook/react'
import { User } from '@pillar-ui/icons'
import { Flex, Input, Button } from '@pillar-ui/core'

const meta: Meta<typeof Input> = {
  title: 'Components/Form/Input',
  component: Input,
  args: {
    'aria-label': 'Nice',
    placeholder: 'Type your Name',
  },
}

export default meta

export const FilledInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <Input aria-label="hello" autoFocus placeholder="Focus" variant="filled" />
      <Input aria-label="hello" placeholder="Normal" variant="filled" />
      <Input aria-label="hello" disabled placeholder="Disabled" variant="filled" />
      <Input aria-label="hello" readOnly placeholder="readOnly" variant="filled" />
      <Input aria-label="hello" isInvalid placeholder="Error" variant="filled" />
      <Input aria-label="hello" suffixInput={<User width="16" />} placeholder="Error" variant="filled" />
      <Input aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" variant="filled" />
      <Input
        aria-label="hello"
        prefixInput={'https://'}
        suffixInput=".com"
        defaultValue="Default Value"
        variant="filled"
      />
      <Input
        aria-label="hello"
        suffixInput={<Button corner="sharp">Connect</Button>}
        defaultValue="Default Value"
        variant="filled"
      />
    </Flex>
  )
}

export const OutlineInput = () => {
  return (
    <div className="l_f-lg">
      <Flex gap="sm" direction="column">
        <Input autoFocus placeholder="Focus" />
        <Input placeholder="Normal" />
        <Input disabled placeholder="Disabled" />
        <Input readOnly placeholder="readOnly" />
        <Input isInvalid placeholder="isInvalid" />
        <Input suffixInput={<User width="16" />} placeholder="Error" />
        <Input prefixInput={<User width="16" />} placeholder="Placeholder" />
        <Input prefixInput={'https://'} suffixInput=".com" defaultValue="Default Value" />
      </Flex>
    </div>
  )
}

export const BorderedInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <Input variant="bordered" autoFocus placeholder="Focus" />
      <Input variant="bordered" placeholder="Normal" />
      <Input variant="bordered" disabled placeholder="Disabled" />
      <Input variant="bordered" readOnly placeholder="readOnly" />
      <Input variant="bordered" isInvalid placeholder="isInvalid" />
      <Input variant="bordered" suffixInput={<User width="16" />} placeholder="Error" />
      <Input variant="bordered" prefixInput={<User width="16" />} placeholder="Placeholder" />
      <Input variant="bordered" prefixInput={'https://'} suffixInput=".com" defaultValue="Default Value" />
    </Flex>
  )
}

export const CornerInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <Input corner="sharp" placeholder="sharp" />
      <Input corner="xs" placeholder="xs" />
      <Input corner="sm" placeholder="sm" />
      <Input corner="md" placeholder="md" />
      <Input corner="lg" placeholder="lg" />
      <Input corner="xl" placeholder="xl" />
      <Input corner="full" placeholder="full" />
    </Flex>
  )
}

export const SizeInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <Input size="sm" placeholder="Small(sm)" />
      <Input placeholder="Medium (md default You don't need it)" />
      <Input size="lg" placeholder="Large(lg)" />
    </Flex>
  )
}

export const ColorInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <Input color="pri" variant="bordered" autoFocus placeholder="Focus" />
      <Input color="war" variant="bordered" autoFocus placeholder="Normal" />
      <Input color="sec" variant="outline" autoFocus placeholder="Disabled" />
      <Input color="bg" variant="filled" autoFocus placeholder="isInvalid" />
      <Input color="suc" variant="bordered" autoFocus prefixInput={<User width="16" />} placeholder="Placeholder" />
      <Input
        color="dan"
        variant="bordered"
        autoFocus
        prefixInput={'https://'}
        suffixInput=".com"
        defaultValue="Default Value"
      />
    </Flex>
  )
}

export const Playground = {}
