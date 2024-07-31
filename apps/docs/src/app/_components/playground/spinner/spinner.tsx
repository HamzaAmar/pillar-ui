import { Spinner, Flex, Paper } from '~/component/core/pillar'
import React from 'react'

export const SpinnerPlayGround = () => {
  return (
    <Paper as={Flex} wrap gap="sm" border p="sm" background="bg-3" corner="sm" items="center">
      <Spinner color="danger" />
      <Spinner color="warning" />
      <Spinner color="success" />
      <Spinner color="primary" />
      <Spinner color="bg" />
      <Spinner color="secondary" />
    </Paper>
  )
}

export const SpinnerSizes = () => {
  return (
    <Paper as={Flex} gap="sm" items="center" border p="sm" background="bg-3" corner="sm">
      <Spinner size="3xs" />
      <Spinner size="2xs" />
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner />
      <Spinner size="lg" />
      <Spinner size="xl" />
      <Spinner size="2xl" />
      <Spinner size="3xl" />
    </Paper>
  )
}

export const SpinnerThickness = () => {
  return (
    <Paper as={Flex} gap="sm" items="center" border p="sm" background="bg-3" corner="sm">
      <Spinner thickness="1px" />
      <Spinner thickness="2px" />
      <Spinner thickness="3px" />
      <Spinner thickness="4px" />
      <Spinner thickness="5px" />
      <Spinner thickness="6px" />
      <Spinner thickness="200px" />
    </Paper>
  )
}

export const SpinnerInvert = () => {
  return (
    <Paper border p="sm" flow="sm" background="bg-3" corner="sm">
      <Flex gap="sm" items="center">
        <Spinner color="success" />
        <Spinner color="danger" />
        <Spinner color="warning" />
        <Spinner color="primary" />
        <Spinner color="secondary" />
        <Spinner color="bg" />
      </Flex>
      <Flex gap="sm" items="center">
        <Spinner invert color="success" />
        <Spinner invert color="danger" />
        <Spinner invert color="warning" />
        <Spinner invert color="primary" />
        <Spinner invert color="secondary" />
        <Spinner invert color="bg" />
      </Flex>
    </Paper>
  )
}

export const SpinnerColors = () => {
  return (
    <Paper as={Flex} gap="sm" wrap items="center" border p="sm" background="bg-3" corner="sm">
      <Spinner color="success" />
      <Spinner color="danger" />
      <Spinner color="warning" />
      <Spinner color="primary" />
      <Spinner color="secondary" />
      <Spinner color="bg" />
    </Paper>
  )
}
