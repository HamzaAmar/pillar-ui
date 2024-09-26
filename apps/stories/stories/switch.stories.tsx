import React, { CSSProperties, useState } from 'react'
import { Meta } from '@storybook/react'
import { Switch, Flex, Button, Heading } from '@pillar-ui/core'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  args: {
    label: 'Helllo',
  },
}

export default meta

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
      <Switch label="Hello" color="d" />
      <Switch label="Hello" color="w" />
      <Switch label="Hello" color="s" />
      <Switch label="Hello" color="p" />
      <Switch label="Hello" color="se" />
      <Switch label="Hello" color="b" />
    </Flex>
  )
}

export function SwitchColorsDefault() {
  return (
    <Flex gap="sm" items="center">
      <Switch label="Hello" defaultPressed color="d" />
      <Switch label="Hello" defaultPressed color="w" />
      <Switch label="Hello" defaultPressed color="s" />
      <Switch label="Hello" defaultPressed color="p" />
      <Switch label="Hello" defaultPressed color="se" />
      <Switch label="Hello" defaultPressed color="b" />
    </Flex>
  )
}

export function SwitchCorners() {
  return (
    <div className="l_f-md">
      <Heading>With Props</Heading>
      <Flex gap="sm" items="center">
        <Switch label="Hello" corner="sharp" />
        <Switch label="Hello" corner="xs" />
        <Switch label="Hello" corner="sm" />
        <Switch label="Hello" corner="md" />
        <Switch label="Hello" corner="lg" />
        <Switch label="Hello" corner="xl" />
        <Switch label="Hello" corner="full" />
      </Flex>
      <Heading>With Border Radius .5rem</Heading>
      <Flex gap="sm" items="center" style={{ '--switch-rad': '.5rem' } as CSSProperties}>
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
      </Flex>

      <Heading>With Border Radius 1rem</Heading>
      <Flex gap="sm" items="center" style={{ '--switch-rad': '2rem' } as CSSProperties}>
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
      </Flex>
      <Heading>With Border Radius sharp</Heading>
      <Flex gap="sm" items="center" style={{ '--switch-rad': 0 } as CSSProperties}>
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
      </Flex>
    </div>
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

export const SwitchControlled = () => {
  const [pressed, setPressed] = useState(false)

  function onPressedChange() {
    setPressed((pressed) => !pressed)
  }
  return (
    <Flex gap="sm" direction="column">
      <Button onClick={onPressedChange}>{pressed ? 'Pressed' : 'Unpressed'} The Switch</Button>
      <Switch color="d" label="hello" pressed={pressed} onPressedChange={onPressedChange} />
    </Flex>
  )
}

export const Playground = {}
