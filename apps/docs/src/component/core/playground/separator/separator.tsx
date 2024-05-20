import { Alien, Apple, Check, ChevronDown, LetterSpacing, Plane, Plus } from '@pillar-ui/icons'
import { Separator, Flex, Paper } from '@pillar-ui/core'
import React from 'react'

export const SeparatorPlayGround = () => {
  return (
    <Paper className="playground" flow="sm" border p="sm" background="surface-3" corner="sm">
      <Separator color="danger" />
      <Separator color="warning" />
      <Separator color="success" />
      <Separator color="primary" />
      <Separator color="surface" />
      <Separator color="secondary" />
    </Paper>
  )
}

export const SeparatorTitle = () => {
  return (
    <Paper className="playground" flow="sm" border p="sm" background="surface-3" corner="sm">
      <Separator title="Login Here" />
      <Separator title="Login Here" position="center" />
      <Separator title="Login Here" position="end" />
    </Paper>
  )
}

export const SeparatorThickness = () => {
  return (
    <Paper className="playground" border p="sm" flow="sm" background="surface-3" corner="sm">
      <Separator thickness="3xs" />
      <Separator thickness="2xs" />
      <Separator thickness="xs" />
      <Separator thickness="sm" />
      <Separator thickness="md" />
      <Separator thickness="lg" />
      <Separator thickness="xl" />
      <Separator thickness="2xl" />
      <Separator thickness="3xl" />
    </Paper>
  )
}

export const SeparatorColors = () => {
  return (
    <Paper className="playground" border p="sm" flow="sm" background="surface-3" corner="sm">
      <Separator color="success" />
      <Separator color="danger" />
      <Separator color="warning" />
      <Separator color="primary" />
      <Separator color="secondary" />
      <Separator color="surface" />
    </Paper>
  )
}

export const SeparatorDirection = () => {
  return (
    <Paper className="playground" border p="sm" flow="sm" background="surface-3" corner="sm">
      <Separator direction="horizontal" />
      <Separator direction="vertical" />
    </Paper>
  )
}

SeparatorPlayGround.Colors = SeparatorColors
SeparatorPlayGround.Thickness = SeparatorThickness
SeparatorPlayGround.Title = SeparatorTitle
SeparatorPlayGround.Direction = SeparatorDirection
