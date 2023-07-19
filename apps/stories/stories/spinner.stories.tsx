import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Spinner, Flex } from '@pillar-ui/core'

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>

export function SpinnerColors() {
  return (
    <Flex gap="sm">
      <Spinner color="success" />
      <Spinner color="danger" />
      <Spinner color="warning" />
      <Spinner color="primary" />
      <Spinner color="secondary" />
      <Spinner color="surface" />
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
    <div className="l_flow__md">
      <Flex gap="sm" items="center">
        <Spinner color="success" />
        <Spinner color="danger" />
        <Spinner color="warning" />
        <Spinner color="primary" />
        <Spinner color="secondary" />
        <Spinner color="surface" />
      </Flex>
      <Flex gap="sm" items="center">
        <Spinner invert color="success" />
        <Spinner invert color="danger" />
        <Spinner invert color="warning" />
        <Spinner invert color="primary" />
        <Spinner invert color="secondary" />
        <Spinner invert color="surface" />
      </Flex>
    </div>
  )
}

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />

export const NormalSpinner = Template.bind({})
