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
    <Flex gap="sm">
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
    <Flex gap="sm" items="center">
      <Spinner size="3xs" />
      <Spinner size="2xs" />
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="xl" />
      <Spinner size="2xl" />
      <Spinner size="3xl" />
    </Flex>
  )
}

export function SpinnerThickness() {
  return (
    <Flex gap="sm" items="center">
      <Spinner size="3xs" thickness="1px" />
      <Spinner size="2xs" thickness="2px" />
      <Spinner size="xs" thickness="3px" />
      <Spinner size="sm" thickness="4px" />
      <Spinner size="md" thickness="5px" />
      <Spinner size="xl" thickness="2px" />
      <Spinner size="2xl" thickness="2px" />
      <Spinner size="3xl" thickness="200px" />
    </Flex>
  )
}

export function SpinnerInvert() {
  return (
    <div className="l_f-md">
      <Flex gap="sm" items="center">
        <Spinner color="s" />
        <Spinner color="d" />
        <Spinner color="w" />
        <Spinner color="p" />
        <Spinner color="se" />
        <Spinner color="b" />
      </Flex>
      <Flex gap="sm" items="center">
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
