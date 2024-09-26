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
      <Spinner size="3xs" />
      <Spinner gap="2" />
      <Spinner gap="3" />
      <Spinner size="sm" />
      <Spinner gap="5" />
      <Spinner gap="7" />
      <Spinner gap="8" />
      <Spinner gap="9" />
    </Flex>
  )
}

export function SpinnerThickness() {
  return (
    <Flex gap="4" items="center">
      <Spinner size="3xs" thickness="1px" />
      <Spinner gap="2" thickness="2px" />
      <Spinner gap="3" thickness="3px" />
      <Spinner size="sm" thickness="4px" />
      <Spinner gap="5" thickness="5px" />
      <Spinner gap="7" thickness="2px" />
      <Spinner gap="8" thickness="2px" />
      <Spinner gap="9" thickness="200px" />
    </Flex>
  )
}

export function SpinnerInvert() {
  return (
    <div className="l_f-md">
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
