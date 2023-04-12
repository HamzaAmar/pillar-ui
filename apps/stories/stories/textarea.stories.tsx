import React from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { User } from '@pillar/icons'
import { Flex, Textarea } from '@pillar/core'

export default {
  title: 'Components/form/Textarea',
  component: Textarea,
  args: {
    'aria-label': 'Nice',
    placeholder: 'Type your Name',
  },
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />

export const FilledInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <Textarea autoFocus placeholder="Focus" variant="filled" />
      <Textarea placeholder="Normal" variant="filled" />
      <Textarea disabled placeholder="Disabled" variant="filled" />
      <Textarea readOnly placeholder="readOnly" variant="filled" />
      <Textarea isInvalid placeholder="Error" variant="filled" />
      <Textarea suffixInput={<User width="16" />} placeholder="Error" variant="filled" />
      <Textarea prefixInput={<User width="16" />} placeholder="Placeholder" variant="filled" />
      <Textarea prefixInput={'https://'} suffixInput=".com" defaultValue="Default Value" variant="filled" />
    </Flex>
  )
}

export const OutlineInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <Textarea autoFocus placeholder="Focus" />
      <Textarea placeholder="Normal" />
      <Textarea disabled placeholder="Disabled" />
      <Textarea readOnly placeholder="readOnly" />
      <Textarea isInvalid placeholder="isInvalid" />
      <Textarea suffixInput={<User width="16" />} placeholder="Error" />
      <Textarea prefixInput={<User width="16" />} placeholder="Placeholder" />
      <Textarea prefixInput={'https://'} suffixInput=".com" defaultValue="Default Value" />
    </Flex>
  )
}
export const CornerInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <Textarea corner="sharp" placeholder="sharp" />
      <Textarea corner="xs" placeholder="xs" />
      <Textarea corner="sm" placeholder="sm" />
      <Textarea corner="md" placeholder="md" />
      <Textarea corner="lg" placeholder="lg" />
      <Textarea corner="xl" placeholder="xl" />
      <Textarea corner="full" placeholder="full" />
    </Flex>
  )
}

export const SizeInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <Textarea size="sm" placeholder="Small(sm)" />
      <Textarea placeholder="Medium (md default You don't need it)" />
      <Textarea size="lg" placeholder="Large(lg)" />
      <Textarea rows={10} size="lg" placeholder="Large(lg) with 10 rows" />
      <Textarea rows={1} size="lg" placeholder="Large(lg) with 1 rows" />
    </Flex>
  )
}

export const Playground = Template.bind({})
