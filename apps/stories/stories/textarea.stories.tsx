import React from 'react'
import type { Meta } from '@storybook/react'
import { User } from '@pillar-ui/icons'
import { Flex, Textarea } from '@pillar-ui/core'

const meta: Meta<typeof Textarea> = {
  title: 'Components/Form/Textarea',
  component: Textarea,
  args: {
    'aria-label': 'Nice',
    placeholder: 'Type your Name',
  },
} as Meta<typeof Textarea>

export default meta

export const FilledTextarea = () => {
  return (
    <Flex gap="4" direction="col">
      <Textarea autoFocus placeholder="Focus" variant="filled" />
      <Textarea placeholder="Normal" variant="filled" />
      <Textarea disabled placeholder="Disabled" variant="filled" />
      <Textarea readOnly placeholder="readOnly" variant="filled" />
      <Textarea isInvalid placeholder="Error" variant="filled" />
      <Textarea prefixInput={<User width="16" />} placeholder="Placeholder" variant="filled" />
      <Textarea prefixInput={'https://'} suffixInput=".com" defaultValue="Default Value" variant="filled" />
    </Flex>
  )
}

export const OutlineTextarea = () => {
  return (
    <Flex gap="4" direction="col">
      <Textarea autoFocus placeholder="Focus" />
      <Textarea placeholder="Normal" />
      <Textarea disabled placeholder="Disabled" />
      <Textarea readOnly placeholder="readOnly" />
      <Textarea isInvalid placeholder="isInvalid" />
      <Textarea prefixInput={<User width="16" />} placeholder="Placeholder" />
      <Textarea prefixInput={'https://'} suffixInput=".com" defaultValue="Default Value" />
      <Textarea prefixInput={'httpsssss://'} suffixInput=".com" defaultValue="Default Value" />
    </Flex>
  )
}

export const BorderedTextarea = () => {
  return (
    <Flex gap="4" direction="col">
      <Textarea variant="bordered" autoFocus placeholder="Focus" />
      <Textarea variant="bordered" placeholder="Normal" />
      <Textarea variant="bordered" disabled placeholder="Disabled" />
      <Textarea variant="bordered" readOnly placeholder="readOnly" />
      <Textarea variant="bordered" isInvalid placeholder="isInvalid" />
      <Textarea variant="bordered" prefixInput={<User width="16" />} placeholder="Placeholder" />
      <Textarea variant="bordered" prefixInput={'https://'} suffixInput=".com" defaultValue="Default Value" />
    </Flex>
  )
}

export const CornerTextarea = () => {
  return (
    <Flex gap="4" direction="col">
      <Textarea corner="0" placeholder="sharp" />
      <Textarea corner="3" placeholder="3" />
      <Textarea corner="2" placeholder="sm" />
      <Textarea corner="3" placeholder="md" />
      <Textarea corner="4" placeholder="lg" />
      <Textarea corner="5" placeholder="xl" />
      <Textarea corner="full" placeholder="full" />
    </Flex>
  )
}

export const SizeTextarea = () => {
  return (
    <Flex gap="4" direction="col">
      <Textarea size="4" placeholder="Small(sm)" />
      <Textarea placeholder="Medium (md default You don't need it)" />
      <Textarea size="6" placeholder="Large(lg)" />
      <Textarea rows={10} size="6" placeholder="Large(lg) with 10 rows" />
      <Textarea rows={1} size="6" placeholder="Large(lg) with 1 rows" />
    </Flex>
  )
}

export const Playground = {}
