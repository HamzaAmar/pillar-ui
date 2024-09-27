import React from 'react'
import { Meta } from '@storybook/react'

import { Spinner, Flex } from '@pillar-ui/core'

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
}

export default meta

export function SpinnerColors() {
  return (
    <Flex gap="4">
      <Spinner color="s" />
      <Spinner color="d" />
      <Spinner color="w" />
      <Spinner color="p" />
      <Spinner color="se" />
      <Spinner color="b" />
    </Flex>
  )
}

export function SpinnerSizes() {
  return (
    <Flex gap="4" items="center">
      <Spinner size="1" />
      <Spinner size="2" />
      <Spinner size="3" />
      <Spinner size="4" />
      <Spinner size="5" />
      <Spinner size="7" />
      <Spinner size="8" />
      <Spinner size="9" />
    </Flex>
  )
}

export function SpinnerThickness() {
  return (
    <Flex gap="4" items="center">
      <Spinner size="1" thickness="1px" />
      <Spinner size="2" thickness="2px" />
      <Spinner size="3" thickness="3px" />
      <Spinner size="4" thickness="4px" />
      <Spinner size="5" thickness="5px" />
      <Spinner size="7" thickness="2px" />
      <Spinner size="8" thickness="2px" />
      <Spinner size="9" thickness="200px" />
    </Flex>
  )
}

export function SpinnerInvert() {
  return (
    <div className="Sfmd">
      <Flex gap="4" items="center">
        <Spinner color="s" />
        <Spinner color="d" />
        <Spinner color="w" />
        <Spinner color="p" />
        <Spinner color="se" />
        <Spinner color="b" />
      </Flex>
      <Flex gap="4" items="center">
        <Spinner invert color="s" />
        <Spinner invert color="d" />
        <Spinner invert color="w" />
        <Spinner invert color="p" />
        <Spinner invert color="se" />
        <Spinner invert color="b" />
      </Flex>
    </div>
  )
}

export const NormalSpinner = {}
