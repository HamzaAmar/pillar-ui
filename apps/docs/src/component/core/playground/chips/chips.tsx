import { Close } from '@pillar-ui/icons'
import { Avatar, Chips, Flex, Paper } from '@pillar-ui/core'
import React from 'react'

export const ChipsPlayGround = () => {
  return (
    <Paper as={Flex} wrap gap="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm" items="center">
      <Avatar title="Success!" color="danger" />
      <Avatar title="Success!" color="warning" />
      <Avatar title="Success!" color="success" />
      <Avatar title="Success!" color="primary" />
      <Avatar title="Success!" color="surface" />
      <Avatar title="Success!" color="secondary" />
    </Paper>
  )
}

export const BadgeSizes = () => {
  return (
    <Paper as={Flex} items="center" gap="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <Chips size="2xs">Hello</Chips>
      <Chips size="xs">Hello</Chips>
      <Chips size="sm">Hello</Chips>
      <Chips size="md">Hello</Chips>
      <Chips size="lg">Hello</Chips>
      <Chips size="xl">Hello</Chips>
      <Chips size="2xl">Hello</Chips>
    </Paper>
  )
}

export const BadgeVariants = () => {
  return (
    <Paper as={Flex} gap="sm" items="center" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <Chips variant="solid">Hello</Chips>
      <Chips variant="outline">Hello</Chips>
      <Chips variant="soft">Hello</Chips>
    </Paper>
  )
}

export const BadgeNumeric = () => {
  return (
    <Paper
      as={Flex}
      gap="sm"
      items="center"
      borderColor="opacity-6"
      p="sm"
      flow="sm"
      background="surface-3"
      corner="sm"
    >
      <Chips corner="sharp">Hello</Chips>
      <Chips corner="xs">Hello</Chips>
      <Chips corner="sm">Hello</Chips>
      <Chips corner="md">Hello</Chips>
      <Chips corner="lg">Hello</Chips>
      <Chips corner="xl">Hello</Chips>
      <Chips corner="full">Hello</Chips>
      <Chips corner="circle">Hello</Chips>
    </Paper>
  )
}
export const BadgeIcon = () => {
  return (
    <Paper flow="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <Flex as={Flex} gap="sm" items="center">
        <Chips size="xs">Hello</Chips>
        <Chips size="xs" icon={<Close />}>
          Hello
        </Chips>
        <Chips size="xs" icon={<Close />} iconPosition="end">
          Hello
        </Chips>
      </Flex>

      <Flex as={Flex} gap="sm" items="center">
        <Chips>Hello</Chips>
        <Chips icon={<Close />}>Hello</Chips>
        <Chips icon={<Close />} iconPosition="end">
          Hello
        </Chips>
      </Flex>
      <Flex as={Flex} gap="sm" items="center">
        <Chips size="lg">Hello</Chips>
        <Chips size="lg" icon={<Close />}>
          Hello
        </Chips>
        <Chips size="lg" icon={<Close />} iconPosition="end">
          Hello
        </Chips>
      </Flex>
    </Paper>
  )
}

export const BadgeCorners = () => {
  return (
    <Paper as={Flex} gap="sm" items="center" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <Chips corner="sharp">Hello</Chips>
      <Chips corner="xs">Hello</Chips>
      <Chips corner="sm">Hello</Chips>
      <Chips corner="md">Hello</Chips>
      <Chips corner="lg">Hello</Chips>
      <Chips corner="xl">Hello</Chips>
      <Chips corner="full">Hello</Chips>
      <Chips corner="circle">Hello</Chips>
    </Paper>
  )
}

export const BadgeColors = () => {
  return (
    <Paper as={Flex} items="center" borderColor="opacity-6" p="sm" gap="sm" background="surface-3" corner="sm">
      <Chips color="danger">Hello</Chips>
      <Chips color="success">Hello</Chips>
      <Chips color="warning">Hello</Chips>
      <Chips color="primary">Hello</Chips>
      <Chips color="secondary">Hello</Chips>
      <Chips color="surface">Hello</Chips>
    </Paper>
  )
}

ChipsPlayGround.Colors = BadgeColors
ChipsPlayGround.Sizes = BadgeSizes
ChipsPlayGround.Variants = BadgeVariants
ChipsPlayGround.Corners = BadgeCorners
ChipsPlayGround.Numeric = BadgeNumeric
ChipsPlayGround.Icon = BadgeIcon
