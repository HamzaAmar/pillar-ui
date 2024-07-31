import { Close } from '@pillar-ui/icons'
import { Avatar, Chips, Flex, Paper } from '~/component/core/pillar'
import React from 'react'

export const ChipsPlayGround = () => {
  return (
    <Paper as={Flex} wrap gap="sm" border p="sm" background="bg-3" corner="sm" items="center">
      <Avatar title="Success!" color="danger" />
      <Avatar title="Success!" color="warning" />
      <Avatar title="Success!" color="success" />
      <Avatar title="Success!" color="primary" />
      <Avatar title="Success!" color="bg" />
      <Avatar title="Success!" color="secondary" />
    </Paper>
  )
}

export const ChipsSizes = () => {
  return (
    <Paper as={Flex} items="center" gap="sm" border p="sm" background="bg-3" corner="sm">
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
const VARIANTS = ['solid', 'mixed', 'soft', 'outline'] as const

export const ChipsVariants = () => {
  return (
    <Paper as={Flex} direction="column" gap="xl" p="sm" background="bg-2" corner="sm">
      {VARIANTS.map((variant) => (
        <Flex key={variant} gap="xs">
          <Chips color="danger" variant={variant}>
            Hello
          </Chips>
          <Chips color="warning" variant={variant}>
            Hello
          </Chips>
          <Chips color="success" variant={variant}>
            Hello
          </Chips>

          <Chips color="primary" variant={variant}>
            Hello
          </Chips>
          <Chips color="secondary" variant={variant}>
            Hello
          </Chips>
          <Chips color="bg" variant={variant}>
            Hello
          </Chips>
        </Flex>
      ))}
    </Paper>
  )
}

export const ChipsNumeric = () => {
  return (
    <Paper as={Flex} gap="sm" items="center" border p="sm" flow="sm" background="bg-3" corner="sm">
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
export const ChipsIcon = () => {
  return (
    <Paper flow="sm" border p="sm" background="bg-3" corner="sm">
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

export const ChipsCorners = () => {
  return (
    <Paper as={Flex} gap="sm" items="center" border p="sm" background="bg-3" corner="sm">
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

export const ChipsColors = () => {
  return (
    <Paper as={Flex} items="center" border p="sm" gap="sm" background="bg-3" corner="sm">
      <Chips color="danger">Hello</Chips>
      <Chips color="success">Hello</Chips>
      <Chips color="warning">Hello</Chips>
      <Chips color="primary">Hello</Chips>
      <Chips color="secondary">Hello</Chips>
      <Chips color="bg">Hello</Chips>
    </Paper>
  )
}
