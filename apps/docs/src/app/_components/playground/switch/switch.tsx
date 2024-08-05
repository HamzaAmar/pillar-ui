import { Avatar, Switch, Flex, Paper } from '~/component/core/pillar'
import React from 'react'

export const SwitchPlayGround = () => {
  return (
    <Paper className="playground" as={Flex} wrap items="center" gap="sm" border p="sm" background="bg-3" corner="sm">
      <Avatar title="Success!" color="dan" />
      <Avatar title="Success!" color="war" />
      <Avatar title="Success!" color="suc" />
      <Avatar title="Success!" color="pri" />
      <Avatar title="Success!" color="bg" />
      <Avatar title="Success!" color="sec" />
    </Paper>
  )
}

export const SwitchSizes = () => {
  return (
    <Paper className="playground" as={Flex} gap="sm" items="center" border p="sm" background="bg-3" corner="sm">
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
    <Paper as={Flex} gap="sm" items="center" border p="sm" background="bg-3" corner="sm">
      <Switch label="Hello" defaultPressed color="dan" />
      <Switch label="Hello" defaultPressed color="war" />
      <Switch label="Hello" defaultPressed color="suc" />
      <Switch label="Hello" defaultPressed color="pri" />
      <Switch label="Hello" defaultPressed color="sec" />
      <Switch label="Hello" defaultPressed color="bg" />
    </Paper>
  )
}
export const SwitchDisabled = () => {
  return (
    <Paper as={Flex} gap="sm" items="center" border p="sm" background="bg-3" corner="sm">
      <Switch label="Hello" disabled />
      <Switch label="Hello" disabled defaultPressed />
    </Paper>
  )
}

export const SwitchCorners = () => {
  return (
    <Paper as={Flex} wrap gap="sm" items="center" className="playground" border p="sm" background="bg-3" corner="sm">
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
    <Paper as={Flex} wrap gap="sm" items="center" className="playground" border p="sm" background="bg-3" corner="sm">
      <Switch label="Hello" color="dan" />
      <Switch label="Hello" color="war" />
      <Switch label="Hello" color="suc" />
      <Switch label="Hello" color="pri" />
      <Switch label="Hello" color="sec" />
      <Switch label="Hello" color="bg" />
    </Paper>
  )
}
