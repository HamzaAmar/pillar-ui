import { Separator, Paper } from '@pillar-ui/core'
import React from 'react'

export const SeparatorPlayGround = () => {
  return (
    <Paper className="playground" flow="sm" border p="sm" background="bg-3" corner="sm">
      <Separator color="dan" />
      <Separator color="war" />
      <Separator color="suc" />
      <Separator color="pri" />
      <Separator color="bg" />
      <Separator color="sec" />
    </Paper>
  )
}

export const SeparatorTitle = () => {
  return (
    <Paper className="playground" flow="sm" border p="sm" background="bg-3" corner="sm">
      <Separator title="Login Here" />
      <Separator title="Login Here" position="center" />
      <Separator title="Login Here" position="end" />
    </Paper>
  )
}

export const SeparatorThickness = () => {
  return (
    <Paper className="playground" border p="sm" flow="sm" background="bg-3" corner="sm">
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
    <Paper className="playground" border p="sm" flow="sm" background="bg-3" corner="sm">
      <Separator color="suc" />
      <Separator color="dan" />
      <Separator color="war" />
      <Separator color="pri" />
      <Separator color="sec" />
      <Separator color="bg" />
    </Paper>
  )
}

export const SeparatorDirection = () => {
  return (
    <Paper className="playground" border p="sm" flow="sm" background="bg-3" corner="sm">
      <Separator direction="horizontal" />
      <Separator direction="vertical" />
    </Paper>
  )
}
