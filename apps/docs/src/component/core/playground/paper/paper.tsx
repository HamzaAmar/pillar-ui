import { Avatar, Paper, Flex } from '@pillar-ui/core'
import React from 'react'

export const PaperPlayGround = () => {
  return (
    <Paper className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <Avatar title="Success!" color="danger" />
      <Avatar title="Success!" color="warning" />
      <Avatar title="Success!" color="success" />
      <Avatar title="Success!" color="primary" />
      <Avatar title="Success!" color="surface" />
      <Avatar title="Success!" color="secondary" />
    </Paper>
  )
}

export const PaperBackground = () => {
  return (
    <Paper
      as={Flex}
      wrap
      gap="sm"
      className="playground"
      borderColor="opacity-6"
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Paper borderColor="opacity-8" width="60px" height="60px" />
      <Paper borderColor="opacity-8" width="60px" height="60px" background="danger" />
      <Paper borderColor="opacity-8" width="60px" height="60px" background="danger-5" />
      <Paper borderColor="opacity-8" width="60px" height="60px" background="danger-10" />
      <Paper borderColor="opacity-8" width="60px" height="60px" background="success-5" />
      <Paper borderColor="opacity-8" width="60px" height="60px" background="success-8" />
      <Paper borderColor="opacity-8" width="60px" height="60px" background="success-11" />
      <Paper borderColor="opacity-8" width="60px" height="60px" background="primary-12" />
      <Paper borderColor="opacity-8" width="60px" height="60px" background="primary-10" />
      <Paper borderColor="opacity-8" width="60px" height="60px" background="primary-8" />
      <Paper borderColor="opacity-8" width="60px" height="60px" background="surface-1" />
      <Paper borderColor="opacity-8" width="60px" height="60px" background="surface-4" />
      <Paper borderColor="opacity-8" width="60px" height="60px" background="surface-8" />
      <Paper borderColor="opacity-8" width="60px" height="60px" background="warning-4" />
      <Paper borderColor="opacity-8" width="60px" height="60px" background="warning-8" />
      <Paper borderColor="opacity-8" width="60px" height="60px" background="warning-12" />
      <Paper borderColor="opacity-8" width="60px" height="60px" background="secondary-3" />
      <Paper borderColor="opacity-8" width="60px" height="60px" background="secondary-8" />
      <Paper borderColor="opacity-8" width="60px" height="60px" background="secondary-12" />
      <Paper borderColor="opacity-8" width="60px" height="60px" background="opacity-4" />
      <Paper borderColor="opacity-8" width="60px" height="60px" background="opacity-7" />
      <Paper borderColor="opacity-8" width="60px" height="60px" background="opacity-11" />
    </Paper>
  )
}

export const PaperColors = () => {
  return (
    <Paper
      as={Flex}
      gap="sm"
      direction="column"
      className="playground"
      borderColor="opacity-6"
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Paper height="60px">Hello</Paper>
      <Paper height="60px" color="danger">
        Hello
      </Paper>
      <Paper height="60px" color="danger-5">
        Hello
      </Paper>
      <Paper height="60px" color="danger-10">
        Hello
      </Paper>
      <Paper height="60px" color="success-5">
        Hello
      </Paper>
      <Paper height="60px" color="success-8">
        Hello
      </Paper>
      <Paper height="60px" color="success-11">
        Hello
      </Paper>
      <Paper height="60px" color="primary-12">
        Hello
      </Paper>
      <Paper height="60px" color="primary-10">
        Hello
      </Paper>
      <Paper height="60px" color="primary-8">
        Hello
      </Paper>
      <Paper height="60px" color="surface-1">
        Hello
      </Paper>
      <Paper height="60px" color="surface-4">
        Hello
      </Paper>
      <Paper height="60px" color="surface-8">
        Hello
      </Paper>
      <Paper height="60px" color="warning-4">
        Hello
      </Paper>
      <Paper height="60px" color="warning-8">
        Hello
      </Paper>
      <Paper height="60px" color="warning-12">
        Hello
      </Paper>
      <Paper height="60px" color="secondary-3">
        Hello
      </Paper>
      <Paper height="60px" color="secondary-8">
        Hello
      </Paper>
      <Paper height="60px" color="secondary-12">
        Hello
      </Paper>
      <Paper height="60px" color="opacity-4">
        Hello
      </Paper>
      <Paper height="60px" color="opacity-7">
        Hello
      </Paper>
      <Paper height="60px" color="opacity-11">
        Hello
      </Paper>
    </Paper>
  )
}

export const PaperSize = () => {
  return (
    <Paper
      as={Flex}
      gap="sm"
      direction="column"
      className="playground"
      borderColor="opacity-6"
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Paper borderColor="opacity-8" width="50px" height="50px">
        Hello
      </Paper>
      <Paper borderColor="opacity-8" width="150px" height="150px">
        Hello
      </Paper>
      <Paper borderColor="opacity-8" width="200px" height="400px">
        Hello
      </Paper>
      <Paper borderColor="opacity-8" width="400px" height="250px">
        Hello
      </Paper>
      <Paper borderColor="opacity-8" width="10rem" height="15rem">
        Hello
      </Paper>
      <Paper borderColor="opacity-8" width="100%" height="30px">
        Hello
      </Paper>
    </Paper>
  )
}

export const PaperPadding = () => {
  return (
    <Paper
      as={Flex}
      gap="sm"
      items="center"
      className="playground"
      borderColor="opacity-6"
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Paper width="fit-content" borderColor="opacity-8" p="sm">
        Hello
      </Paper>
      <Paper width="fit-content" borderColor="opacity-8" p="sm" pt="md">
        Hello
      </Paper>
      <Paper width="fit-content" borderColor="opacity-8" ptb="sm" plr="lg">
        Hello
      </Paper>
      <Paper width="fit-content" borderColor="opacity-8" pt="sm" pb="md">
        Hello
      </Paper>
    </Paper>
  )
}

export const PaperMargin = () => {
  return (
    <Paper className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <Paper borderColor="opacity-8" m="sm">
        Hello
      </Paper>
      <Paper borderColor="opacity-8" m="md">
        Hello
      </Paper>
      <Paper borderColor="opacity-8" m="lg">
        Hello
      </Paper>
      <Paper borderColor="opacity-8" m="xl">
        Hello
      </Paper>
      <Paper borderColor="opacity-8" m="sm" mtb="lg">
        Hello
      </Paper>
      <Paper borderColor="opacity-8" mtb="sm" mlr="lg">
        Hello
      </Paper>
      <Paper borderColor="opacity-8" mt="sm" mb="md">
        Hello
      </Paper>
    </Paper>
  )
}

export const PaperCorners = () => {
  return (
    <Paper
      as={Flex}
      gap="sm"
      direction="column"
      className="playground"
      borderColor="opacity-6"
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Paper borderColor="opacity-8" p="sm" corner="sharp">
        Hello
      </Paper>
      <Paper borderColor="opacity-8" p="sm" corner="xs">
        Hello
      </Paper>
      <Paper borderColor="opacity-8" p="sm" corner="sm">
        Hello
      </Paper>
      <Paper borderColor="opacity-8" p="sm" corner="md">
        Hello
      </Paper>
      <Paper borderColor="opacity-8" p="sm" corner="lg">
        Hello
      </Paper>
      <Paper borderColor="opacity-8" p="sm" corner="xl">
        Hello
      </Paper>
      <Paper borderColor="opacity-8" p="sm" corner="full">
        Hello
      </Paper>
    </Paper>
  )
}

export const PaperFlow = () => {
  return (
    <Paper
      as={Flex}
      justify="between"
      wrap
      className="playground"
      borderColor="opacity-6"
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Paper flow="xs">
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
      </Paper>
      <Paper flow="sm">
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
      </Paper>
      <Paper flow="md">
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
      </Paper>
      <Paper flow="lg">
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
      </Paper>
      <Paper flow="xl">
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
      </Paper>
    </Paper>
  )
}

export const PaperShadow = () => {
  return (
    <Paper
      as={Flex}
      gap="sm"
      direction="column"
      className="playground"
      borderColor="opacity-6"
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Paper p="sm" shadow="xs">
        Hello
      </Paper>
      <Paper p="sm" shadow="sm">
        Hello
      </Paper>
      <Paper p="sm" shadow="md">
        Hello
      </Paper>
      <Paper p="sm" shadow="lg">
        Hello
      </Paper>
      <Paper p="sm" shadow="xl">
        Hello
      </Paper>
    </Paper>
  )
}

PaperPlayGround.Sizes = PaperSize
PaperPlayGround.Background = PaperBackground
PaperPlayGround.Colors = PaperColors
PaperPlayGround.Corners = PaperCorners
PaperPlayGround.Shadow = PaperShadow
PaperPlayGround.Padding = PaperPadding
PaperPlayGround.Margin = PaperMargin
PaperPlayGround.Flow = PaperFlow
