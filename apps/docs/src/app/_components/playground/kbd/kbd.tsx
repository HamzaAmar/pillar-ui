import { Avatar, Kbd, Flex, Paper } from '~/component/core/pillar'
import React from 'react'

export const KbdPlayGround = () => {
  return (
    <Paper className="playground" as={Flex} wrap gap="sm" items="center" border p="sm" background="bg-3" corner="sm">
      <Avatar title="Success!" color="dan" />
      <Avatar title="Success!" color="war" />
      <Avatar title="Success!" color="suc" />
      <Avatar title="Success!" color="pri" />
      <Avatar title="Success!" color="bg" />
      <Avatar title="Success!" color="sec" />
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
      <Kbd title="Esc" color="dan" />
      <Kbd title="Esc" color="suc" />
      <Kbd title="Esc" color="war" />
      <Kbd title="Esc" color="pri" />
      <Kbd title="Esc" color="bg" />
      <Kbd title="Esc" color="sec" />
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
          <Kbd title="Esc" variant={variant} color="dan" />
          <Kbd title="Esc" variant={variant} color="suc" />
          <Kbd title="Esc" variant={variant} color="war" />
          <Kbd title="Esc" variant={variant} color="pri" />
          <Kbd title="Esc" variant={variant} color="bg" />
          <Kbd title="Esc" variant={variant} color="sec" />
        </Flex>
      ))}
    </Paper>
  )
}
