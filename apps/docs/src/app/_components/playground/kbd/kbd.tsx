import { Avatar, Kbd, Flex, Paper } from '~/component/core/pillar'
import React from 'react'

export const KbdPlayGround = () => {
  return (
    <Paper className="playground" as={Flex} wrap gap="sm" items="center" border p="sm" background="bg-3" corner="sm">
      <Avatar title="Success!" color="danger" />
      <Avatar title="Success!" color="warning" />
      <Avatar title="Success!" color="success" />
      <Avatar title="Success!" color="primary" />
      <Avatar title="Success!" color="bg" />
      <Avatar title="Success!" color="secondary" />
    </Paper>
  )
}

export const KbdSizes = () => {
  return (
    <Paper className="playground" as={Flex} items="center" gap="sm" border p="sm" background="bg-3" corner="sm">
      <Kbd title="Esc" />
      <Kbd title="Esc" size="2xs" />
      <Kbd title="Esc" size="xs" />
      <Kbd title="Esc" size="sm" />
      <Kbd title="Esc" size="md" />
      <Kbd title="Esc" size="lg" />
      <Kbd title="Esc" size="xl" />
      <Kbd title="Esc" size="2xl" />
    </Paper>
  )
}

export const KbdTitle = () => {
  return (
    <Paper className="playground" as={Flex} gap="sm" items="center" border p="sm" background="bg-3" corner="sm">
      <Kbd title="Esc" />
    </Paper>
  )
}

export const KbdCorners = () => {
  return (
    <Paper className="playground" as={Flex} gap="sm" items="center" border p="sm" background="bg-3" corner="sm">
      <Kbd title="Esc" corner="sharp" />
      <Kbd title="Esc" />
      <Kbd title="Esc" corner="xs" />
      <Kbd title="Esc" corner="md" />
      <Kbd title="Esc" corner="xl" />
      <Kbd title="Esc" corner="full" />
      <Kbd title="Esc" corner="circle" />
    </Paper>
  )
}

export const KbdColors = () => {
  return (
    <Paper className="playground" as={Flex} gap="sm" items="center" border p="sm" background="bg-3" corner="sm">
      <Kbd title="Esc" />
      <Kbd title="Esc" color="danger" />
      <Kbd title="Esc" color="success" />
      <Kbd title="Esc" color="warning" />
      <Kbd title="Esc" color="primary" />
      <Kbd title="Esc" color="bg" />
      <Kbd title="Esc" color="secondary" />
    </Paper>
  )
}

const Variants = ['solid', 'mixed', 'soft', 'outline'] as const

export const KbdVariants = () => {
  return (
    <Paper className="playground" as={Flex} gap="sm" items="center" border p="sm" background="bg-3" corner="sm">
      {Variants.map((variant) => (
        <Flex key={variant} gap="sm">
          <Kbd title="Esc" variant={variant} />
          <Kbd title="Esc" variant={variant} color="danger" />
          <Kbd title="Esc" variant={variant} color="success" />
          <Kbd title="Esc" variant={variant} color="warning" />
          <Kbd title="Esc" variant={variant} color="primary" />
          <Kbd title="Esc" variant={variant} color="bg" />
          <Kbd title="Esc" variant={variant} color="secondary" />
        </Flex>
      ))}
    </Paper>
  )
}
