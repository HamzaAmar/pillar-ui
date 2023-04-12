import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Spinner, Flex } from '@pillar/core'

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>

export function SpinnerColors() {
  return (
    <Flex gap="sm">
      <Spinner color="green" />
      <Spinner color="red" />
      <Spinner color="orange" />
      <Spinner color="indigo" />
      <Spinner color="purple" />
      <Spinner color="violet" />
      <Spinner color="brown" />
      <Spinner color="slate" />
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
    <div className="l_flow">
      <Flex gap="sm" items="center">
        <Spinner color="green" />
        <Spinner color="red" />
        <Spinner color="orange" />
        <Spinner color="indigo" />
        <Spinner color="purple" />
        <Spinner color="violet" />
        <Spinner color="brown" />
        <Spinner color="slate" />
      </Flex>
      <Flex gap="sm" items="center">
        <Spinner invert color="green" />
        <Spinner invert color="red" />
        <Spinner invert color="orange" />
        <Spinner invert color="indigo" />
        <Spinner invert color="purple" />
        <Spinner invert color="violet" />
        <Spinner invert color="brown" />
        <Spinner invert color="slate" />
      </Flex>
    </div>
  )
}

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />

export const NormalSpinner = Template.bind({})
