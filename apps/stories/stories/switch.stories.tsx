import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Switch, Flex } from '@pillar/core'

export default {
  title: 'Components/Switch',
  component: Switch,
  args: {
    label: 'Helllo',
  },
} as ComponentMeta<typeof Switch>

export function SwitchSizes() {
  return (
    <Flex gap="sm" items="center">
      <Switch label="Hello" size="3xs" />
      <Switch label="Hello" size="2xs" />
      <Switch label="Hello" size="xs" />
      <Switch label="Hello" size="sm" />
      <Switch label="Hello" size="md" />
      <Switch label="Hello" size="lg" />
      <Switch label="Hello" size="xl" />
      <Switch label="Hello" size="2xl" />
      <Switch label="Hello" size="3xl" />
    </Flex>
  )
}

export function SwitchColors() {
  return (
    <Flex gap="sm" items="center">
      <Switch label="Hello" color="red" />
      <Switch label="Hello" color="orange" />
      <Switch label="Hello" color="green" />
      <Switch label="Hello" color="indigo" />
      <Switch label="Hello" color="purple" />
      <Switch label="Hello" color="violet" />
      <Switch label="Hello" color="slate" />
      <Switch label="Hello" color="brown" />
    </Flex>
  )
}

export function SwitchColorsDefault() {
  return (
    <Flex gap="sm" items="center">
      <Switch label="Hello" defaultPressed color="red" />
      <Switch label="Hello" defaultPressed color="orange" />
      <Switch label="Hello" defaultPressed color="green" />
      <Switch label="Hello" defaultPressed color="indigo" />
      <Switch label="Hello" defaultPressed color="purple" />
      <Switch label="Hello" defaultPressed color="violet" />
      <Switch label="Hello" defaultPressed color="slate" />
      <Switch label="Hello" defaultPressed color="brown" />
    </Flex>
  )
}

export function SwitchCorners() {
  return (
    <Flex gap="sm" items="center">
      <Switch label="Hello" corner="sharp" />
      <Switch label="Hello" corner="xs" />
      <Switch label="Hello" corner="sm" />
      <Switch label="Hello" corner="md" />
      <Switch label="Hello" corner="lg" />
      <Switch label="Hello" corner="xl" />
      <Switch label="Hello" corner="full" />
    </Flex>
  )
}

export function SwitchStates() {
  return (
    <Flex gap="sm" items="center">
      <Switch label="Hello" disabled />
      <Switch label="Hello" disabled defaultPressed />
      <Switch label="Hello" disabled />
      <Switch label="Hello" disabled />
    </Flex>
  )
}

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />

export const Playground = Template.bind({})
