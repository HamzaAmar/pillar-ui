import { Alien, Apple, Check, ChevronDown, LetterSpacing, Plane, Plus } from '@pillar/icons'
import { Avatar, Kbd, Flex, Paper } from '@pillar/core'
import React from 'react'

export const KbdPlayGround = () => {
  return (
    <Paper
      className="playground"
      as={Flex}
      wrap
      gap="sm"
      items="center"
      borderColor="opacity-6"
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

export const KbdSizes = () => {
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

export const KbdVariants = () => {
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
      <Kbd variant="dot" color="danger" />
      <Kbd variant="numeric" number={15} max={15} color="danger" />
      <Kbd variant="icon" icon={<Check />} color="danger" />
    </Paper>
  )
}

export const KbdDefaultPressed = () => {
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
      <Kbd label="Hello" defaultPressed color="danger" />
      <Kbd label="Hello" defaultPressed color="warning" />
      <Kbd label="Hello" defaultPressed color="success" />
      <Kbd label="Hello" defaultPressed color="primary" />
      <Kbd label="Hello" defaultPressed color="secondary" />
      <Kbd label="Hello" defaultPressed color="surface" />
    </Paper>
  )
}
export const KbdTitle = () => {
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
      <Kbd title="Esc" />
    </Paper>
  )
}

export const KbdCorners = () => {
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
      <Kbd title="Esc" />
      <Kbd title="Esc" color="danger" />
      <Kbd title="Esc" color="success" />
      <Kbd title="Esc" color="warning" />
      <Kbd title="Esc" color="primary" />
      <Kbd title="Esc" color="surfacece" />
      <Kbd title="Esc" color="secondary" />
    </Paper>
  )
}

KbdPlayGround.Colors = KbdColors
KbdPlayGround.Sizes = KbdSizes
KbdPlayGround.Corners = KbdCorners
KbdPlayGround.Title = KbdTitle