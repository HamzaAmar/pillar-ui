import { Avatar, Paper, Flex } from '@pillar-ui/core'
import React from 'react'

export const PaperPlayGround = () => {
  return (
    <Paper className="playground" border p="sm" background="surface-3" corner="sm">
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
    <Paper as={Flex} wrap gap="sm" className="playground" border p="sm" background="surface-3" corner="sm">
      <Paper border width="30-char" ratio="square" />
      <Paper border width="30-char" ratio="square" background="danger" />
      <Paper border width="30-char" ratio="square" background="danger-5" />
      <Paper border width="30-char" ratio="square" background="danger-10" />
      <Paper border width="30-char" ratio="square" background="success-5" />
      <Paper border width="30-char" ratio="square" background="success-8" />
      <Paper border width="30-char" ratio="square" background="success-11" />
      <Paper border width="30-char" ratio="square" background="primary-12" />
      <Paper border width="30-char" ratio="square" background="primary-10" />
      <Paper border width="30-char" ratio="square" background="primary-8" />
      <Paper border width="30-char" ratio="square" background="surface-1" />
      <Paper border width="30-char" ratio="square" background="surface-4" />
      <Paper border width="30-char" ratio="square" background="surface-8" />
      <Paper border width="30-char" ratio="square" background="warning-4" />
      <Paper border width="30-char" ratio="square" background="warning-8" />
      <Paper border width="30-char" ratio="square" background="warning-12" />
      <Paper border width="30-char" ratio="square" background="secondary-3" />
      <Paper border width="30-char" ratio="square" background="secondary-8" />
      <Paper border width="30-char" ratio="square" background="secondary-12" />
      <Paper border width="30-char" ratio="square" background="opacity-4" />
      <Paper border width="30-char" ratio="square" background="opacity-7" />
      <Paper border width="30-char" ratio="square" background="opacity-11" />
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
      border
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Paper background="surface-5" p="xs">
        Hello
      </Paper>
      <Paper background="surface-5" p="xs" color="danger">
        Hello
      </Paper>
      <Paper background="surface-5" p="xs" color="danger-5">
        Hello
      </Paper>
      <Paper background="surface-5" p="xs" color="danger-10">
        Hello
      </Paper>
      <Paper background="surface-5" p="xs" color="success-5">
        Hello
      </Paper>
      <Paper background="surface-5" p="xs" color="success-8">
        Hello
      </Paper>
      <Paper background="surface-5" p="xs" color="success-11">
        Hello
      </Paper>
      <Paper background="surface-5" p="xs" color="primary-12">
        Hello
      </Paper>
      <Paper background="surface-5" p="xs" color="primary-10">
        Hello
      </Paper>
      <Paper background="surface-5" p="xs" color="primary-8">
        Hello
      </Paper>
      <Paper background="surface-5" p="xs" color="surface-1">
        Hello
      </Paper>
      <Paper background="surface-5" p="xs" color="surface-4">
        Hello
      </Paper>
      <Paper background="surface-5" p="xs" color="surface-8">
        Hello
      </Paper>
      <Paper background="surface-5" p="xs" color="warning-4">
        Hello
      </Paper>
      <Paper background="surface-5" p="xs" color="warning-8">
        Hello
      </Paper>
      <Paper background="surface-5" p="xs" color="warning-12">
        Hello
      </Paper>
      <Paper background="surface-5" p="xs" color="secondary-3">
        Hello
      </Paper>
      <Paper background="surface-5" p="xs" color="secondary-8">
        Hello
      </Paper>
      <Paper background="surface-5" p="xs" color="secondary-12">
        Hello
      </Paper>
      <Paper background="surface-5" p="xs" color="opacity-4">
        Hello
      </Paper>
      <Paper background="surface-5" p="xs" color="opacity-7">
        Hello
      </Paper>
      <Paper background="surface-5" p="xs" height="60px" color="opacity-11">
        Hello
      </Paper>
    </Paper>
  )
}

export const PaperPadding = () => {
  return (
    <Paper as={Flex} gap="sm" items="center" className="playground" border p="sm" background="surface-3" corner="sm">
      <Paper width="fit-content" background="surface-5" p="2xl">
        2xl Padding
      </Paper>
      <Paper width="fit-content" background="surface-5" p="xl">
        xl Padding
      </Paper>
      <Paper width="fit-content" background="surface-5" p="lg">
        lg Padding
      </Paper>

      <Paper width="fit-content" background="surface-5" p="md">
        md Padding
      </Paper>
      <Paper width="fit-content" background="surface-5" p="sm">
        sm Padding
      </Paper>

      <Paper width="fit-content" background="surface-5" p="xs">
        xs Padding
      </Paper>

      <Paper width="fit-content" background="surface-5" p="2xs">
        2xs Padding
      </Paper>
    </Paper>
  )
}

export const PaperMargin = () => {
  return (
    <Paper className="playground" p="sm" background="surface-3" corner="sm">
      <Paper
        style={{ display: 'flow-root' }}
        className="u_center"
        width="30-char"
        ratio="landscape"
        background="surface-5"
        m="2xl"
      >
        2xl Padding
      </Paper>
      <Paper
        style={{ display: 'flow-root' }}
        className="u_center"
        width="30-char"
        ratio="landscape"
        background="surface-5"
        m="xl"
      >
        xl Padding
      </Paper>
      <Paper
        style={{ display: 'flow-root' }}
        className="u_center"
        width="30-char"
        ratio="landscape"
        background="surface-5"
        m="lg"
      >
        lg Padding
      </Paper>

      <Paper
        style={{ display: 'flow-root' }}
        className="u_center"
        width="30-char"
        ratio="landscape"
        background="surface-5"
        m="md"
      >
        md Padding
      </Paper>
      <Paper
        style={{ display: 'flow-root' }}
        className="u_center"
        width="30-char"
        ratio="landscape"
        background="surface-5"
        m="sm"
      >
        sm Padding
      </Paper>

      <Paper
        style={{ display: 'flow-root' }}
        className="u_center"
        width="30-char"
        ratio="landscape"
        background="surface-5"
        m="xs"
      >
        xs Padding
      </Paper>

      <Paper
        style={{ display: 'flow-root' }}
        className="u_center"
        width="30-char"
        ratio="landscape"
        background="surface-5"
        m="2xs"
      >
        2xs Padding
      </Paper>
    </Paper>
  )
}

export const PaperCorners = () => {
  return (
    <Paper
      as={Flex}
      wrap
      gap="sm"
      justify="center"
      className="playground"
      border
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Paper className="u_center" p="xs" background="surface-5" width="25-char" ratio="square" corner="sharp">
        sharp
      </Paper>
      <Paper className="u_center" p="xs" background="surface-5" width="25-char" ratio="square" corner="xs">
        xs
      </Paper>
      <Paper className="u_center" p="xs" background="surface-5" width="25-char" ratio="square" corner="md">
        md
      </Paper>
      <Paper className="u_center" p="xs" background="surface-5" width="25-char" ratio="square" corner="lg">
        lg
      </Paper>
      <Paper className="u_center" p="xs" background="surface-5" width="25-char" ratio="square" corner="xl">
        xl
      </Paper>
      <Paper className="u_center" p="xs" background="surface-5" width="25-char" ratio="square" corner="circle">
        circle
      </Paper>
      <Paper className="u_center" p="xs" background="surface-5" width="25-char" ratio="square" corner="full">
        full
      </Paper>

      <Paper className="u_center" p="xs" background="surface-5" width="25-char" ratio="square" corner="blob-1">
        B Blob 1
      </Paper>
      <Paper className="u_center" p="xs" background="surface-5" width="25-char" ratio="square" corner="blob-2">
        Blob 2
      </Paper>
      <Paper className="u_center" p="xs" background="surface-5" width="25-char" ratio="square" corner="blob-3">
        Blob 3
      </Paper>
      <Paper className="u_center" p="xs" background="surface-5" width="25-char" ratio="square" corner="blob-4">
        Blob 4
      </Paper>
      <Paper className="u_center" p="xs" background="surface-5" width="25-char" ratio="square" corner="blob-5">
        Blob 5
      </Paper>

      <Paper className="u_center" p="xs" background="surface-5" width="25-char" ratio="square" corner="hand-1">
        Hand 1
      </Paper>
      <Paper className="u_center" p="xs" background="surface-5" width="25-char" ratio="square" corner="hand-2">
        Hand 2
      </Paper>
      <Paper className="u_center" p="xs" background="surface-5" width="25-char" ratio="square" corner="hand-3">
        Hand 3
      </Paper>
      <Paper className="u_center" p="xs" background="surface-5" width="25-char" ratio="square" corner="hand-4">
        Hand 4
      </Paper>
      <Paper className="u_center" p="xs" background="surface-5" width="25-char" ratio="square" corner="hand-5">
        Hand 5
      </Paper>
      <Paper className="u_center" p="xs" background="surface-5" width="25-char" ratio="square" corner="hand-6">
        Hand 6
      </Paper>
    </Paper>
  )
}

export const PaperFlow = () => {
  return (
    <Paper as={Flex} justify="between" wrap className="playground" border p="sm" background="surface-3" corner="sm">
      <Paper background="surface-5" flow="xs">
        <div>Flow xs</div>
        <div>Flow xs</div>
        <div>Flow xs</div>
      </Paper>
      <Paper background="surface-5" flow="sm">
        <div>Flow sm</div>
        <div>Flow sm</div>
        <div>Flow sm</div>
      </Paper>
      <Paper background="surface-5" flow="md">
        <div>Flow md</div>
        <div>Flow md</div>
        <div>Flow md</div>
      </Paper>
      <Paper background="surface-5" flow="lg">
        <div>Flow lg</div>
        <div>Flow lg</div>
        <div>Flow lg</div>
      </Paper>
      <Paper background="surface-5" flow="xl">
        <div>Flow xl</div>
        <div>Flow xl</div>
        <div>Flow xl</div>
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
      border
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Paper p="sm" background="surface-5" shadow="xs">
        Hello
      </Paper>
      <Paper p="sm" background="surface-5" shadow="sm">
        Hello
      </Paper>
      <Paper p="sm" background="surface-5" shadow="md">
        Hello
      </Paper>
      <Paper p="sm" background="surface-5" shadow="lg">
        Hello
      </Paper>
      <Paper p="sm" background="surface-5" shadow="xl">
        Hello
      </Paper>
    </Paper>
  )
}

export function PaperWidth() {
  return (
    <Paper
      as={Flex}
      gap="sm"
      direction="column"
      className="playground"
      border
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Paper background="surface-5" width="30-char">
        This Paper component will be 30 characters wide This Paper component will be 30 characters wide This Paper
        component will be 30 characters wide.
      </Paper>
      <Paper background="surface-5" width="60-char">
        This Paper component will be 60 characters wide This Paper component will be 60 characters wide This Paper
        component will be 60 characters wide.
      </Paper>
      <Paper background="surface-5" width="90-char">
        This Paper component will be 90 characters wide This Paper component will be 90 characters wide This Paper
        component will be 90 characters wide.
      </Paper>
      <Paper background="surface-5" width="half">
        This Paper component will take up half of its parent container This Paper component will take up half of its
        parent container This Paper component will take up half of its parent container.
      </Paper>
    </Paper>
  )
}

PaperPlayGround.Background = PaperBackground
PaperPlayGround.Colors = PaperColors
PaperPlayGround.Corners = PaperCorners
PaperPlayGround.Shadow = PaperShadow
PaperPlayGround.Padding = PaperPadding
PaperPlayGround.Margin = PaperMargin
PaperPlayGround.Flow = PaperFlow
PaperPlayGround.Width = PaperWidth
