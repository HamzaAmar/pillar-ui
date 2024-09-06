import { Avatar, Paper, Flex } from '@pillar-ui/core'
import React from 'react'

export const PaperPlayGround = () => {
  return (
    <Paper className="playground" border p="sm" background="bg-3" corner="sm">
      <Avatar title="Success!" color="dan" />
      <Avatar title="Success!" color="war" />
      <Avatar title="Success!" color="suc" />
      <Avatar title="Success!" color="pri" />
      <Avatar title="Success!" color="bg" />
      <Avatar title="Success!" color="sec" />
    </Paper>
  )
}

export const PaperBackground = () => {
  return (
    <Paper as={Flex} wrap gap="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <Paper border width="30-char" ratio="1" />
      <Paper border width="30-char" ratio="1" background="dan" />
      <Paper border width="30-char" ratio="1" background="dan-5" />
      <Paper border width="30-char" ratio="1" background="dan-10" />
      <Paper border width="30-char" ratio="1" background="suc-5" />
      <Paper border width="30-char" ratio="1" background="suc-8" />
      <Paper border width="30-char" ratio="1" background="suc-11" />
      <Paper border width="30-char" ratio="1" background="pri-12" />
      <Paper border width="30-char" ratio="1" background="pri-10" />
      <Paper border width="30-char" ratio="1" background="pri-8" />
      <Paper border width="30-char" ratio="1" background="bg-1" />
      <Paper border width="30-char" ratio="1" background="bg-4" />
      <Paper border width="30-char" ratio="1" background="bg-8" />
      <Paper border width="30-char" ratio="1" background="war-4" />
      <Paper border width="30-char" ratio="1" background="war-8" />
      <Paper border width="30-char" ratio="1" background="war-12" />
      <Paper border width="30-char" ratio="1" background="sec-3" />
      <Paper border width="30-char" ratio="1" background="sec-8" />
      <Paper border width="30-char" ratio="1" background="sec-12" />
      <Paper border width="30-char" ratio="1" background="opa-4" />
      <Paper border width="30-char" ratio="1" background="opa-7" />
      <Paper border width="30-char" ratio="1" background="opa-11" />
    </Paper>
  )
}

export const PaperColors = () => {
  return (
    <Paper as={Flex} gap="sm" direction="column" className="playground" border p="sm" background="bg-3" corner="sm">
      <Paper background="bg-5" p="xs">
        Hello
      </Paper>
      <Paper background="bg-5" p="xs" color="dan">
        Hello
      </Paper>
      <Paper background="bg-5" p="xs" color="dan-5">
        Hello
      </Paper>
      <Paper background="bg-5" p="xs" color="dan-10">
        Hello
      </Paper>
      <Paper background="bg-5" p="xs" color="suc-5">
        Hello
      </Paper>
      <Paper background="bg-5" p="xs" color="suc-8">
        Hello
      </Paper>
      <Paper background="bg-5" p="xs" color="suc-11">
        Hello
      </Paper>
      <Paper background="bg-5" p="xs" color="pri-12">
        Hello
      </Paper>
      <Paper background="bg-5" p="xs" color="pri-10">
        Hello
      </Paper>
      <Paper background="bg-5" p="xs" color="pri-8">
        Hello
      </Paper>
      <Paper background="bg-5" p="xs" color="bg-1">
        Hello
      </Paper>
      <Paper background="bg-5" p="xs" color="bg-4">
        Hello
      </Paper>
      <Paper background="bg-5" p="xs" color="bg-8">
        Hello
      </Paper>
      <Paper background="bg-5" p="xs" color="war-4">
        Hello
      </Paper>
      <Paper background="bg-5" p="xs" color="war-8">
        Hello
      </Paper>
      <Paper background="bg-5" p="xs" color="war-12">
        Hello
      </Paper>
      <Paper background="bg-5" p="xs" color="sec-3">
        Hello
      </Paper>
      <Paper background="bg-5" p="xs" color="sec-8">
        Hello
      </Paper>
      <Paper background="bg-5" p="xs" color="sec-12">
        Hello
      </Paper>
      <Paper background="bg-5" p="xs" color="opa-4">
        Hello
      </Paper>
      <Paper background="bg-5" p="xs" color="opa-7">
        Hello
      </Paper>
      <Paper background="bg-5" p="xs" height="48px" color="opa-11">
        Hello
      </Paper>
    </Paper>
  )
}

export const PaperPadding = () => {
  return (
    <Paper as={Flex} gap="sm" items="center" className="playground" border p="sm" background="bg-3" corner="sm">
      <Paper width="fit" background="bg-5" p="2xl">
        2xl Padding
      </Paper>
      <Paper width="fit" background="bg-5" p="xl">
        xl Padding
      </Paper>
      <Paper width="fit" background="bg-5" p="lg">
        lg Padding
      </Paper>

      <Paper width="fit" background="bg-5" p="md">
        md Padding
      </Paper>
      <Paper width="fit" background="bg-5" p="sm">
        sm Padding
      </Paper>

      <Paper width="fit" background="bg-5" p="xs">
        xs Padding
      </Paper>

      <Paper width="fit" background="bg-5" p="2xs">
        2xs Padding
      </Paper>
    </Paper>
  )
}

export const PaperMargin = () => {
  return (
    <Paper className="playground" p="sm" background="bg-3" corner="sm">
      <Paper
        style={{ display: 'flow-root' }}
        className="u_center"
        width="30-char"
        ratio="16-9"
        background="bg-5"
        m="2xl"
      >
        2xl Padding
      </Paper>
      <Paper
        style={{ display: 'flow-root' }}
        className="u_center"
        width="30-char"
        ratio="16-9"
        background="bg-5"
        m="xl"
      >
        xl Padding
      </Paper>
      <Paper
        style={{ display: 'flow-root' }}
        className="u_center"
        width="30-char"
        ratio="16-9"
        background="bg-5"
        m="lg"
      >
        lg Padding
      </Paper>

      <Paper
        style={{ display: 'flow-root' }}
        className="u_center"
        width="30-char"
        ratio="16-9"
        background="bg-5"
        m="md"
      >
        md Padding
      </Paper>
      <Paper
        style={{ display: 'flow-root' }}
        className="u_center"
        width="30-char"
        ratio="16-9"
        background="bg-5"
        m="sm"
      >
        sm Padding
      </Paper>

      <Paper
        style={{ display: 'flow-root' }}
        className="u_center"
        width="30-char"
        ratio="16-9"
        background="bg-5"
        m="xs"
      >
        xs Padding
      </Paper>

      <Paper
        style={{ display: 'flow-root' }}
        className="u_center"
        width="30-char"
        ratio="16-9"
        background="bg-5"
        m="2xs"
      >
        2xs Padding
      </Paper>
    </Paper>
  )
}

export const PaperCorners = () => {
  return (
    <Paper as={Flex} wrap gap="sm" justify="center" className="playground" border p="sm" background="bg-3" corner="sm">
      <Paper className="u_center" p="xs" background="bg-5" width="25-char" ratio="1" corner="sharp">
        sharp
      </Paper>
      <Paper className="u_center" p="xs" background="bg-5" width="25-char" ratio="1" corner="xs">
        xs
      </Paper>
      <Paper className="u_center" p="xs" background="bg-5" width="25-char" ratio="1" corner="md">
        md
      </Paper>
      <Paper className="u_center" p="xs" background="bg-5" width="25-char" ratio="1" corner="lg">
        lg
      </Paper>
      <Paper className="u_center" p="xs" background="bg-5" width="25-char" ratio="1" corner="xl">
        xl
      </Paper>
      <Paper className="u_center" p="xs" background="bg-5" width="25-char" ratio="1" corner="circle">
        circle
      </Paper>
      <Paper className="u_center" p="xs" background="bg-5" width="25-char" ratio="1" corner="full">
        full
      </Paper>

      <Paper className="u_center" p="xs" background="bg-5" width="25-char" ratio="1" corner="b-1">
        B b 1
      </Paper>
      <Paper className="u_center" p="xs" background="bg-5" width="25-char" ratio="1" corner="b-2">
        b 2
      </Paper>
      <Paper className="u_center" p="xs" background="bg-5" width="25-char" ratio="1" corner="b-3">
        b 3
      </Paper>
      <Paper className="u_center" p="xs" background="bg-5" width="25-char" ratio="1" corner="b-4">
        b 4
      </Paper>
      <Paper className="u_center" p="xs" background="bg-5" width="25-char" ratio="1" corner="b-5">
        b 5
      </Paper>

      <Paper className="u_center" p="xs" background="bg-5" width="25-char" ratio="1" corner="h-1">
        Hand 1
      </Paper>
      <Paper className="u_center" p="xs" background="bg-5" width="25-char" ratio="1" corner="h-2">
        Hand 2
      </Paper>
      <Paper className="u_center" p="xs" background="bg-5" width="25-char" ratio="1" corner="h-3">
        Hand 3
      </Paper>
      <Paper className="u_center" p="xs" background="bg-5" width="25-char" ratio="1" corner="h-4">
        Hand 4
      </Paper>
      <Paper className="u_center" p="xs" background="bg-5" width="25-char" ratio="1" corner="h-5">
        Hand 5
      </Paper>
      <Paper className="u_center" p="xs" background="bg-5" width="25-char" ratio="1" corner="h-6">
        Hand 6
      </Paper>
    </Paper>
  )
}

export const PaperFlow = () => {
  return (
    <Paper as={Flex} justify="between" wrap className="playground" border p="sm" background="bg-3" corner="sm">
      <Paper background="bg-5" flow="xs">
        <div>Flow xs</div>
        <div>Flow xs</div>
        <div>Flow xs</div>
      </Paper>
      <Paper background="bg-5" flow="sm">
        <div>Flow sm</div>
        <div>Flow sm</div>
        <div>Flow sm</div>
      </Paper>
      <Paper background="bg-5" flow="md">
        <div>Flow md</div>
        <div>Flow md</div>
        <div>Flow md</div>
      </Paper>
      <Paper background="bg-5" flow="lg">
        <div>Flow lg</div>
        <div>Flow lg</div>
        <div>Flow lg</div>
      </Paper>
      <Paper background="bg-5" flow="xl">
        <div>Flow xl</div>
        <div>Flow xl</div>
        <div>Flow xl</div>
      </Paper>
    </Paper>
  )
}

export const PaperShadow = () => {
  return (
    <Paper as={Flex} gap="sm" direction="column" className="playground" border p="sm" background="bg-3" corner="sm">
      <Paper p="sm" background="bg-5" shadow="xs">
        Hello
      </Paper>
      <Paper p="sm" background="bg-5" shadow="sm">
        Hello
      </Paper>
      <Paper p="sm" background="bg-5" shadow="md">
        Hello
      </Paper>
      <Paper p="sm" background="bg-5" shadow="lg">
        Hello
      </Paper>
      <Paper p="sm" background="bg-5" shadow="xl">
        Hello
      </Paper>
    </Paper>
  )
}

export function PaperWidth() {
  return (
    <Paper as={Flex} gap="sm" direction="column" className="playground" border p="sm" background="bg-3" corner="sm">
      <Paper background="bg-5" width="30-char">
        This Paper component will be 30 characters wide This Paper component will be 30 characters wide This Paper
        component will be 30 characters wide.
      </Paper>
      <Paper background="bg-5" width="60-char">
        This Paper component will be 60 characters wide This Paper component will be 60 characters wide This Paper
        component will be 60 characters wide.
      </Paper>
      <Paper background="bg-5" width="90-char">
        This Paper component will be 90 characters wide This Paper component will be 90 characters wide This Paper
        component will be 90 characters wide.
      </Paper>
      <Paper background="bg-5" width="50">
        This Paper component will take up half of its parent container This Paper component will take up half of its
        parent container This Paper component will take up half of its parent container.
      </Paper>
    </Paper>
  )
}
