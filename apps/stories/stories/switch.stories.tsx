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
    <Flex gap="4" items="center">
      <Switch label="Hello" size="1" />
      <Switch label="Hello" size="2" />
      <Switch label="Hello" size="3" />
      <Switch label="Hello" size="4" />
      <Switch label="Hello" size="5" />
      <Switch label="Hello" size="6" />
      <Switch label="Hello" size="7" />
      <Switch label="Hello" size="8" />
      <Switch label="Hello" size="9" />
    </Flex>
  )
}

export function SwitchColors() {
  return (
    <Flex gap="4" items="center">
      <Switch label="Hello" color="d" />
      <Switch label="Hello" color="w" />
      <Switch label="Hello" color="su" />
      <Switch label="Hello" color="p" />
      <Switch label="Hello" color="se" />
      <Switch label="Hello" color="b" />
    </Flex>
  )
}

export function SwitchColorsDefault() {
  return (
    <Flex gap="4" items="center">
      <Switch label="Hello" defaultPressed color="d" />
      <Switch label="Hello" defaultPressed color="w" />
      <Switch label="Hello" defaultPressed color="su" />
      <Switch label="Hello" defaultPressed color="p" />
      <Switch label="Hello" defaultPressed color="se" />
      <Switch label="Hello" defaultPressed color="b" />
    </Flex>
  )
}

export function SwitchCorners() {
  return (
    <div className="Sf-4">
      <Heading>With Props</Heading>
      <Flex gap="4" items="center">
        <Switch label="Hello" corner="0" />
        <Switch label="Hello" corner="3" />
        <Switch label="Hello" corner="2" />
        <Switch label="Hello" corner="3" />
        <Switch label="Hello" corner="4" />
        <Switch label="Hello" corner="5" />
        <Switch label="Hello" corner="full" />
      </Flex>
      <Heading>With Border Radius .5rem</Heading>
      <Flex gap="4" items="center" style={{ '--switch-rad': '.5rem' } as CSSProperties}>
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
      </Flex>

      <Heading>With Border Radius 1rem</Heading>
      <Flex gap="4" items="center" style={{ '--switch-rad': '2rem' } as CSSProperties}>
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
        <Switch label="Hello" />
      </Flex>
      <Heading>With Border Radius sharp</Heading>
      <Flex gap="4" items="center" style={{ '--switch-rad': 0 } as CSSProperties}>
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
    <Flex gap="4" items="center">
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
    <Flex gap="4" direction="col">
      <Button onClick={onPressedChange}>{pressed ? 'Pressed' : 'Unpressed'} The Switch</Button>
      <Switch color="d" label="hello" pressed={pressed} onPressedChange={onPressedChange} />
    </Flex>
  )
}

export const Playground = {}
