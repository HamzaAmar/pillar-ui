import { Alien, Apple, Check, ChevronDown, LetterSpacing, Plane, Plus } from '@pillar-ui/icons'
import { Avatar, Checkbox, Flex, Paper } from '@pillar-ui/core'
import React from 'react'

export const CheckboxPlayGround = () => {
  return (
    <Paper
      className="playground"
      as={Flex}
      wrap
      gap="sm"
      borderColor="opacity-6"
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

export const CheckboxSizes = () => {
  return (
    <Paper
      className="playground"
      as={Flex}
      items="center"
      gap="sm"
      borderColor="opacity-6"
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Checkbox size="3xs" label="Option 1" />
      <Checkbox size="2xs" label="Option 2" />
      <Checkbox size="xs" label="Option 3" />
      <Checkbox size="sm" label="Option 4" />
      <Checkbox size="md" label="Option 5" />
      <Checkbox size="lg" label="Option 6" />
      <Checkbox size="2xl" label="Option 7" />
      <Checkbox size="3xl" label="Option 8" />
    </Paper>
  )
}

export const CheckboxLabel = () => {
  return (
    <Paper
      className="playground"
      as={Flex}
      gap="sm"
      items="center"
      borderColor="opacity-6"
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Checkbox label="Option 1" />
    </Paper>
  )
}
export const CheckboxDisabled = () => {
  return (
    <Paper className="playground" borderColor="opacity-6" p="sm" background="surface-3" flow="sm" corner="sm">
      <Flex gap="sm" items="center">
        <Checkbox disabled name="hello" label="Hello" color="danger" />
        <Checkbox disabled name="hello" label="Hello" color="success" />
        <Checkbox disabled name="hello" label="Hello" color="warning" />
        <Checkbox disabled name="hello" label="Hello" color="primary" />
        <Checkbox disabled name="hello" label="Hello" color="secondary" />
        <Checkbox disabled name="hello" label="Hello" color="surface" />
      </Flex>
      <Flex gap="sm" items="center">
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="danger" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="success" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="warning" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="primary" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="secondary" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="surface" />
      </Flex>
    </Paper>
  )
}

export const CheckboxDefaultCheck = () => {
  return (
    <Paper
      className="playground"
      as={Flex}
      gap="sm"
      items="center"
      borderColor="opacity-6"
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Checkbox defaultChecked name="hello" label="Hello" color="danger" />
      <Checkbox defaultChecked name="hello" label="Hello" color="success" />
      <Checkbox defaultChecked name="hello" label="Hello" color="warning" />
      <Checkbox defaultChecked name="hello" label="Hello" color="primary" />
      <Checkbox defaultChecked name="hello" label="Hello" color="secondary" />
      <Checkbox defaultChecked name="hello" label="Hello" color="surface" />
    </Paper>
  )
}

export const CheckboxColors = () => {
  return (
    <Paper
      className="playground"
      as={Flex}
      gap="sm"
      items="center"
      borderColor="opacity-6"
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Checkbox name="hello" label="Options 1" />
      <Checkbox name="hello" label="Options 2" color="danger" />
      <Checkbox name="hello" label="Options 3" color="success" />
      <Checkbox name="hello" label="Options 4" color="warning" />
      <Checkbox name="hello" label="Options 5" color="primary" />
      <Checkbox name="hello" label="Options 6" color="secondary" />
      <Checkbox name="hello" label="Options 7" color="surface" />
    </Paper>
  )
}

export const CheckboxStatus = () => {
  return (
    <Paper
      className="playground"
      as={Flex}
      gap="sm"
      items="center"
      borderColor="opacity-6"
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Checkbox name="hello" label="Hello" />
      <Checkbox name="hello" label="Hello" checked />
      <Checkbox name="hello" label="Hello" isIndeterminate />
      <Checkbox name="hello" label="Hello" isIndeterminate checked />
    </Paper>
  )
}

CheckboxPlayGround.Colors = CheckboxColors
CheckboxPlayGround.Sizes = CheckboxSizes
CheckboxPlayGround.DefaultCheck = CheckboxDefaultCheck
CheckboxPlayGround.Label = CheckboxLabel
CheckboxPlayGround.Disabled = CheckboxDisabled
CheckboxPlayGround.Status = CheckboxStatus
