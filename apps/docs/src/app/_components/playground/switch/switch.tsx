import { Avatar, Switch, Flex, Paper } from '~/component/core/pillar'
import React from 'react'

export const SwitchPlayGround = () => {
  return (
    <Paper
      className="playground"
      as={Flex}
      wrap
      items="center"
      gap="sm"
      border
      p="sm"
      background="surface-3"
      corner="sm"
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

export const SwitchSizes = () => {
  return (
    <Paper className="playground" as={Flex} gap="sm" items="center" border p="sm" background="surface-3" corner="sm">
      <Switch label="Hello" size="3xs" />
      <Switch label="Hello" size="2xs" />
      <Switch label="Hello" size="xs" />
      <Switch label="Hello" size="sm" />
      <Switch label="Hello" size="md" />
      <Switch label="Hello" size="lg" />
      <Switch label="Hello" size="xl" />
      <Switch label="Hello" size="2xl" />
      <Switch label="Hello" size="3xl" />
    </Paper>
  )
}

export const SwitchDefaultPressed = () => {
  return (
    <Paper as={Flex} gap="sm" items="center" border p="sm" background="surface-3" corner="sm">
      <Switch label="Hello" defaultPressed color="danger" />
      <Switch label="Hello" defaultPressed color="warning" />
      <Switch label="Hello" defaultPressed color="success" />
      <Switch label="Hello" defaultPressed color="primary" />
      <Switch label="Hello" defaultPressed color="secondary" />
      <Switch label="Hello" defaultPressed color="surface" />
    </Paper>
  )
}
export const SwitchDisabled = () => {
  return (
    <Paper as={Flex} gap="sm" items="center" border p="sm" background="surface-3" corner="sm">
      <Switch label="Hello" disabled />
      <Switch label="Hello" disabled defaultPressed />
    </Paper>
  )
}

export const SwitchCorners = () => {
  return (
    <Paper
      as={Flex}
      wrap
      gap="sm"
      items="center"
      className="playground"
      border
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Switch label="Hello" corner="sharp" />
      <Switch label="Hello" corner="xs" />
      <Switch label="Hello" corner="sm" />
      <Switch label="Hello" corner="md" />
      <Switch label="Hello" corner="lg" />
      <Switch label="Hello" corner="xl" />
      <Switch label="Hello" corner="full" />
    </Paper>
  )
}

export const SwitchColors = () => {
  return (
    <Paper
      as={Flex}
      wrap
      gap="sm"
      items="center"
      className="playground"
      border
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Switch label="Hello" color="danger" />
      <Switch label="Hello" color="warning" />
      <Switch label="Hello" color="success" />
      <Switch label="Hello" color="primary" />
      <Switch label="Hello" color="secondary" />
      <Switch label="Hello" color="surface" />
    </Paper>
  )
}

SwitchPlayGround.Colors = SwitchColors
SwitchPlayGround.Sizes = SwitchSizes
SwitchPlayGround.Corners = SwitchCorners
SwitchPlayGround.DefaultPressed = SwitchDefaultPressed
SwitchPlayGround.Disabled = SwitchDisabled
