import { Separator, Paper } from '~/component/core/pillar'
import React from 'react'

export const SeparatorPlayGround = () => {
  return (
    <Paper className="playground" flow="sm" border p="sm" background="bg-3" corner="sm">
      <Separator color="danger" />
      <Separator color="warning" />
      <Separator color="success" />
      <Separator color="primary" />
      <Separator color="bg" />
      <Separator color="secondary" />
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
      <Separator color="success" />
      <Separator color="danger" />
      <Separator color="warning" />
      <Separator color="primary" />
      <Separator color="secondary" />
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
