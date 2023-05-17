import React from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Flex, InputFile } from '@pillar/core'

export default {
  title: 'Components/Form/InputFile',
  component: InputFile,
  args: {
    'aria-label': 'Nice',
    placeholder: 'Type your Name',
  },
} as ComponentMeta<typeof InputFile>

const Template: ComponentStory<typeof InputFile> = (args) => <InputFile {...args} />

export const FilledInputFile = () => {
  return (
    <Flex gap="sm" direction="column">
      <InputFile aria-label="hello" autoFocus variant="filled" />
      <InputFile aria-label="hello" variant="filled" />
      <InputFile aria-label="hello" disabled variant="filled" />
      <InputFile aria-label="hello" readOnly variant="filled" />
      <InputFile aria-label="hello" isInvalid variant="filled" />
    </Flex>
  )
}
export const OutlineInputFile = () => {
  return (
    <Flex gap="sm" direction="column">
      <InputFile autoFocus />
      <InputFile />
      <InputFile disabled />
      <InputFile readOnly />
      <InputFile isInvalid />
    </Flex>
  )
}
export const BorderedInputFile = () => {
  return (
    <Flex gap="sm" direction="column">
      <InputFile variant="bordered" autoFocus />
      <InputFile variant="bordered" />
      <InputFile variant="bordered" disabled />
      <InputFile variant="bordered" readOnly />
      <InputFile variant="bordered" isInvalid />
    </Flex>
  )
}

export const CornerInputFile = () => {
  return (
    <Flex gap="sm" direction="column">
      <InputFile corner="sharp" />
      <InputFile corner="xs" />
      <InputFile corner="sm" />
      <InputFile corner="md" />
      <InputFile corner="lg" />
      <InputFile corner="xl" />
      <InputFile corner="full" />
    </Flex>
  )
}

export const SizeInputFile = () => {
  return (
    <Flex gap="sm" direction="column">
      <InputFile size="sm" />
      <InputFile />
      <InputFile size="lg" />
    </Flex>
  )
}

export const ColorInputFile = () => {
  return (
    <Flex gap="sm" direction="column">
      <InputFile color="indigo" variant="bordered" />
      <InputFile color="warning" variant="bordered" />
      <InputFile color="violet" variant="outline" />
      <InputFile color="brown" variant="outline" />
      <InputFile color="slate" variant="filled" />
    </Flex>
  )
}

export const MultipleFilesInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <InputFile multiple />
    </Flex>
  )
}

export const Playground = Template.bind({})