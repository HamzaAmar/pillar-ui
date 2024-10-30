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
    <Flex gap="4" direction="col">
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
        suffixInput={<Button corner="0">Connect</Button>}
        defaultValue="Default Value"
        variant="filled"
      />
    </Flex>
  )
}

export const OutlineInput = () => {
  return (
    <div className="Sf-5">
      <Flex gap="4" direction="col">
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
    <Flex gap="4" direction="col">
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
    <Flex gap="4" direction="col">
      <Input corner="0" placeholder="sharp" />
      <Input corner="3" placeholder="3" />
      <Input corner="2" placeholder="sm" />
      <Input corner="3" placeholder="md" />
      <Input corner="4" placeholder="lg" />
      <Input corner="5" placeholder="xl" />
      <Input corner="full" placeholder="full" />
    </Flex>
  )
}

export const SizeInput = () => {
  return (
    <Flex gap="4" direction="col">
      <Input size="3" placeholder="Extra Small(XS)" />
      <Input size="4" placeholder="Small(sm)" />
      <Input size="5" placeholder="Medium (md default You don't need it)" />
      <Input size="6" placeholder="Large(lg)" />
      <Input size="7" placeholder="Large(lg)" />
    </Flex>
  )
}

export const ColorInput = () => {
  return (
    <Flex gap="4" direction="col">
      <Input color="p" variant="bordered" autoFocus placeholder="Focus" />
      <Input color="w" variant="bordered" autoFocus placeholder="Normal" />
      <Input color="se" variant="outline" autoFocus placeholder="Disabled" />
      <Input color="b" variant="filled" autoFocus placeholder="isInvalid" />
      <Input color="su" variant="bordered" autoFocus prefixInput={<User width="16" />} placeholder="Placeholder" />
      <Input
        color="d"
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
