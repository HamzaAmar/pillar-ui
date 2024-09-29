import React from 'react'
import type { Meta } from '@storybook/react'
import { Flex, InputFile } from '@pillar-ui/core'

const meta: Meta<typeof InputFile> = {
  title: 'Components/Form/InputFile',
  component: InputFile,
  args: {
    'aria-label': 'Nice',
    placeholder: 'Type your Name',
  },
}

export default meta

export const FilledInputFile = () => {
  return (
    <Flex gap="4" direction="col">
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
    <Flex gap="4" direction="col">
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
    <Flex gap="4" direction="col">
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
    <Flex gap="4" direction="col">
      <InputFile corner="0" />
      <InputFile corner="3" />
      <InputFile corner="2" />
      <InputFile corner="3" />
      <InputFile corner="4" />
      <InputFile corner="5" />
      <InputFile corner="full" />
    </Flex>
  )
}

export const SizeInputFile = () => {
  return (
    <Flex gap="4" direction="col">
      <InputFile size="4" />
      <InputFile />
      <InputFile size="6" />
    </Flex>
  )
}

export const ColorInputFile = () => {
  return (
    <Flex gap="4" direction="col">
      <InputFile color="p" variant="bordered" />
      <InputFile color="w" variant="bordered" />
      <InputFile color="se" variant="outline" />
      <InputFile color="b" variant="filled" />
    </Flex>
  )
}

export const MultipleFilesInput = () => {
  return (
    <Flex gap="4" direction="col">
      <InputFile multiple />
    </Flex>
  )
}

export const Playground = {}
