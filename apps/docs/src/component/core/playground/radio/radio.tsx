import { Alien, Apple, Check, ChevronDown, LetterSpacing, Plane, Plus } from '@pillar-ui/icons'
import { Avatar, Radio, Flex, Paper } from '@pillar-ui/core'
import React from 'react'

export const RadioPlayGround = () => {
  return (
    <Paper
      className="playground"
      as={Flex}
      wrap
      gap="sm"
      border
      p="sm"
      background="surface-3"
      corner="sm"
      items="center"
    >
      <Avatar title="Success!" color="danger" />
      <Avatar title="Success!" color="warning" />
      <Avatar title="Success!" color="success" />
      <Avatar title="Success!" color="primary" />
      <Avatar title="Success!" color="surface" />
      <Avatar title="Success!" color="secondary" />
    </Paper>
  )
}

export const RadioSizes = () => {
  return (
    <Paper className="playground" border p="sm" flow="sm" background="surface-3" corner="sm">
      <Radio size="3xs" name="red" label="Red" />
      <Radio size="2xs" name="green" label="Green" />
      <Radio size="xs" name="orange" label="Orange" />
      <Radio size="sm" name="primary" label="primary" />
      <Radio size="lg" name="surface" label="Slate" />
      <Radio size="3xl" name="secondary" label="Secondary" />
    </Paper>
  )
}

export const RadioVariants = () => {
  return (
    <Paper className="playground" as={Flex} gap="sm" items="center" border p="sm" background="surface-3" corner="sm">
      <Radio color="secondary" name="secondary" label="Secondary" />
      <Radio variant="outline" color="secondary" name="secondary2" label="Secondary" />
      <Radio variant="soft" color="secondary" name="secondary3" label="Secondary" />
    </Paper>
  )
}

export const RadioState = () => {
  return (
    <Paper className="playground" border p="sm" flow="sm" background="surface-3" corner="sm">
      <Flex gap="sm" items="center">
        <Radio name="solid.default" label="Red" />
        <Radio name="solid.defaultChecked" label="Red" defaultChecked />
        <Radio name="solid.disabled" label="Red" disabled />
        <Radio name="solid.disabled-default" label="Red" disabled defaultChecked />
      </Flex>
      <Flex gap="sm" items="center">
        <Radio variant="soft" name="soft.default" label="Red" />
        <Radio variant="soft" name="soft.defaultChecked" label="Red" defaultChecked />
        <Radio variant="soft" name="soft.disabled" label="Red" disabled />
        <Radio variant="soft" name="soft.disabled-default" label="Red" disabled defaultChecked />
      </Flex>
      <Flex gap="sm" items="center">
        <Radio variant="outline" name="outline.default" label="Red" />
        <Radio variant="outline" name="outline.defaultChecked" label="Red" defaultChecked />
        <Radio variant="outline" name="outline.disabled" label="Red" disabled />
        <Radio variant="outline" name="outline.disabled-default" label="Red" disabled defaultChecked />
      </Flex>
    </Paper>
  )
}
export const RadioLabel = () => {
  return (
    <Paper as={Flex} gap="sm" items="center" border p="sm" flow="sm" background="surface-3" corner="sm">
      <Radio label="Option 1" />
    </Paper>
  )
}

export const RadioColors = () => {
  return (
    <Paper className="playground" border p="sm" as={Flex} items="center" gap="sm" background="surface-3" corner="sm">
      <Radio color="danger" name="red" label="Red" />
      <Radio color="success" name="green" label="Green" />
      <Radio color="warning" name="orange" label="Orange" />
      <Radio color="primary" name="primary" label="Primary" />
      <Radio color="surface" name="surface" label="Slate" />
      <Radio color="secondary" name="secondary" label="Secondary" />
    </Paper>
  )
}

export function RadioDefaultCheck() {
  return (
    <Paper className="playground" border p="sm" as={Flex} items="center" gap="sm" background="surface-3" corner="sm">
      <Flex gap="sm" items="center">
        <Radio variant="soft" name="checked.red" label="Red" defaultChecked />
        <Radio variant="outline" name="outline.red" label="Red" defaultChecked />
        <Radio name="default.red" label="Red" defaultChecked />
      </Flex>
    </Paper>
  )
}

RadioPlayGround.Colors = RadioColors
RadioPlayGround.Sizes = RadioSizes
RadioPlayGround.Variants = RadioVariants
RadioPlayGround.State = RadioState
RadioPlayGround.Label = RadioLabel
RadioPlayGround.DefaultCheck = RadioDefaultCheck
